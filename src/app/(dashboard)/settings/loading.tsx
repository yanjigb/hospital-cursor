import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function SettingsLoading() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <Skeleton className="h-8 w-48 mb-2" />
                    <Skeleton className="h-4 w-64" />
                </div>
            </div>
            <div className="grid gap-6">
                <Card className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full max-w-md" />
                        </div>
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full max-w-md" />
                        </div>
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full max-w-md" />
                        </div>
                    </div>
                    <Skeleton className="h-10 w-28" />
                </Card>
                <Card className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-40" />
                        <Skeleton className="h-4 w-72" />
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-10 w-full max-w-md" />
                        </div>
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-10 w-full max-w-md" />
                        </div>
                    </div>
                    <Skeleton className="h-10 w-28" />
                </Card>
                <Card className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-36" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-10 w-full max-w-md" />
                        </div>
                    </div>
                    <Skeleton className="h-10 w-28" />
                </Card>
            </div>
        </div>
    );
} 
