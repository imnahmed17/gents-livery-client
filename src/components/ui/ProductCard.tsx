import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="border-b">
            <figure className="relative">
                <Image src={product.images.mainImage} alt={product.title} width="0" height="0" sizes="100vw" className="w-full h-80 rounded-xl" />
                {product.price.discountedRatio && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full text-white bg-[#3D3D3D]">-{product.price.discountedRatio}</span>
                )}
            </figure>
            <div className="m-2.5">
                <h4 className="text-lg">{product.title}</h4>
                <div className="flex justify-between items-center">
                    <div className="text-sm flex gap-2">
                        <p className={`${product.price.discountedPrice ? "line-through text-[#404040]" : "font-medium"}`}>${product.price.originalPrice}.00</p>
                        {product.price.discountedPrice && <p className="font-medium">${product.price.discountedPrice}.00</p>}
                    </div>
                    <Link href={`/mens-wear/${product._id}`}>
                        <svg className="size-6" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;