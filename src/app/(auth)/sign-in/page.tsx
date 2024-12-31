"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function SignInPage() {
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <>
            <div className="absolute right-4 top-4 md:right-8 md:top-8">
                Don&apos;t have an account?{" "}
                <Button variant="ghost" asChild className="hover:bg-transparent hover:text-primary">
                    <Link href="/sign-up">Sign up</Link>
                </Button>
            </div>
            <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Icons.logo className="mr-2 h-6 w-6" />
                        Hospital Admin
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This hospital admin dashboard has revolutionized how we manage our daily operations, making everything more efficient and organized.&rdquo;
                            </p>
                            <footer className="text-sm">Dr. Sarah Wilson</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <Card>
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl text-center">Sign in</CardTitle>
                                <CardDescription className="text-center">
                                    Enter your email and password to sign in to your account
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="grid grid-cols-2 gap-6">
                                    <Button variant="outline" disabled={isLoading}>
                                        <Icons.gitHub className="mr-2 h-4 w-4" />
                                        Github
                                    </Button>
                                    <Button variant="outline" disabled={isLoading}>
                                        <Icons.google className="mr-2 h-4 w-4" />
                                        Google
                                    </Button>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={onSubmit}>
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                placeholder="name@example.com"
                                                type="email"
                                                autoCapitalize="none"
                                                autoComplete="email"
                                                autoCorrect="off"
                                                disabled={isLoading}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password">Password</Label>
                                            <Input
                                                id="password"
                                                type="password"
                                                autoCapitalize="none"
                                                autoComplete="current-password"
                                                autoCorrect="off"
                                                disabled={isLoading}
                                            />
                                        </div>
                                        <Button className="w-full" disabled={isLoading}>
                                            {isLoading && (
                                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                            )}
                                            Sign In
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-4">
                                <div className="text-sm text-muted-foreground text-center">
                                    <Link
                                        href="/reset-password"
                                        className="hover:text-brand underline underline-offset-4"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <div className="text-sm text-muted-foreground text-center">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        href="/sign-up"
                                        className="hover:text-brand underline underline-offset-4"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
} 
