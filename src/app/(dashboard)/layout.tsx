export default function DashboardRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/*Left */}
            <div className="w-[14%] bg-red-200">L</div>
            {/*Right */}
            <div className="w-[86%] bg-blue-200">R</div>
        </div>
    );
}
