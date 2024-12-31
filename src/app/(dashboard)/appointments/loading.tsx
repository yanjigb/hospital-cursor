import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AppointmentsLoading() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <Skeleton className="h-8 w-[200px]" />
                    <Skeleton className="mt-2 h-4 w-[300px]" />
                </div>
                <Skeleton className="h-10 w-[140px]" />
            </div>

            <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Skeleton className="h-5 w-[100px]" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-[300px] w-full rounded-md" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                            <CardTitle>
                                <Skeleton className="h-5 w-[150px]" />
                            </CardTitle>
                            <Skeleton className="h-10 w-[200px]" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between rounded-lg border p-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <Skeleton className="h-4 w-[150px]" />
                                                <Skeleton className="h-4 w-[80px]" />
                                            </div>
                                            <Skeleton className="mt-2 h-4 w-[200px]" />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Skeleton className="h-4 w-[60px]" />
                                        <Skeleton className="mt-2 h-4 w-[80px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 
