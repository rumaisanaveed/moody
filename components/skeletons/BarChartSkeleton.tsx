import Skeleton from "./Skeleton";

export default function BarChartSkeleton() {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton
          variant="rectangular"
          viewHeight={500}
          viewWidth={500}
          key={index}
        />
      ))}
    </>
  );
}
