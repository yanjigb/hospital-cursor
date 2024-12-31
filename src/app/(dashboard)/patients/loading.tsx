import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function PatientsLoading() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <Skeleton className="h-8 w-[150px]" />
                    <Skeleton className="mt-2 h-4 w-[250px]" />
                </div>
                <Skeleton className="h-10 w-[120px]" />
            </div>

            <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-full" />
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                <Skeleton className="h-4 w-[100px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-4 w-[60px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-4 w-[100px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-4 w-[100px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-4 w-[60px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-4 w-[100px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-4 w-[150px]" />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-8 w-8 rounded-full" />
                                        <Skeleton className="h-4 w-[150px]" />
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-[60px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-[100px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-[100px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-[40px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-[80px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-4 w-[150px]" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
} 
