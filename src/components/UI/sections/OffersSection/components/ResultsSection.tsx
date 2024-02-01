import { useSuspenseQuery } from "@tanstack/react-query";
import { OffersList } from "@/components/Offer/OffersList";
import { searchOffers } from "@/data/Offers/searchOffers";
import { useSearch } from "@/providers/Search/SearchProvider";
import { useA11yNotification } from "@/providers/a11y/a11y-notification-provider";

interface ResultsSectionProps {
  term: string;
}

export function ResultsSection({ term }: ResultsSectionProps) {
  const { setLoading } = useSearch();
  const { notify } = useA11yNotification();

  const {
    data: { data: offers },
  } = useSuspenseQuery({
    queryKey: ["offers/search", term],
    queryFn: async ({ queryKey }) => {
      const result = await searchOffers(queryKey[1]);
      setLoading(false);
      notify("status", `${result.data.length} results found.`);
      return result;
    },
  });

  return <OffersList title="Search Results" offers={offers} />;
}
