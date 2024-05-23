"use client";

import { CountdownTimeLeft, Product } from "@/types";
import ProductCard from "../ui/ProductCard";
import { useEffect, useState } from "react";

const INITIAL_TIME_LEFT = { days: 0, hrs: 0, mins: 0, secs: 0 };

const FlashSalePage = ({ products }: { products: Product[] }) => {
    const [loadMore, setLoadMore] = useState(false);
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT);
    const deadLine = new Date("2024-05-26T15:28:36");

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const calculateTimeLeft = (): CountdownTimeLeft => {
        let timeLeft: CountdownTimeLeft = {};
        let currentDate = new Date();
        let difference = deadLine.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    return (
        <div className="mb-10">
            <div className="px-4 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                <div>
                    <h2 className="text-2xl font-medium">Flash Sale</h2>
                    <h4 className="text-sm font-medium">Showing 1-{loadMore ? products.length : 8} of {products.length} item(s)</h4>
                </div>
                <div className="flex items-center gap-8">
                    <h3 className="text-lg font-medium">Ending in</h3>
                    <div className="flex items-center gap-2 text-white">
                        <div className="bg-[#ff6801] size-10 flex justify-center items-center rounded">
                            <p>{timeLeft.days?.toString().padStart(2, '0')}</p>
                        </div>
                        <div>
                            <p className="text-[#ff6801]">:</p>
                        </div>
                        <div className="bg-[#ff6801] size-10 flex justify-center items-center rounded">
                            <p>{timeLeft.hrs?.toString().padStart(2, '0')}</p>
                        </div>
                        <div>
                            <p className="text-[#ff6801]">:</p>
                        </div>
                        <div className="bg-[#ff6801] size-10 flex justify-center items-center rounded">
                            <p>{timeLeft.mins?.toString().padStart(2, '0')}</p>
                        </div>
                        <div>
                            <p className="text-[#ff6801]">:</p>
                        </div>
                        <div className="bg-[#ff6801] size-10 flex justify-center items-center rounded">
                            <p>{timeLeft.secs?.toString().padStart(2, '0')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {products.slice(0, loadMore ? products.length : 8).map((flashSale: Product) => (
                    <ProductCard key={flashSale._id} product={flashSale} />
                ))}
            </div>
            <h4 className="mt-20 text-sm font-medium text-center">Showing 1-{loadMore ? products.length : 8} of {products.length} item(s)</h4>
            {!loadMore && (
                <div className="mt-3 flex justify-center">
                    <button onClick={() => setLoadMore(!loadMore)} className="px-6 py-2 bg-[#282828] text-white flex justify-center items-center gap-2 rounded-3xl">
                        Load More
                        <svg className="size-4" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default FlashSalePage;