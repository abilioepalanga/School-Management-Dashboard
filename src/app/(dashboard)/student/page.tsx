import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";

import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                <div className="h-full bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Schedule </h1>
                    <p className="text-sm text-gray-500">
                        This is the schedule for 4th grade student. Class: {""}
                        <span className="text-blue-900">B001</span>
                    </p>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default StudentPage;
