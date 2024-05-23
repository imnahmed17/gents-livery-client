import Container from "@/components/ui/Container";
import { Product, ProductId } from "@/types";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: ProductId): Promise<Metadata> => {
    const res = await fetch(`https://gents-livery-server.vercel.app/products/${params.productId}`);
    const product = await res.json();

    return {
        title: `Gent Livery | Product - ${product.title}`,
        description: product.category,
    };
};

export const generateStaticParams = async () => {
    const res = await fetch("https://gents-livery-server.vercel.app/products");
    const products = await res.json();

    return products.data.slice(0, 10).map((product: Product) => ({
        productId: product._id,
    }));
};

const ProductDetailPage = async ({ params }: ProductId) => {
    const res = await fetch(`https://gents-livery-server.vercel.app/products/${params.productId}`, {
        cache: "no-store",
    });
    const product = await res.json();

    return (
        <div className="my-10">
            <Container>
                <div className="mb-4 px-4 font-light flex items-center gap-2">
                    <p className="text-[#7B7B7B]">Product Listing</p>
                    <svg className="size-4" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                    <p className="text-[#414141] capitalize">{product.category}</p>
                </div>
                <div className="px-4 flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2 flex gap-4 lg:gap-1.5">
                        <div className="w-1/4 space-y-4">
                            {product.images.thumbnails.map((thumbnail: string) => (
                                <Image
                                    key={thumbnail}
                                    src={thumbnail}
                                    alt={product.title}
                                    width={140}
                                    height={100}
                                    className="rounded h-24 lg:h-36"
                                />
                            ))}
                        </div>
                        <figure className="w-3/4 h-full">
                            <Image
                                src={product.images.mainImage}
                                alt={product.title}
                                width={460}
                                height={400}
                                className="rounded h-80 lg:h-[464px]"
                            />
                        </figure>
                    </div>
                    <div className="p-4 w-full lg:w-1/2">
                        <h3 className="text-lg font-medium">{product.title}</h3>
                        <div className="mt-2 text-xl flex items-center gap-2">
                            <p>${product.price.discountedPrice ? product.price.discountedPrice : product.price.originalPrice}.00</p>
                            <p>|</p>
                            <div className="flex items-center gap-2">
                                <Rating style={{ maxWidth: 100 }} value={product.ratings.value} readOnly />
                                <p className="text-xs text-slate-600">( {product.ratings.noOfReviews} reviews )</p>
                            </div>
                        </div>
                        <div className="my-6 border"></div>
                        <p className="font-light">{product.description.shortDescription}</p>
                    </div>
                </div>
            </Container>
            <div className="mt-14 bg-[#F8F8F8]">
                <Container>
                    <div className="px-4 py-14">
                        <h3 className="text-lg font-medium text-[#696969]">Description</h3>
                        <ul className="font-light list-disc list-inside">
                            {product.description.longDescription.map((description: string) => (
                                <li key={description} className="my-2 ml-2">{description}</li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ProductDetailPage;