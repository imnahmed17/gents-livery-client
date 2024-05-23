import Image from "next/image";
import brandLogo from "@/assets/footer-logo.png";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#00121b] text-[#fafafa]">
            <div className="mx-auto px-2.5 py-7 w-[95%] flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-1/4 px-5 py-2.5">
                    <Image className="mx-auto" src={brandLogo} width={202} height={127} alt="logo" />
                    <p className="mt-4 text-justify">Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p> 
                </div>
                <div className="w-full lg:w-1/4 px-5 py-2.5 text-center lg:text-right">
                    <h3 className="my-2.5 font-light text-white uppercase">About</h3>
                    <div className="w-full flex justify-center lg:justify-end">
                        <div className="h-[3px] w-[50px] bg-[#ff9800]"></div>
                    </div>
                    <ul className="mt-2 space-y-2.5 text-sm text-[#fafafa]">
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="/about">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="/about">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="">
                                Customer Care
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/4 px-5 py-2.5 text-center lg:text-right">
                    <h3 className="my-2.5 font-light text-white uppercase">Information</h3>
                    <div className="w-full flex justify-center lg:justify-end">
                        <div className="h-[3px] w-[100px] bg-[#ff9800]"></div>
                    </div>
                    <ul className="mt-2 space-y-2.5 text-sm text-[#fafafa]">
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="">
                                Privacy & Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="">
                                Coverage Areas
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/4 px-5 py-2.5 text-center lg:text-right">
                    <h3 className="my-2.5 font-light text-white uppercase">Feature</h3>
                    <div className="w-full flex justify-center lg:justify-end">
                        <div className="h-[3px] w-[60px] bg-[#ff9800]"></div>
                    </div>
                    <ul className="mt-2 space-y-2.5 text-sm text-[#fafafa]">
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="/categories">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link className="transition duration-500 ease-in-out hover:text-[#ff9800] hover:pr-4" href="/">
                                Trending Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-5 bg-black text-white text-center text-xs">
                <p>Copyright &copy; Gents Livery 2021.All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;