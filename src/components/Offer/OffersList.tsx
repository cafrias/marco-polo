import { Offer } from "@/models/Offer";
import { OfferCard } from "./OfferCard";
import { useStoreModal } from "@/providers/store/store-modal-provider";
import { Pagination } from "../UI/pagination/pagination";

interface OffersListProps {
  title: string;
  offers: Offer[];
}

export function OffersList({ title, offers }: OffersListProps) {
  const { setSelected: setSelectedStore } = useStoreModal();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-6">{title}</h1>
      {offers.length > 0 ? (
        <ul className="flex flex-col gap-5 mb-6">
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
      <Pagination current={5} total={25} />
    </section>
  );
}
