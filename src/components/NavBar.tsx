import Image from "next/image";
const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-4 ">
            {/* Search Bar*/}
            <div className="hidden md:flex">
                <Image src="/search.png" alt="search" width={14} height={14} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="border-none outline-none ml-2"
                />
            </div>
            {/*Icons And User*/}
            <div className="flex items-center gap-6">
                {/*Message*/}
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image
                        src="/message.png"
                        alt="message"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
