import CPieChart from "@/components/ui/CPieChart";

const DHomePage = async () => {
    const res = await fetch("https://gents-livery-server.vercel.app/category-stats", {
        cache: "no-store",
    });
    const categoryStats = await res.json();

    return (
        <>
            <h1 className='mt-10 text-2xl font-medium text-center'>Category Statistics</h1>
            <CPieChart data={categoryStats.data} />
        </>
    );
};

export default DHomePage;