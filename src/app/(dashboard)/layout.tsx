import Link from "next/link";
import Image from "next/image";
import Menu from "../../components/Menu";
import NavBar from "@/components/NavBar";

export default function DashboardRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/*Left */}
            <div className="w-[14%] md:w[8%] lg:w-[16%] xl:w-[14%] bg-slate-300 p-4">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block"> IPM School</span>
                </Link>
                <Menu />
            </div>
            {/*Right */}
            <div className="w-[86%] md:[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                <NavBar />
                {children}{" "}
                {/* This is where the child components will be rendered */}
            </div>
        </div>
    );
}
