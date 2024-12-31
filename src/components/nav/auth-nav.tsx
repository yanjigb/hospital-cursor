"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AuthNav() {
    const pathname = usePathname();

    // Don't show auth buttons on auth pages
    if (pathname === "/sign-in" || pathname === "/sign-up") {
        return null;
    }

    return (
        <div className="absolute right-4 top-4 md:right-8 md:top-8 flex items-center gap-2">
            <Button variant="ghost" asChild>
                <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild>
                <Link href="/sign-up">Sign up</Link>
            </Button>
        </div>
    );
} 
