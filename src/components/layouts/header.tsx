"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-20 md:h-16 items-center px-4 max-w-screen-2xl mx-auto">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="lg" className="mr-4">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <nav className="flex flex-col gap-6">
                                <Link href="/" className="flex items-center gap-2 font-semibold">
                                    <span className="text-2xl">🏥</span>
                                    <span className="text-xl">Hospital</span>
                                </Link>
                                <div className="flex flex-col space-y-4">
                                    <Link href="/" className="text-base font-medium transition-colors hover:text-primary">
                                        Dashboard
                                    </Link>
                                    <Link href="/appointments" className="text-base font-medium transition-colors hover:text-primary">
                                        Appointments
                                    </Link>
                                    <Link href="/messages" className="text-base font-medium transition-colors hover:text-primary">
                                        Messages
                                    </Link>
                                    <Link href="/settings" className="text-base font-medium transition-colors hover:text-primary">
                                        Settings
                                    </Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex flex-1 items-center justify-between md:justify-end">
                    <div className="md:w-auto md:flex-none">
                        <Link href="/" className="flex items-center gap-2 font-semibold md:hidden">
                            <span className="text-2xl">🏥</span>
                            <span className="text-lg">Hospital</span>
                        </Link>
                    </div>
                    <nav className="flex items-center gap-2">
                        <ModeToggle />
                        <div className="hidden md:flex md:items-center md:gap-2">
                            <Button variant="ghost" size="default" className="text-base" asChild>
                                <Link href="/sign-in">Sign in</Link>
                            </Button>
                            <Button size="default" className="text-base" asChild>
                                <Link href="/sign-up">Sign up</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
} 
