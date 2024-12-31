"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { AddPatientDialog } from "@/components/patients/add-patient-dialog";

// Dummy data for patients
const patients = [
    {
        id: "OM123AA",
        name: "Brooklyn Simmons",
        email: "brooklyn.s@example.com",
        phone: "(603) 555-0123",
        department: "Cardiology",
        age: 29,
        lastVisit: "2024-01-15",
        avatar: "/avatars/01.png",
    },
    {
        id: "AT456BB",
        name: "Anthony Johnson",
        email: "anthony.j@example.com",
        phone: "(603) 555-0124",
        department: "Cardiology",
        age: 27,
        lastVisit: "2024-01-14",
        avatar: "/avatars/02.png",
    },
    {
        id: "EA789CC",
        name: "Sarah Miller Olivia",
        email: "sarah.m@example.com",
        phone: "(603) 555-0125",
        department: "Oncology",
        age: 35,
        lastVisit: "2024-01-13",
        avatar: "/avatars/03.png",
    },
    {
        id: "KL012DD",
        name: "Esther Howard",
        email: "esther.h@example.com",
        phone: "(603) 555-0126",
        department: "Neurology",
        age: 32,
        lastVisit: "2024-01-12",
        avatar: "/avatars/04.png",
    },
    {
        id: "PQ345EE",
        name: "Arlene McCoy",
        email: "arlene.m@example.com",
        phone: "(603) 555-0127",
        department: "Orthopedics",
        age: 28,
        lastVisit: "2024-01-11",
        avatar: "/avatars/05.png",
    },
];

export default function PatientsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPatients = patients.filter((patient) =>
        Object.values(patient).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Patients</h1>
                    <p className="text-muted-foreground">Manage your patients and their information</p>
                </div>
                <AddPatientDialog />
            </div>

            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search patients..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Last Visit</TableHead>
                            <TableHead>Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredPatients.map((patient) => (
                            <TableRow key={patient.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={patient.avatar} alt={patient.name} />
                                            <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        {patient.name}
                                    </div>
                                </TableCell>
                                <TableCell>{patient.id}</TableCell>
                                <TableCell>{patient.department}</TableCell>
                                <TableCell>{patient.phone}</TableCell>
                                <TableCell>{patient.age}</TableCell>
                                <TableCell>{patient.lastVisit}</TableCell>
                                <TableCell>{patient.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
} 
