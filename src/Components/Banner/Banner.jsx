

const Banner = () => {
    return (
        <div>
            <section className="relative max-w-[1540px] w-[90%] mx-auto px-[9px] pb-2 border  border-t-0 rounded-b-4xl mb-[490px]">
                <div className="flex flex-col justify-center items-center rounded-b-4xl bg-purple-600 text-white">
                    <div className="hero-content text-center mb-40">
                        <div className="">
                            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                            <p className="py-6">
                            Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <a href="#product-section" className="btn bg-white text-purple-600 rounded-4xl">Shop Now</a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="absolute -bottom-[360px] h-[500px] max-w-[1000px] w-[90%] border border-white p-6 rounded-4xl bg-[#FFFFFF4D]">
                        <img src="/banner.jpg" className="rounded-3xl h-full w-full" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;