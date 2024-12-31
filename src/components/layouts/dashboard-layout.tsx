"use client";

import { usePathname } from "next/navigation";

export function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Don't render dashboard layout for auth pages
    if (pathname?.startsWith("/sign-")) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen max-h-screen overflow-hidden">
            {/* Main content */}
            <div className="flex-1 flex flex-col max-h-screen overflow-hidden">
                <main className="flex-1 p-6 overflow-y-auto pb-20 md:pb-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
