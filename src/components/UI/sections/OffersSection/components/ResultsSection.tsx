import { useSuspenseQuery } from "@tanstack/react-query";
import { OffersList } from "@/components/Offer/OffersList";
import { searchOffers } from "@/data/Offers/searchOffers";
import { useSearch } from "@/providers/Search/SearchProvider";

interface ResultsSectionProps {
  term: string;
}

export function ResultsSection({ term }: ResultsSectionProps) {
  const { setLoading } = useSearch();

  const {
    data: { data: offers },
  } = useSuspenseQuery({
    queryKey: ["offers/search", term],
    queryFn: async ({ queryKey }) => {
      const result = await searchOffers(queryKey[1]);
      setLoading(false);
      return result;
    },
  });

  return <OffersList title="Search Results" offers={offers} />;
}
