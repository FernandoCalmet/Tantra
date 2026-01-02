import { Skeleton } from "@/components/ui/skeleton";

export function ArticleSkeleton() {
  return (
    <div className="flex gap-8">
      {/* Main content skeleton */}
      <article className="flex-1 max-w-none">
        {/* Breadcrumbs skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Title and description skeleton */}
        <div className="mb-8 border-b border-border pb-8">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3 mt-2" />
        </div>

        {/* Content skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />

          <Skeleton className="h-8 w-2/3 mt-8 mb-4" />

          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />

          <Skeleton className="h-48 w-full mt-6 mb-6" />

          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </article>

      {/* Table of Contents skeleton */}
      <aside className="hidden xl:block w-64 shrink-0">
        <div className="sticky top-24">
          <Skeleton className="h-5 w-24 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5 ml-4" />
            <Skeleton className="h-4 w-3/4 ml-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3 ml-4" />
          </div>
        </div>
      </aside>
    </div>
  );
}
