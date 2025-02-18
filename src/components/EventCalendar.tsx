"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
        id: 1,
        title: "Parent Meeting",
        time: "10:00 AM - 12:00 PM",
        description:
            "Meeting to discuss students' academic progress and other important school updates.",
    },
    {
        id: 2,
        title: "Mathematics Exam - 1st Year",
        time: "1:00 PM - 3:00 PM",
        description:
            "Assessment on algebra and geometry for 1st-year high school students.",
    },
    {
        id: 3,
        title: "History Class - 2nd Year",
        time: "9:00 AM - 11:00 AM",
        description:
            "Class on the French Revolution, covering key events and their consequences in the historical context.",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    const [isClient, setIsClient] = useState(false);

    // Garantir que o código roda no cliente para evitar erro de hidratação
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Configuração para evitar erro de formatação de dias da semana
    const calendarComponent = useMemo(() => {
        if (!isClient) return null;
        return <Calendar onChange={onChange} value={value} locale="en-US" />;
    }, [isClient, value]);

    return (
        <div className="bg-white p-4 rounded-md">
            {/* Renderizar o calendário apenas após montagem no cliente */}
            {calendarComponent}

            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div
                        className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">
                                {event.title}
                            </h1>
                            <span className="text-gray-300 text-xs">
                                {event.time}
                            </span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
