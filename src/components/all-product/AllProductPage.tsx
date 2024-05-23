"use client";

import { Product } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";
import ProductCard from "../ui/ProductCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const AllProductPage = ({ products }: { products: Product[] }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loadMore, setLoadMore] = useState(false);
    const priceRange = searchParams.get("priceRange");
    const category = searchParams.get("category");
    const rating = searchParams.get("rating");

    const onRadioSelect = (e: ChangeEvent<HTMLInputElement>, key: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set(`${key}`, e.target.value);
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    };

    const onOptionSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set("category", e.target.value);
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    };

    return (
        <div>
            <div className="flex">
                <div className="lg:w-1/4 space-y-6 px-4">
                    <div className="px-4 py-6 space-y-2 border rounded-lg">
                        <h3 className="mb-2 text-lg"><span className="font-semibold">|</span> Price Range</h3>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="priceRange" id="one" value="50-249" checked={priceRange === "50-249"} onChange={(e) => onRadioSelect(e, "priceRange")} />
                            <label htmlFor="one" className="text-sm">$50.00 - $249.00</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="priceRange" id="two" value="250-449" checked={priceRange === "250-449"} onChange={(e) => onRadioSelect(e, "priceRange")} />
                            <label htmlFor="two" className="text-sm">$250.00 - $449.00</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="priceRange" id="three" value="450-649" checked={priceRange === "450-649"} onChange={(e) => onRadioSelect(e, "priceRange")} />
                            <label htmlFor="three" className="text-sm">$450.00 - $649.00</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="priceRange" id="four" value="650-849" checked={priceRange === "650-849"} onChange={(e) => onRadioSelect(e, "priceRange")} />
                            <label htmlFor="four" className="text-sm">$650.00 - $849.00</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="priceRange" id="five" value="850-1049" checked={priceRange === "850-1049"} onChange={(e) => onRadioSelect(e, "priceRange")} />
                            <label htmlFor="five" className="text-sm">$850.00 - $1049.00</label>
                        </div>
                    </div>
                    <div className="h-[280px] px-4 py-6 space-y-2 border rounded-lg">
                        <h3 className="mb-2 text-lg"><span className="font-semibold">|</span> Category</h3>
                        <select onChange={onOptionSelect} className="pl-2 py-2 capitalize border rounded-md outline-none">
                            <option hidden>Pick One</option>
                            <option value="half sleeve t-shirt">half sleeve t-shirt</option>
                            <option value="full sleeve t-shirt">full sleeve t-shirt</option>
                            <option value="jersey">jersey</option>
                            <option value="trouser">trouser</option>
                            <option value="pant">pant</option>
                            <option value="cap">cap</option>
                        </select>
                    </div>
                    <div className="px-4 py-6 space-y-2 border rounded-lg">
                        <h3 className="mb-2 text-lg"><span className="font-semibold">|</span> Ratings</h3>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="rating" id="one-star" value="1" checked={rating === "1"} onChange={(e) => onRadioSelect(e, "rating")} />
                            <label htmlFor="one-star" className="text-sm">1 Star</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="rating" id="two-star" value="2" checked={rating === "2"} onChange={(e) => onRadioSelect(e, "rating")} />
                            <label htmlFor="two-star" className="text-sm">2 Star</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="rating" id="three-star" value="3" checked={rating === "3"} onChange={(e) => onRadioSelect(e, "rating")} />
                            <label htmlFor="three-star" className="text-sm">3 Star</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="rating" id="four-star" value="4" checked={rating === "4"} onChange={(e) => onRadioSelect(e, "rating")} />
                            <label htmlFor="four-star" className="text-sm">4 Star</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" name="rating" id="five-star" value="5" checked={rating === "5"} onChange={(e) => onRadioSelect(e, "rating")} />
                            <label htmlFor="five-star" className="text-sm">5 Star</label>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="lg:w-3/4 px-4">
                    <h2 className="text-2xl font-medium">Our Collection Of Products</h2>
                    <h4 className="text-sm font-medium">Showing 1-{loadMore ? products.length : products.length < 12 ? products.length : 12} of {products.length} item(s)</h4>
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {products.slice(0, loadMore ? products.length : 12).map((product: Product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                    <h4 className="mt-20 text-sm font-medium text-center">Showing 1-{loadMore ? products.length : products.length < 12 ? products.length : 12} of {products.length} item(s)</h4>
                    {!loadMore && products.length > 12 && (
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
            </div>
        </div>
    );
};

export default AllProductPage;