import DProductCard from "@/components/ui/DProductCard";
import { Product } from "@/types";

const DProductsPage = async () => {
    const res = await fetch("https://gents-livery-server.vercel.app/products", {
        cache: "no-store",
    });
    const products = await res.json();

    return (
        <div className="px-4 py-4">
            <h1 className="text-2xl font-medium">All Products</h1>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3 bg-[#9A9A9A] text-white text-left font-normal">
                                    SL No.
                                </th>
                                <th scope="col" className="px-5 py-3 bg-[#9A9A9A] text-white text-left font-normal">
                                    Items
                                </th>
                                <th scope="col" className="px-5 py-3 bg-[#9A9A9A] text-white text-left font-normal">
                                    Category
                                </th>
                                <th scope="col" className="px-5 py-3 bg-[#9A9A9A] text-white text-left font-normal">
                                    Product ID
                                </th>
                                <th scope="col" className="px-5 py-3 bg-[#9A9A9A] text-white text-left font-normal">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.data.map((product: Product, index: number) => (
                                <DProductCard key={product._id} product={product} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DProductsPage;