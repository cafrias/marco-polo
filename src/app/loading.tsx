import { OfferCard } from "@/components/Offer/OfferCard";

export default function Loading() {
  return (
    <div className="container px-4 pt-6 pb-4">
      <div className="mb-8">
        <div className="skeleton w-full h-10 rounded-md"></div>
      </div>
      <div>
        <div>
          <h1 className="font-bold text-2xl mb-6">
            <div className="skeleton w-2/3 h-6 rounded-sm"></div>
          </h1>
          <ul className="flex flex-col gap-5">
            <OfferCard.Skeleton />
            <OfferCard.Skeleton />
            <OfferCard.Skeleton />
          </ul>
        </div>
      </div>
    </div>
  );
}
