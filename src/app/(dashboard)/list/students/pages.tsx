import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    {/* (This part will be added later) */}
                    {/* SMALL CARDS */}
                    {/* (This part will be added later) */}
                </div>
                {/* BOTTOM */}
                {/* (This part will be added later) */}
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                {/* SHORTCUTS */}
                {/* (This part will be added later) */}
            </div>
        </div>
    );
};

export default SingleStudentPage;
