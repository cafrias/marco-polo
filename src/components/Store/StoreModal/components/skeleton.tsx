interface SkeletonProps {}

export function Skeleton({}: SkeletonProps) {
  return (
    <div className="min-h-60 flex justify-center">
      <div className="loading loading-spinner"></div>
    </div>
  );
}
