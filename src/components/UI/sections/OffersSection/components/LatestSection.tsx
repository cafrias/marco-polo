import { getLatestOffers } from "@/data/Offers/getLatestOffers";
import { useSuspenseQuery } from "@tanstack/react-query";
import { OffersList } from "@/components/Offer/OffersList";

export function LatestSection() {
  const {
    data: { data: offers },
  } = useSuspenseQuery({
    queryKey: ["offers/latest"],
    queryFn: getLatestOffers,
  });

  return <OffersList title="Latest Offers" offers={offers} />;
}
