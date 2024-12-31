import { Card } from "@/components/ui/card";
import { Overview } from "@/components/dashboard/overview";
import { RecentAppointments } from "@/components/dashboard/recent-appointments";

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">
                    Overview of your hospital&apos;s performance
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-6">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Patients</p>
                        <div className="flex items-center">
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold">579</h3>
                                <span className="text-sm text-green-500">+15%</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Appointments</p>
                        <div className="flex items-center">
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold">54</h3>
                                <span className="text-sm text-green-500">+10%</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Income</p>
                        <div className="flex items-center">
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold">$8,399.24</h3>
                                <span className="text-sm text-green-500">+28%</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Treatments</p>
                        <div className="flex items-center">
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold">112</h3>
                                <span className="text-sm text-green-500">+12%</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <div className="p-6">
                        <div className="flex items-center justify-between space-y-2">
                            <h3 className="text-lg font-medium">Patient Overview</h3>
                        </div>
                        <Overview />
                    </div>
                </Card>
                <Card className="col-span-3">
                    <div className="p-6">
                        <div className="flex items-center justify-between space-y-2">
                            <h3 className="text-lg font-medium">Recent Appointments</h3>
                            <a href="/appointments" className="text-sm text-blue-500 hover:underline">
                                View all
                            </a>
                        </div>
                        <RecentAppointments />
                    </div>
                </Card>
            </div>
        </div>
    );
} 
