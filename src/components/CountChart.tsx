"use client";
import Image from "next/image";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count: 106,
        fill: "#white",
    },
    {
        name: "Girls",
        count: 55,
        fill: "#8884d8",
    },
    {
        name: "Boys",
        count: 50,
        fill: "#83a6ed",
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/*Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Sduents</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            {/*Chart */}
            <div className="w-full h-[75%] ">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={19}
                        data={data}
                    >
                        <RadialBar
                            label={{ position: "insideStart", fill: "#fff" }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            {/*Button */}
            <div className="flex justify-center gap-16"></div>
            <div className="flex flex-col gap-1 ">
                <div className="w-5 h-5 bg-lamaSky rounded-full" />
                <h1 className="font-bold">1,234</h1>
                <h2 className="text-xs text-gray-300">Boys (55%)</h2>
            </div>
            <div className="flex flex-col gap-1 ">
                <div className="w-5 h-5 bg-lamaYellow rounded-full" />
                <h1 className="font-bold">1,234</h1>
                <h2 className="text-xs text-gray-300">Girls (45%)</h2>
            </div>
        </div>
    );
};
export default CountChart;
