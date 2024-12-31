"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
    { name: "Jan", total: 40 },
    { name: "Feb", total: 120 },
    { name: "Mar", total: 125 },
    { name: "Apr", total: 130 },
    { name: "May", total: 140 },
    { name: "Jun", total: 150 },
];

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ strokeWidth: 4 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
} 
