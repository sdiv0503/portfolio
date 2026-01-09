import { Skeleton } from "@/components/ui/skeleton";

export function ProjectGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-xl border bg-card text-card-foreground shadow space-y-4 p-6">
          <Skeleton className="h-48 w-full rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BentoSkeleton() {
  return (
    <div className="py-24 px-4 container mx-auto max-w-6xl">
       <div className="mb-12 space-y-4">
         <Skeleton className="h-10 w-64" />
         <Skeleton className="h-6 w-96" />
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Skeleton className="lg:col-span-2 h-[400px] rounded-3xl" />
         <Skeleton className="h-[400px] rounded-3xl" />
       </div>
    </div>
  );
}