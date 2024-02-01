import { OfferCard } from "@/components/Offer/OfferCard";
import { useStoreModalState } from "@/components/Store/StoreModal/StoreModalProvider";
import { getLatestOffers } from "@/data/Offers/getLatestOffers";
import { useSuspenseQuery } from "@tanstack/react-query";

interface LatestSectionProps {}

export function LatestSection({}: LatestSectionProps) {
  const {
    data: { data: offers },
  } = useSuspenseQuery({
    queryKey: ["offers/latest"],
    queryFn: getLatestOffers,
  });

  const { setSelected: setSelectedStore } = useStoreModalState();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-6">Latest Offers</h1>
      <ul className="flex flex-col gap-5">
        {offers.map((offer) => {
          return (
            <li key={offer.id}>
              <OfferCard onStore={setSelectedStore} offer={offer} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
