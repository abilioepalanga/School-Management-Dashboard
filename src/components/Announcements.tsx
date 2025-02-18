const Announcements = () => {
    const announcements = [
        // ...data remains the same
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
