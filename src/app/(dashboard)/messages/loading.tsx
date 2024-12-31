import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function MessagesLoading() {
    return (
        <div className="space-y-6">
            <div>
                <Skeleton className="h-10 w-[150px]" />
                <Skeleton className="h-4 w-[250px] mt-1" />
            </div>

            <div className="grid h-[calc(100vh-12rem)] grid-cols-1 gap-4 lg:grid-cols-[300px_1fr]">
                {/* Conversations List */}
                <Card className="flex flex-col lg:max-h-full">
                    <CardHeader className="space-y-4 p-4">
                        <div className="relative">
                            <Skeleton className="h-10 w-full" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-auto p-0">
                        <div className="space-y-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 hover:bg-muted/50">
                                    <Skeleton className="h-10 w-10 rounded-full" />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <Skeleton className="h-4 w-24" />
                                            <Skeleton className="h-3 w-12" />
                                        </div>
                                        <Skeleton className="h-3 w-full mt-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Chat Area */}
                <Card className="flex flex-col lg:max-h-full">
                    <CardHeader className="border-b p-4">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div>
                                <Skeleton className="h-5 w-32" />
                                <Skeleton className="h-3 w-16 mt-1" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col p-0">
                        {/* Messages */}
                        <div className="flex-1 space-y-4 overflow-auto p-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-3 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}
                                >
                                    <Skeleton className="h-10 w-10 rounded-full" />
                                    <div className={`max-w-[75%] space-y-2`}>
                                        <Skeleton className="h-20 w-full rounded-lg" />
                                        <Skeleton className="h-3 w-20" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="flex items-center gap-2 border-t p-4">
                            <Skeleton className="h-10 flex-1" />
                            <Skeleton className="h-10 w-10" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 
