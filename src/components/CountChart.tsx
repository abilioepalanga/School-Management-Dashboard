"use client";
import Image from "next/image";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import { motion } from "framer-motion";

const data = [
    { name: "Girls", count: 25, color: "#FACC15" },
    { name: "Boys", count: 50, color: "#38BDF8" },
];

const CountChart = () => {
    return (
        <motion.div
            className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl w-full h-full p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Title */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-700">
                    Students Overview
                </h1>
                <Image
                    src="/moreDark.png"
                    alt="Options"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            </div>
            {/* Chart */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            fill="#8884d8"
                            paddingAngle={3}
                            dataKey="count"
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt="Icon"
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </motion.div>
    );
};

export default CountChart;
