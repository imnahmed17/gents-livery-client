import FlashSalePage from "@/components/flash-sale/FlashSalePage";
import Container from "@/components/ui/Container";

export const metadata = {
    title: "Gent Livery | Flash Sale",
    description: "Displaying all discounted products",
};

const FSalePage = async () => {
    const res = await fetch("https://gents-livery-server.vercel.app/flash-sales", {
        cache: "no-store",
    });
    const flashSales = await res.json();

    return (
        <div className="mt-10">
            <Container>
                <FlashSalePage products={flashSales.data} />
            </Container>
        </div>
    );
};

export default FSalePage;