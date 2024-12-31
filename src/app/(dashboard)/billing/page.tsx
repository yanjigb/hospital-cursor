"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Download } from "lucide-react";
import { format } from "date-fns";

// Dummy data for invoices
const invoices = [
    {
        id: "INV001",
        patient: "Brooklyn Simmons",
        service: "Cardiology Consultation",
        amount: 150.00,
        status: "paid",
        date: "2024-01-15",
    },
    {
        id: "INV002",
        patient: "Courtney Henry",
        service: "Lab Tests",
        amount: 75.50,
        status: "pending",
        date: "2024-01-14",
    },
    {
        id: "INV003",
        patient: "Sarah Miller Olivia",
        service: "Oncology Treatment",
        amount: 450.00,
        status: "paid",
        date: "2024-01-13",
    },
    {
        id: "INV004",
        patient: "Esther Howard",
        service: "Neurology Consultation",
        amount: 200.00,
        status: "overdue",
        date: "2024-01-10",
    },
    {
        id: "INV005",
        patient: "Arlene McCoy",
        service: "Orthopedic Treatment",
        amount: 350.00,
        status: "paid",
        date: "2024-01-09",
    },
];

export default function BillingPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredInvoices = invoices.filter((invoice) =>
        Object.values(invoice).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "paid":
                return "bg-green-500/10 text-green-500";
            case "pending":
                return "bg-yellow-500/10 text-yellow-500";
            case "overdue":
                return "bg-red-500/10 text-red-500";
            default:
                return "bg-gray-500/10 text-gray-500";
        }
    };

    const totalRevenue = invoices
        .filter((invoice) => invoice.status === "paid")
        .reduce((sum, invoice) => sum + invoice.amount, 0);

    const pendingAmount = invoices
        .filter((invoice) => invoice.status === "pending" || invoice.status === "overdue")
        .reduce((sum, invoice) => sum + invoice.amount, 0);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Billing</h1>
                <p className="text-muted-foreground">Manage invoices and payments</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <span className="text-green-500 text-sm">+28%</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
                        <span className="text-yellow-500 text-sm">Pending</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${pendingAmount.toFixed(2)}</div>
                        <p className="text-xs text-muted-foreground">
                            From {invoices.filter((i) => i.status !== "paid").length} invoices
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{invoices.length}</div>
                        <p className="text-xs text-muted-foreground">
                            All time invoices
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Paid Invoices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {invoices.filter((i) => i.status === "paid").length}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Successfully paid
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Recent Invoices</CardTitle>
                        <div className="flex items-center gap-2">
                            <div className="relative w-[200px]">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search invoices..."
                                    className="pl-8"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Export
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice ID</TableHead>
                                <TableHead>Patient</TableHead>
                                <TableHead>Service</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredInvoices.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium">{invoice.id}</TableCell>
                                    <TableCell>{invoice.patient}</TableCell>
                                    <TableCell>{invoice.service}</TableCell>
                                    <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className={getStatusColor(invoice.status)}
                                        >
                                            {invoice.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{format(new Date(invoice.date), "PPP")}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
} 
