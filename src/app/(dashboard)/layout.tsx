"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Calendar,
    Users,
    MessageSquare,
    CreditCard,
    Settings,
} from "lucide-react";
import { Header } from "@/components/layouts/header";

const sidebarItems = [
    {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Appointments",
        href: "/appointments",
        icon: Calendar,
    },
    {
        title: "Patients",
        href: "/patients",
        icon: Users,
    },
    {
        title: "Messages",
        href: "/messages",
        icon: MessageSquare,
    },
    {
        title: "Billing",
        href: "/billing",
        icon: CreditCard,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/" && (pathname === "/" || pathname === "")) return true;
        if (href !== "/" && pathname?.startsWith(href)) return true;
        return false;
    };

    return (
        <div className="flex min-h-screen max-h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="hidden md:flex w-64 flex-col bg-background border-r">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <span className="text-xl">🏥</span>
                        Hospital
                    </Link>
                </div>
                <nav className="flex-1 p-4 overflow-y-auto">
                    <ul className="space-y-2">
                        {sidebarItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                                        isActive(item.href) && "bg-accent"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Mobile sidebar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background z-10">
                <nav className="flex justify-around p-2">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center gap-1 p-2 text-xs",
                                isActive(item.href) && "text-primary"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col max-h-screen overflow-hidden">
                <Header />
                <main className="flex-1 p-6 overflow-y-auto pb-20 md:pb-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
