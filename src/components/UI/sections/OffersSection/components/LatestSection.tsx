import { getLatestOffers } from "@/data/Offers/getLatestOffers";
import { useSuspenseQuery } from "@tanstack/react-query";
import { OffersList } from "@/components/Offer/OffersList";
import { useCallback, useState } from "react";
import { Pagination } from "@/components/UI/pagination/pagination";
import { useA11yNotification } from "@/providers/a11y/a11y-notification-provider";

export function LatestSection() {
  const [page, setPage] = useState(1);
  const { notify } = useA11yNotification();

  const {
    data: { docs: offers, totalPages },
  } = useSuspenseQuery({
    queryKey: ["offers/latest", page],
    queryFn: ({ queryKey }) => {
      return getLatestOffers({ page: queryKey[1] as number });
    },
  });

  const onPageChange = useCallback(
    (page: number) => {
      setPage(page);
      notify("polite", "Offers section changed");
    },
    [notify]
  );

  return (
    <OffersList title="Latest Offers" offers={offers}>
      <Pagination current={page} total={totalPages} onPage={onPageChange} />
    </OffersList>
  );
}
