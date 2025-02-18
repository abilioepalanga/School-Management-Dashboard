"use client";

import Image from "next/image";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", income: 4000, expense: 2400 },
    { name: "Feb", income: 3000, expense: 1398 },
    { name: "Mar", income: 2000, expense: 9800 },
    { name: "Apr", income: 2780, expense: 3908 },
    { name: "May", income: 1890, expense: 4800 },
    { name: "Jun", income: 2390, expense: 3800 },
    { name: "Jul", income: 3490, expense: 4300 },
    { name: "Aug", income: 3490, expense: 4300 },
    { name: "Sep", income: 3490, expense: 4300 },
    { name: "Oct", income: 3490, expense: 4300 },
    { name: "Nov", income: 3490, expense: 4300 },
    { name: "Dec", income: 3490, expense: 4300 },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4 shadow-md">
            {/* Title */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold text-gray-700">
                    Finance Overview
                </h1>
                <Image
                    src="/moreDark.png"
                    alt="Options"
                    width={20}
                    height={20}
                />
            </div>
            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    {/* Chart content will go here */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
<defs>
    <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#34D399" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#34D399" stopOpacity={0.2} />
    </linearGradient>
    <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#EF4444" stopOpacity={0.2} />
    </linearGradient>
</defs>;
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#6b7280" }}
                        tickLine={false}
                    />
                    <YAxis tick={{ fill: "#6b7280" }} tickLine={false} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Area
                        type="monotone"
                        dataKey="income"
                        stroke="#34D399"
                        strokeWidth={3}
                        fill="url(#incomeGradient)"
                    />
                    <Area
                        type="monotone"
                        dataKey="expense"
                        stroke="#EF4444"
                        strokeWidth={3}
                        fill="url(#expenseGradient)"
                    />
                    export default FinanceChart;
