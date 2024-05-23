import Banner from "@/components/home/Banner";
import FlashSale from "@/components/home/FlashSale";
import TopCategories from "@/components/home/TopCategories";
import TrendingProducts from "@/components/home/TrendingProducts";
import Container from "@/components/ui/Container";

export const metadata = {
    title: "Gent Livery | Home",
    description: "Ecommerce website for Men's clothing",
};

const HomePage = () => {
    return (
        <>
            <Banner />
            <Container>
                <FlashSale />
                <TopCategories />
                <TrendingProducts />
            </Container>
        </>
    );
};

export default HomePage;