import { LatestSectionSkeleton } from "@/components/UI/sections/LatestSectionSkeleton";

export default function Loading() {
  return (
    <div className="container px-4 pt-6 pb-4">
      <div className="mb-8">
        <div className="skeleton w-full h-10 rounded-md"></div>
      </div>
      <LatestSectionSkeleton />
    </div>
  );
}
