"use client";
import Image from "next/image";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
    { name: "Mon", present: 60, absent: 40 },
    { name: "Tue", present: 70, absent: 60 },
    { name: "Wed", present: 90, absent: 75 },
    { name: "Thu", present: 90, absent: 75 },
    { name: "Fri", present: 65, absent: 55 },
];

const AttendanceChart = () => {
    return (
        <motion.div
            className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-700">
                    Attendance Overview
                </h1>
                <Image
                    src="/moreDark.png"
                    alt="Options"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#6b7280", fontSize: 14 }}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#6b7280", fontSize: 14 }}
                        tickLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: "10px",
                            borderColor: "lightgray",
                            backgroundColor: "white",
                            padding: "10px",
                        }}
                        cursor={{ fill: "#f3f4f6" }}
                    />
                    <Legend wrapperStyle={{ marginTop: 10 }} />
                    <Bar
                        dataKey="present"
                        fill="url(#presentGradient)"
                        radius={[8, 8, 0, 0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill="url(#absentGradient)"
                        radius={[8, 8, 0, 0]}
                    />
                    <defs>
                        <linearGradient
                            id="presentGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="#FACC15" />
                            <stop offset="100%" stopColor="#EAB308" />
                        </linearGradient>
                        <linearGradient
                            id="absentGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="#38BDF8" />
                            <stop offset="100%" stopColor="#0284C7" />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default AttendanceChart;
