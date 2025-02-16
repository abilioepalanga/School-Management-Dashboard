import Image from "next/image";
const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-4 ">
            {/* Search Bar*/}
            <div className="hidden md:flex">
                <Image src="/search.png" alt="search" width={14} height={14} />
                <input
                    type="text"
                    placeholder="Search"
                    className="border-none outline-none ml-2"
                />
            </div>
            {/*Icons And User*/}
            <div className=""> </div>
        </div>
    );
};

export default NavBar;
