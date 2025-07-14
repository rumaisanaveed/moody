interface ISkeletonProps {
  isLoading?: boolean;
  skeleton: React.ReactNode;
  children?: React.ReactNode;
}

export default function SkeletonLoader({
  isLoading,
  skeleton,
  children,
}: ISkeletonProps) {
  return isLoading ? skeleton : children;
}
