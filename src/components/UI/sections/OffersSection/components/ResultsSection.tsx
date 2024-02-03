import { useSuspenseQuery } from "@tanstack/react-query";
import { OffersList } from "@/components/Offer/OffersList";
import { searchOffers } from "@/data/Offers/searchOffers";
import { useSearch } from "@/providers/Search/SearchProvider";
import { useA11yNotification } from "@/providers/a11y/a11y-notification-provider";
import { Pagination } from "@/components/UI/pagination/pagination";
import { useCallback, useState } from "react";

interface ResultsSectionProps {
  term: string;
}

export function ResultsSection({ term }: ResultsSectionProps) {
  const [page, setPage] = useState(1);
  const { setLoading } = useSearch();
  const { notify } = useA11yNotification();

  const onPageChange = useCallback(
    (page: number) => {
      setPage(page);
      notify("polite", "Offers section changed");
    },
    [notify]
  );

  const {
    data: { docs: offers, totalPages },
  } = useSuspenseQuery({
    queryKey: ["offers/search", term, page],
    queryFn: async ({ queryKey }) => {
      const result = await searchOffers(queryKey[1] as string, {
        page: queryKey[2] as number,
      });
      setLoading(false);
      notify("status", `${result.docs.length} results found.`);
      return result;
    },
  });

  return (
    <OffersList title="Search Results" offers={offers}>
      <Pagination current={page} total={totalPages} onPage={onPageChange} />
    </OffersList>
  );
}
