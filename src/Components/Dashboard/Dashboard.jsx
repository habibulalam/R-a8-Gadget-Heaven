import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";


const Dashboard = () => {

    const { cartProduct, wishlistProduct, addToCart, addToWishlist, removeFromCart, wishlistToAddCart } = useContext(ProductContext);

    const [currentCartProduct, setCurrentCartProduct] = useState(cartProduct);
    console.log(currentCartProduct);

    useEffect(() => {
        setCurrentCartProduct(cartProduct);
    }, [cartProduct]);

    return (
        <div>
            <section className="max-w-[1540px] w-[90%] mx-auto px-[9px] py-2 border rounded-4xl">
                {/* Title and buttons(Cart and wishlist) container */}
                <div className="flex flex-col justify-center items-center rounded-4xl bg-purple-600 text-white">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                        </div>
                    </div>

                    {/* Cart and wishlist button */}
                    <div className="flex justify-center items-center gap-5 mb-6">
                        <button className="btn bg-white text-purple-600 rounded-4xl hover:scale-105 duration-700"><i className="fa-solid fa-cart-shopping"></i> Cart</button>
                        <button className="btn bg-white text-purple-600 rounded-4xl hover:scale-105 duration-700"><i className="fa-regular fa-heart"></i> Wishlist</button>
                    </div>
                </div>


            </section>

            {/* Cart and wishlist container section */}
            <section className="max-w-[1540px] w-[90%] mx-auto px-[9px] py-2">
                {/* Cart Container */}
                <div>
                    {/* Text sort and purchase button container */}
                    <div>
                        <div className="flex items-center justify-between py-6 mb-3">
                            <h3 className="text-2xl font-bold">Cart</h3>
                            <div>
                                <div>
                                    <span className="text-2xl font-semibold mr-4">Total Cost: $850</span>
                                    <button className="px-4 py-2 border border-purple rounded-3xl text-sm font-semibold">
                                        Sort by Price
                                    </button>
                                    <button className="px-4 py-2 border border-purple rounded-3xl text-sm font-semibold text-white ml-2 bg-purple">
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cart item container */}
                    <div className="bg-gray-200 p-3 rounded-2xl">
                        {/* Cart */}
                        {currentCartProduct.length === 0 ? <div className="flex flex-col items-center justify-center h-[300px]">
                            <h1 className="text-2xl font-semibold text-center mb-5">Cart is empty</h1>
                            <div className="text-center">
                                <Link to={"/"} className="btn bg-purple-600 hover:border-purple-600 hover:scale-105 text-white rounded-4xl">Shop Now</Link>
                            </div>
                        </div> :
                            currentCartProduct.map((product, index) => (
                                <div key={index} className="border rounded-xl p-5 bg-white mb-5 relative">
                                    {/* Info container */}
                                    <div className="flex justify-between">
                                        {/* Left side content */}
                                        <div className="flex items-center gap-8">
                                            <div className="flex justify-center items-center border-2 border-x-0 border-purple-600 rounded-full h-10 w-10">
                                                <h1 className="text-2xl">{index + 1}</h1>
                                            </div>
                                            <div className="overflow-hidden">
                                                <img
                                                    src={product.product_image}
                                                    className="w-[300px] h-[160px] rounded-lg"
                                                    alt={product.product_title}
                                                />
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-2xl mb-2">{product.product_title}</h2>
                                                <p className="font-semibold text-base text-text-clr mb-1">
                                                    {product.description}
                                                </p>
                                                <p className="font-medium text-lg">Price: ${product.price}</p>
                                            </div>
                                        </div>

                                        {/* Right side content */}
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => removeFromCart(product)}
                                                className="btn text-red-600 border border-red-600 rounded-full px-2 py-1 bg-red-100 hover:scale-105 duration-700">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;