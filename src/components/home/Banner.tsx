import Image from "next/image";
import banner from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="bg-[#d1e2e9]">
            <div className="mx-auto pt-20 lg:pt-0 w-[95%] min-h-screen flex flex-col lg:flex-row items-center gap-10">
                <div className="w-full lg:w-2/5">
                    <h1 className="text-5xl font-semibold">Give Your Outfit <br /> A New Style!</h1>
                    <p className="my-10 text-[#555]">There&apos;s no shortage of remarkable ideas, what&apos;s missing is the will to execute them.</p>
                    <Link href="/mens-wear">
                        <button className="px-8 py-2 rounded-full bg-[#ff523b] hover:bg-[#563434] text-white">
                            Explore Now &#8594;
                        </button>
                    </Link>
                </div>
                <div className="w-full lg:w-3/5">
                    <Image src={banner} sizes="100vw" alt="banner image" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner;