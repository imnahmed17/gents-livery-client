import Image from "next/image";
import Link from "next/link";

const TopCategories = () => {
    return (
        <div className="mt-16 px-4">
            <h2 className="text-2xl font-medium text-center">Top Categories</h2>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Link href="/mens-wear?category=pant">
                    <Image 
                        src="https://pluspoint.com.bd/images/media/2023/03/lUWoz20811.jpg" 
                        alt="Pant"
                        width={500} 
                        height={700} 
                        className="h-full rounded-xl" 
                    />
                </Link>
                <div className="flex flex-col gap-4">
                    <Link href="/mens-wear?category=full sleeve t-shirt" className="h-1/2">
                        <Image 
                            src="https://d2m144zuam4eta.cloudfront.net/wp-content/uploads/2024/04/full-sleeve2.webp" 
                            alt="Full Sleeve T-Shirt"
                            width={500} 
                            height={700} 
                            className="h-full rounded-xl" 
                        />
                    </Link>
                    <Link href="/mens-wear?category=cap" className="h-1/2">
                        <Image 
                            src="https://d2m144zuam4eta.cloudfront.net/wp-content/uploads/2023/12/visor.webp" 
                            alt="Cap"
                            width={500} 
                            height={700} 
                            className="h-full rounded-xl" 
                        />
                    </Link>
                </div>
                <Link href="/mens-wear?category=trouser">
                    <Image 
                        src="https://fabrilife.com/products/6501c07ac9bbb-square.jpg?v=20" 
                        alt="Trouser"
                        width={500} 
                        height={700} 
                        className="h-full rounded-xl" 
                    />
                </Link>
            </div>
            <div className="mt-10 flex justify-center">
                <Link href="/categories">
                    <button className="px-6 py-2 bg-[#282828] text-white flex justify-center items-center gap-2 rounded-3xl">
                        View All
                        <svg className="size-4" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TopCategories;