"use client ";

import Image from "next/image";
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    Rectangle,
} from "recharts";

const data = [
    {
        name: "Mon",
        present: 40,
        absent: 24,
    },
    {
        name: "Tue",
        present: 30,
        absent: 13,
    },
    {
        name: "wed",
        present: 20,
        absent: 35,
    },
    {
        name: "Thu",
        present: 27,
        absent: 39,
    },
    {
        name: "Fri",
        present: 18,
        absent: 48,
    },
];

const AttendanceChart = () => {
    return (
        <div className="">
            <div className="">
                <h1>Attendance</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            {/* Attendance Chart */}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="pv"
                        fill="#8884d8"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                    />
                    <Bar
                        dataKey="uv"
                        fill="#82ca9d"
                        activeBar={<Rectangle fill="gold" stroke="purple" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default AttendanceChart;
