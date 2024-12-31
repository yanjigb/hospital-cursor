import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BillingLoading() {
    return (
        <div className="space-y-6">
            <div>
                <Skeleton className="h-10 w-[150px]" />
                <Skeleton className="h-4 w-[250px] mt-1" />
            </div>

            {/* Billing Overview Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-7 w-[120px]" />
                            <Skeleton className="h-4 w-[100px] mt-1" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Billing History */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-7 w-[150px]" />
                        <Skeleton className="h-10 w-[120px]" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Table Header */}
                        <div className="grid grid-cols-5 text-sm">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-[100px]" />
                        </div>

                        {/* Table Rows */}
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="grid grid-cols-5 items-center gap-4">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <Skeleton className="h-4 w-[150px]" />
                                <Skeleton className="h-4 w-[100px]" />
                                <Skeleton className="h-4 w-[80px]" />
                                <Skeleton className="h-8 w-[100px]" />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-7 w-[150px]" />
                        <Skeleton className="h-10 w-[150px]" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {Array.from({ length: 2 }).map((_, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Skeleton className="h-10 w-14" />
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[150px]" />
                                        <Skeleton className="h-3 w-[100px]" />
                                    </div>
                                </div>
                                <Skeleton className="h-4 w-[60px]" />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 
