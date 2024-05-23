"use client";

import Image from "next/image";
import brandLogo from "@/assets/nav-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLink = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Categories",
        url: "/categories",
    },
    {
        title: "Products",
        url: "/mens-wear",
    },
    {
        title: "Flash Sale",
        url: "/flash-sale",
    },
    {
        title: "Dashboard",
        url: "/dashboard",
    },
    {
        title: "About Us",
        url: "/about",
    },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white">
            <div className="mx-auto py-3 w-[95%] flex justify-between items-center gap-5">
                <div>
                    <Link href="/">
                        <Image src={brandLogo} width={125} height={68} alt="logo" />
                    </Link>
                </div>
                <div className="space-x-8 hidden lg:block">
                    {navLink.map(({ title, url }) => (
                        <Link key={title} href={url} className={`${pathname === url ? "text-[#ff9800]" : ""} font-medium hover:text-[#ff9800]`}>
                            {title}
                        </Link>
                    ))}
                </div>
                <div className="lg:hidden z-10">
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
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                    {
                        isMenuOpen && (
                            <div className="absolute top-16 left-0 py-10 w-full bg-black text-white">
                                <div className="flex flex-col items-center">
                                    {navLink.map(({ title, url }) => (
                                        <Link
                                            key={title}
                                            href={url}
                                            className={`py-1 w-full text-center ${pathname === url ? "text-[#ff9800]" : ""} hover:text-[#ff9800]`}
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        >
                                            {title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;