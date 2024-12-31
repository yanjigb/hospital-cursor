import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function DashboardLoading() {
    return (
        <>
            {/* Auth Navigation Skeleton */}
            <div className="absolute right-4 top-4 md:right-8 md:top-8 flex items-center gap-2">
                <Skeleton className="h-10 w-[80px]" />
                <Skeleton className="h-10 w-[80px]" />
            </div>

            <div className="flex-1 space-y-6 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <Skeleton className="h-10 w-[200px]" />
                        <Skeleton className="h-4 w-[300px] mt-1" />
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Card key={i} className="p-6">
                            <Skeleton className="h-7 w-[120px]" />
                            <Skeleton className="h-4 w-[80px] mt-1" />
                        </Card>
                    ))}
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4 p-6">
                        <Skeleton className="h-[300px] w-full" />
                    </Card>
                    <Card className="col-span-3 p-6">
                        <Skeleton className="h-[300px] w-full" />
                    </Card>
                </div>
            </div>
        </>
    );
} 
