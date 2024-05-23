"use client";

import Image from "next/image";
import brandLogo from "@/assets/nav-logo.png";
import brandLogo1 from "@/assets/footer-logo.png";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLink = [
    {
        title: "Home",
        url: "/dashboard",
    },
    {
        title: "All Products",
        url: "/dashboard/all-products",
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <>
            {/* Small Screen Navbar */}
            <div className="bg-black text-white">
                <div className="mx-auto py-3 w-[95%] flex justify-between items-center md:hidden">
                    <div>
                        <Link href="/">
                            <Image src={brandLogo} width={125} height={68} alt="logo" />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div className={`z-10 md:fixed overflow-x-hidden bg-[#D9D9D9] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isMenuOpen && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
                <div>
                    <Link href="/" className="mt-2 w-full flex justify-center">
                        <Image src={brandLogo1} width={145} height={68} alt="logo" />
                    </Link>
                    <div className="mt-10 flex flex-col gap-2">
                        {navLink.map(({ title, url }) => (
                            <Link key={title} href={url} className={`${pathname === url ? "bg-[#BBBBBB]" : "border border-[#BBBBBB] text-gray-500"} px-4 py-3 font-medium hover:text-black hover:bg-[#BBBBBB]`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;