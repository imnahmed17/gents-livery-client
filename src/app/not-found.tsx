import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="w-[90%] mx-auto">
            <div className="mt-20 bg-no-repeat bg-center h-[400px]" style={{backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)"}}>
                <h1 className="text-7xl text-center">404</h1>
            </div>
            <h3 className="text-2xl text-center">Look like you&apos;re lost</h3>
            <p className="text-center">The page you are looking for not available!</p>
            <div className="mt-4 flex justify-center">
                <Link href="/">
                    <button className="px-8 py-2 bg-[#39ac31] text-white">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;