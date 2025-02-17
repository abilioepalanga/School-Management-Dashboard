"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
    { name: "Total", count: 106, fill: "#E5E7EB" },
    { name: "Girls", count: 55, fill: "#FACC15" },
    { name: "Boys", count: 50, fill: "#38BDF8" },
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
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={20}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* Legend */}
            <div className="flex justify-around mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#38BDF8] rounded-full" />
                    <div>
                        <h1 className="font-bold text-gray-700">1,234</h1>
                        <h2 className="text-xs text-gray-500">Boys (55%)</h2>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#FACC15] rounded-full" />
                    <div>
                        <h1 className="font-bold text-gray-700">1,234</h1>
                        <h2 className="text-xs text-gray-500">Girls (45%)</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CountChart;
