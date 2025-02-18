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

    return <div className="bg-white p-4 rounded-md shadow-md"></div>;
};

export default Announcements;
