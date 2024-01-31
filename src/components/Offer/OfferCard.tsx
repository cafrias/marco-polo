import Image from "next/image";
import type { Offer } from "../../models/Offer";

interface OfferCardProps {
  offer: Offer;
  onStore: (id: string) => void;
}

export function OfferCard({ offer, onStore }: OfferCardProps) {
  return (
    <article className="flex border border-base-200 rounded-r-xl">
      <div className="flex flex-col mr-2 w-1/4">
        <Image
          className="w-full"
          src={offer.pictureUrl}
          alt=""
          height={150}
          width={150}
        />
        <p className="bg-gray-200 text-center grow flex items-center justify-center">
          {`${offer.expirationDate.getDay() + 1}/${
            offer.expirationDate.getMonth() + 1
          }`}
        </p>
      </div>
      <div className="w-3/4 flex flex-col py-2">
        <header>
          <h3 className="text-xl truncate font-bold leading-tight">
            {offer.name}
          </h3>
          <p className="truncate leading-tight">{offer.brand.name}</p>
        </header>
        <p>
          <button
            className="btn btn-link btn-xs truncate pl-0 leading-tight"
            onClick={() => onStore(offer.store.id)}
          >
            {offer.store.name}
          </button>
        </p>
        <p className="mt-auto">
          <strong className="text-2xl">
            ${offer.price.getAmount().toLocaleString()}
          </strong>
          <span>x{offer.qty}</span>
        </p>
      </div>
    </article>
  );
}

OfferCard.Skeleton = function OfferCardSkeleton() {
  return (
    <div className="flex">
      <div className="mr-2 w-1/4">
        <div className="skeleton w-full h-full rounded-none"></div>
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="mb-2">
          <div className="skeleton w-2/3 h-6 mb-1 rounded-sm"></div>
          <div className="skeleton w-16 h-4 rounded-sm"></div>
        </div>
        <div className="skeleton w-16 h-8 rounded-md mb-2"></div>
        <div className="mt-auto flex items-end">
          <div className="skeleton w-1/2 h-10 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};
