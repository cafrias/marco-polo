const OPACITY_START = 0.6;
const OPACITY_DELTA = 0.15;

export interface OfferCardSkeletonProps {
  position: number;
}

export function OfferCardSkeleton({ position }: OfferCardSkeletonProps) {
  return (
    <div
      className="flex"
      aria-label="Loading ..."
      style={{
        opacity: OPACITY_START - position * OPACITY_DELTA,
      }}
    >
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
}
