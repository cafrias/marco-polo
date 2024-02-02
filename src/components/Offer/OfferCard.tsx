import Image from "next/image";
import type { Offer } from "../../models/Offer";
import { useMemo } from "react";
import { Money } from "@/models/Money";
import { resolveApiUrl } from "@/utils/resolveApiUrl";

interface OfferCardProps {
  offer: Offer;
  onStore: (id: string) => void;
}

export function OfferCard({ offer, onStore }: OfferCardProps) {
  const date = useMemo(() => {
    return new Date(offer.expirationDate);
  }, [offer.expirationDate]);

  const price = useMemo(() => {
    return new Money(offer.price);
  }, [offer.price]);

  const imgSrc = resolveApiUrl(
    offer.pictureURL.sizes.card.url || offer.pictureURL.url
  );

  return (
    <article className="flex border border-base-200 rounded-r-xl">
      <div className="flex flex-col mr-2 w-1/4">
        <Image
          className="w-full"
          src={imgSrc}
          alt=""
          height={150}
          width={150}
        />
        <p className="bg-gray-200 text-center grow flex items-center justify-center">
          {`${date.getDay() + 1}/${date.getMonth() + 1}`}
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
            ${price.getAmount().toLocaleString()}
          </strong>
          <span>x{offer.qty}</span>
        </p>
      </div>
    </article>
  );
}
