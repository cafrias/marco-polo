import { Offer } from "@/models/Offer";
import { useStoreModalState } from "../Store/StoreModal/StoreModalProvider";
import { OfferCard } from "./OfferCard";

interface OffersListProps {
  title: string;
  offers: Offer[];
}

export function OffersList({ title, offers }: OffersListProps) {
  const { setSelected: setSelectedStore } = useStoreModalState();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-6">{title}</h1>
      {offers.length > 0 ? (
        <ul className="flex flex-col gap-5">
          {offers.map((offer) => {
            return (
              <li key={offer.id}>
                <OfferCard onStore={setSelectedStore} offer={offer} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No offers found</p>
      )}
    </section>
  );
}
