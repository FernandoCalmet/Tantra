import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      {/* Title skeleton */}
      <Skeleton className="h-12 w-3/4 mb-6" />

      {/* Content skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />

        <Skeleton className="h-8 w-1/2 mt-8 mb-4" />

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      </div>
    </article>
  );
}
