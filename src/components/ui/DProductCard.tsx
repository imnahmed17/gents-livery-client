import { Product } from "@/types";
import Image from "next/image";

const DProductCard = ({ product, index }: { product: Product, index: number }) => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center gap-2">
                <Image src={product.images.mainImage} alt={product.title} width={50} height={50} className="size-14" />
                <p className="text-gray-900 whitespace-no-wrap">{product.title}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap capitalize">{product.category}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap capitalize">{product._id}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap capitalize">${product.price.originalPrice}.00</p>
            </td>
        </tr>
    );
};

export default DProductCard;