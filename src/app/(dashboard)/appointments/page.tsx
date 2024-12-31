"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddAppointmentDialog } from "@/components/appointments/add-appointment-dialog";

// Dummy data for appointments
const appointments = [
    {
        id: 1,
        patient: "Brooklyn Simmons",
        type: "Cardiology Consultation",
        time: "09:00 AM",
        date: new Date(2024, 0, 31),
        avatar: "/avatars/01.png",
        status: "upcoming"
    },
    {
        id: 2,
        patient: "Courtney Henry",
        type: "General Checkup",
        time: "10:30 AM",
        date: new Date(2024, 0, 31),
        avatar: "/avatars/02.png",
        status: "upcoming"
    },
    {
        id: 3,
        patient: "Sarah Miller",
        type: "Dental Cleaning",
        time: "02:00 PM",
        date: new Date(2024, 0, 31),
        avatar: "/avatars/03.png",
        status: "completed"
    }
];

export default function AppointmentsPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAppointments = appointments.filter(
        (appointment) =>
            appointment.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
            appointment.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "upcoming":
                return "bg-blue-500/10 text-blue-500";
            case "completed":
                return "bg-green-500/10 text-green-500";
            case "cancelled":
                return "bg-red-500/10 text-red-500";
            default:
                return "bg-gray-500/10 text-gray-500";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Appointments</h1>
                    <p className="text-muted-foreground">Schedule and manage patient appointments</p>
                </div>
                <AddAppointmentDialog />
            </div>

            <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
                {/* Calendar Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="w-full"
                            classNames={{
                                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                                cell: cn(
                                    "text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 h-9 w-9"
                                ),
                                day: cn(
                                    "h-9 w-9 p-0 font-normal text-foreground aria-selected:opacity-100"
                                ),
                                day_range_end: "day-range-end",
                                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                day_today: "bg-accent text-accent-foreground",
                                day_outside: "text-muted-foreground opacity-50",
                                day_disabled: "text-muted-foreground opacity-50",
                                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                                day_hidden: "invisible",
                                caption: "flex justify-center pt-1 relative items-center text-sm font-medium",
                                nav_button_previous: "absolute left-1",
                                nav_button_next: "absolute right-1",
                                row: "flex w-full mt-2",
                                table: "w-full border-collapse space-y-1",
                                head_row: "flex",
                                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                            }}
                            components={{
                                DayContent: ({ date }) => (
                                    <div
                                        className={cn(
                                            "relative w-full h-full flex items-center justify-center",
                                            appointments.some(
                                                (appointment) =>
                                                    appointment.date.toDateString() === date.toDateString()
                                            ) && "after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-blue-500"
                                        )}
                                    >
                                        {date.getDate()}
                                    </div>
                                ),
                            }}
                        />
                    </CardContent>
                </Card>

                {/* Appointments List */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <CardTitle>
                            Appointments for {date?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </CardTitle>
                        <div className="relative w-[200px]">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search appointments..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredAppointments.length === 0 ? (
                                <p className="text-center text-muted-foreground">No appointments found for this date.</p>
                            ) : (
                                filteredAppointments.map((appointment) => (
                                    <div
                                        key={appointment.id}
                                        className="flex items-center justify-between rounded-lg border p-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src={appointment.avatar} />
                                                <AvatarFallback>{appointment.patient.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium">{appointment.patient}</p>
                                                    <Badge
                                                        variant="secondary"
                                                        className={getStatusColor(appointment.status)}
                                                    >
                                                        {appointment.status}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{appointment.type}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{appointment.time}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {appointment.date.toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 
