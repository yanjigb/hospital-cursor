"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    LayoutDashboard,
    Users,
    Calendar,
    MessageSquare,
    Receipt,
    Settings,
    Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
    {
        name: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Patients",
        href: "/patients",
        icon: Users,
    },
    {
        name: "Appointments",
        href: "/appointments",
        icon: Calendar,
    },
    {
        name: "Messages",
        href: "/messages",
        icon: MessageSquare,
    },
    {
        name: "Billing",
        href: "/billing",
        icon: Receipt,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isActivePath = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            {/* Sidebar for desktop */}
            <aside className="hidden border-r bg-background lg:block lg:w-64">
                <div className="flex h-full flex-col">
                    <div className="border-b p-6">
                        <h2 className="text-2xl font-bold">Medisight</h2>
                    </div>
                    <nav className="flex-1 space-y-1 p-4">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = isActivePath(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    <Icon className="h-5 w-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            {/* Mobile header and navigation */}
            <header className="flex h-14 items-center justify-between border-b bg-background px-4 lg:hidden">
                <div className="flex items-center gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-0">
                            <div className="border-b p-6">
                                <h2 className="text-2xl font-bold">Medisight</h2>
                            </div>
                            <nav className="space-y-1 p-4">
                                {navigation.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = isActivePath(item.href);
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                                            )}
                                        >
                                            <Icon className="h-5 w-5" />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2 className="text-lg font-semibold">Medisight</h2>
                </div>
                <ThemeToggle />
            </header>

            {/* Main content */}
            <div className="flex-1">
                <header className="hidden h-14 items-center justify-end border-b bg-background px-6 lg:flex">
                    <ThemeToggle />
                </header>
                <main className="container mx-auto p-4 lg:p-6">{children}</main>
            </div>
        </div>
    );
} 
