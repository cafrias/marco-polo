import { OfferCardSkeleton } from "@/components/Offer/OfferCardSkeleton";
import { createRange } from "@/utils/createRange";
import { useMemo } from "react";

const NUMBER_SKELETON_CARDS = 3;

export function OffersSectionSkeleton() {
  const range = useMemo(() => {
    return createRange(0, NUMBER_SKELETON_CARDS - 1);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Latest Offers</h1>
      <ul className="flex flex-col gap-5">
        {range.map((position) => {
          return <OfferCardSkeleton key={position} position={position} />;
        })}
      </ul>
    </div>
  );
}
