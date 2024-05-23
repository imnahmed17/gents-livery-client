import AllProductPage from "@/components/all-product/AllProductPage";
import Container from "@/components/ui/Container";
import { QueryParams } from "@/types";

export const metadata = {
    title: "Gent Livery | Products",
    description: "Displaying all available products from our store",
};

const queryParamsToString = (params: QueryParams) => {
    return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
}

const AllPPage = async ({ searchParams }: { searchParams: QueryParams }) => {
    const res = await fetch(`https://gents-livery-server.vercel.app/products?${queryParamsToString(searchParams)}`, {
        cache: "no-store",
    });
    const products = await res.json();

    return (
        <div className="my-10">
            <Container>
                <AllProductPage products={products.data} />
            </Container>
        </div>
    );
};

export default AllPPage;