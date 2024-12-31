import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-2">
            <h2 className="text-2xl font-bold">Page not found</h2>
            <p className="text-muted-foreground">Could not find requested resource</p>
            <Button asChild className="mt-4">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
} 
