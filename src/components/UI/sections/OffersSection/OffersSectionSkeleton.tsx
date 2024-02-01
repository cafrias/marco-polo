import { OfferCardSkeleton } from "@/components/Offer/OfferCardSkeleton";

export function OffersSectionSkeleton() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Latest Offers</h1>
      <ul className="flex flex-col gap-5">
        <OfferCardSkeleton />
        <OfferCardSkeleton />
        <OfferCardSkeleton />
      </ul>
    </div>
  );
}
