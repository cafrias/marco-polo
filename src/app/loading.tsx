import { OffersSectionSkeleton } from "@/components/UI/sections/OffersSection/OffersSectionSkeleton";

export default function Loading() {
  return (
    <div className="container px-4 pt-6 pb-4">
      <div className="mb-8">
        <div className="skeleton w-full h-10 rounded-md"></div>
      </div>
      <OffersSectionSkeleton />
    </div>
  );
}
