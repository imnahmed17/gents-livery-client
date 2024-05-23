import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Gent Livery | Category",
    description: "Displaying all available categories from our store",
};

const categories = [
    {
        name: "half sleeve t-shirt",
        image: "https://d2m144zuam4eta.cloudfront.net/wp-content/uploads/2024/02/dawah-banner-tees.webp",
    },
    {
        name: "jersey",
        image: "https://d2m144zuam4eta.cloudfront.net/wp-content/uploads/2024/02/aop-banner.webp",
    },
    {
        name: "full sleeve t-shirt",
        image: "https://d2m144zuam4eta.cloudfront.net/wp-content/uploads/2024/04/full-sleeve2.webp",
    },
    {
        name: "pant",
        image: "https://api.ebangladesh.com/upload/shop/items/498603d0-c77f-11ec-b48b-f791b1c207f5/498603d0-c77f-11ec-b48b-f791b1c207f5.png",
    },
    {
        name: "trouser",
        image: "https://fitbangladesh.com/public/uploads/all/S8KU5vv2JXQlJxjzaTEZwb3tid5nqmNrKZueh9zp.jpg",
    },
    {
        name: "cap",
        image: "https://d2m144zuam4eta.cloudfront.net/wp-content/uploads/2023/12/visor.webp",
    }
];

const CategoryPage = () => {
    return (
        <div className="my-10 px-4">
            <Container>
                <h1 className="text-2xl font-medium text-center uppercase">Shop by category</h1>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {categories.map((category, index) => (
                        <Link href={`/mens-wear?category=${category.name}`} key={index} className="rounded-md overflow-hidden">
                            <Image 
                                src={category.image} 
                                alt={category.name} 
                                width={416}
                                height={300}
                                className="h-full bg-slate-300"
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default CategoryPage;