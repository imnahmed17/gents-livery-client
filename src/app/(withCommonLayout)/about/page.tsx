import Image from "next/image";

const AboutUsPage = () => {
    return (
        <div className="my-10 px-4">
            <h2 className="text-2xl font-medium text-center">About Us</h2>
            <h4 className="font-medium text-center">Behind the scenes at beyond We Are Beyond</h4>
            <div className="mt-10 mx-auto max-w-4xl flex flex-col-reverse lg:flex-row gap-10">
                <div className="lg:w-1/2">
                    <Image 
                        src="https://d2m144zuam4eta.cloudfront.net/wp-content/uploads/2022/10/mhnzrsd169-black-2048x2048.webp" 
                        alt="About Us" 
                        width={800} 
                        height={400} 
                    />
                </div>
                <div className="lg:w-1/2 space-y-6">
                    <p>Gents Livery is the largest Men&apos;s lifestyle brand in Bangladesh. Launched in 2016, the online store offers the widest range of products in categories ranging from T-shirts, Pants, Trousers for men&apos;s.</p>
                    <p>We Believe in quality, each and every cotton is made after lots of processes, We don&apos;t compromise with our product quality.</p>
                    <p>Follow us on Facebook and Twitter to stay updated about our latest offers and promotions.</p>
                    <h4>Company Information:</h4>
                    <p>Registered Name: Gents Livery <br /> Trade License Number: 555555</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;