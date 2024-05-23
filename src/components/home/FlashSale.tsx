import Link from "next/link";
import ProductCard from "../ui/ProductCard";
import { Product } from "@/types";

const FlashSale = async () => {
    const res = await fetch("https://gents-livery-server.vercel.app/flash-sales", {
        next: {
            revalidate: 30,
        },
    });
    const flashSales = await res.json();

    return (
        <div className="mt-16">
            <div className="px-4 flex justify-between items-center">
                <h2 className="text-2xl font-medium">Flash Sale</h2>
                <Link href="/flash-sale">
                    <button className="px-6 py-2 bg-[#282828] text-white flex justify-center items-center gap-2 rounded-3xl">
                        View All
                        <svg className="size-4" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                </Link>
            </div>
            <div className="mt-8 px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {flashSales.data.slice(0, 4).map((flashSale: Product) => (
                    <ProductCard key={flashSale._id} product={flashSale} />
                ))}
            </div>
        </div>
    );
};

export default FlashSale;