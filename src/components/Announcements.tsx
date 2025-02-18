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
        </div>
    );
};

export default Announcements;
