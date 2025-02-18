const Announcements = () => {
    const announcements = [
        {
            title: "System Maintenance Scheduled",
            date: "2025-03-15",
            description:
                "Our servers will undergo maintenance on March 15th from 2 AM to 4 AM UTC. Some services may be temporarily unavailable. We appreciate your patience.",
        },
        {
            title: "New Feature: Dark Mode",
            date: "2025-03-10",
            description:
                "We are excited to introduce Dark Mode! You can now switch to a dark theme for better readability at night. Check your settings to enable it.",
        },
        {
            title: "Security Update Released",
            date: "2025-03-05",
            description:
                "A new security update has been deployed to enhance data protection. Please ensure your app is updated to the latest version.",
        },
    ];

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between border-b pb-2 mb-4">
                <h1 className="text-xl font-semibold text-gray-800">
                    Announcements
                </h1>
                <span className="text-xs text-blue-500 cursor-pointer hover:underline">
                    View All
                </span>
            </div>
            <div className="flex flex-col gap-4">
                {announcements.map((announcement, index) => (
                    <div
                        key={index}
                        className={`rounded-md p-4 ${
                            index % 2 === 0 ? "bg-blue-100" : "bg-yellow-100"
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="font-medium text-gray-800">
                                {announcement.title}
                            </h2>
                            <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1 border">
                                {announcement.date}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            {announcement.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
