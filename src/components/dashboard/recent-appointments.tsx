"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const appointments = [
    {
        id: 1,
        name: "Brooklyn Simmons",
        type: "Allergy Testing",
        time: "10:30",
        date: "Tomorrow",
        status: "upcoming",
    },
    {
        id: 2,
        name: "Courtney Henry",
        type: "Lab Tests",
        time: "10:00",
        date: "Tomorrow",
        status: "upcoming",
    },
    {
        id: 3,
        name: "Sarah Miller Olivia",
        type: "Oncology Treatment",
        time: "15:00",
        date: "Today",
        status: "completed",
    },
];

export function RecentAppointments() {
    return (
        <div className="space-y-4 mt-4">
            {appointments.map((appointment) => (
                <div
                    key={appointment.id}
                    className="flex items-center justify-between space-x-4"
                >
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarFallback>{appointment.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">{appointment.name}</p>
                            <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm font-medium leading-none">{appointment.time}</p>
                            <p className="text-sm text-muted-foreground">{appointment.date}</p>
                        </div>
                        <Badge
                            variant={appointment.status === "completed" ? "secondary" : "outline"}
                            className={
                                appointment.status === "completed"
                                    ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                    : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                            }
                        >
                            {appointment.status}
                        </Badge>
                    </div>
                </div>
            ))}
        </div>
    );
} 
