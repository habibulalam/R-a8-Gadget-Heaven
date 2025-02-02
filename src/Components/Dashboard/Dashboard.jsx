import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";
import { use } from "react";


const Dashboard = () => {

    const { cartProduct, wishlistProduct, removeFromCart, wishlistToAddCart, purchase, toggleCartWishlist } = useContext(ProductContext);

    // is cart tab active
    const [isCartActive, setIsCartActive] = useState(true);
    console.log(toggleCartWishlist);

    useEffect(() => {
        setIsCartActive(toggleCartWishlist);
    }, [toggleCartWishlist]);

    // total price
    const [totalCost, setTotalCost] = useState(0);


    const [currentCartProduct, setCurrentCartProduct] = useState(cartProduct);
    console.log(currentCartProduct);

    useEffect(() => {
        setCurrentCartProduct(cartProduct);
        const totalAmount = cartProduct.reduce((acc, item) => acc + item.price, 0);
        // console.log(totalAmount);
        setTotalCost(totalAmount);

    }, [cartProduct]);

    // function for sorting the cart products by descending order of price
    const sortCartByPrice = () => {
        const sortedCart = [...currentCartProduct].sort((a, b) => b.price - a.price);
        setCurrentCartProduct(sortedCart);
    }

    const handlePurchase = () => {

    }

    return (
        <div>
            <section className="max-w-[1540px] w-[90%] mx-auto px-[9px] py-2 border rounded-4xl">
                {/* Title and buttons(Cart and wishlist) container */}
                <div className="flex flex-col justify-center items-center rounded-4xl bg-purple-600 text-white">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-5xl font-bold">Product Dashboard</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                        </div>
                    </div>

                    {/* Cart and Wishlist buttons */}
                    <div className="flex justify-center items-center gap-5 mb-6">
                        <button
                            onClick={() => setIsCartActive(true)}
                            className={`btn rounded-4xl hover:scale-105 duration-700 
      ${isCartActive ? "bg-purple-600 text-white scale-105 border-2 shadow-lg shadow-white" : "bg-white text-purple-600 border border-purple-600"}`}
                        >
                            <i className="fa-solid fa-cart-shopping"></i> Cart
                        </button>

                        <button
                            onClick={() => setIsCartActive(false)}
                            className={`btn rounded-4xl hover:scale-105 duration-700 
      ${!isCartActive ? "bg-purple-600 text-white scale-105 border-2 shadow-lg shadow-white" : "bg-white text-purple-600 border border-purple-600"}`}
                        >
                            <i className="fa-regular fa-heart"></i> Wishlist
                        </button>
                    </div>

                </div>


            </section>

            {/* Cart and wishlist container section */}
            <section className="max-w-[1540px] w-[90%] mx-auto px-[9px] py-2">
                {/* Cart Container */}
                <div className={`${isCartActive ? "block" : "hidden"}`}>
                    {/* Text sort and purchase button container */}
                    <div>
                        <div className="flex items-center justify-between py-6 mb-3">
                            <h3 className="text-4xl font-bold">Cart</h3>
                            <div>
                                <div>
                                    <span className="text-2xl font-semibold mr-4">Total Cost: ${totalCost}</span>
                                    <button
                                        onClick={sortCartByPrice}
                                        className="px-4 py-2 border border-purple-600 rounded-3xl text-sm font-semibold hover:scale-105 duration-500 active:scale-90">
                                        <i className="fa-solid fa-arrow-down-wide-short"></i> Sort by Price
                                    </button>
                                    <button
                                        onClick={() => document.getElementById('my_modal_1').showModal()}
                                        disabled={currentCartProduct.length === 0 & totalCost === 0}
                                        className={`btn px-4 py-2 border border-purple-600 bg-purple-600 rounded-3xl text-sm font-semibold text-white ml-2 hover:scale-105 duration-500 active:scale-90 disabled:cursor-not-allowed`}>
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cart item container */}
                    <div className="bg-gray-200 p-3 rounded-2xl mb-3">
                        {/* Cart */}
                        {currentCartProduct.length === 0 ? <div className="flex flex-col items-center justify-center h-[100px]">
                            <h1 className="text-2xl font-semibold text-center">Cart is empty</h1>
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
                    {/* Navigate to home */}
                    <div className="text-center">
                        <Link to={"/"} className="btn bg-purple-600 hover:border-purple-600 hover:scale-105 text-white rounded-4xl">Shop Now</Link>
                    </div>
                </div>


                {/* Wishlist container */}
                <div className={`${isCartActive ? "hidden" : "block"}`}>
                    {/* Text sort and purchase button container */}
                    <div>
                        <div className="flex items-center justify-between py-6 mb-3">
                            <h3 className="text-4xl font-bold">Wishlist</h3>
                        </div>
                    </div>

                    {/* Wishlist item container */}
                    <div className="bg-gray-200 p-3 rounded-2xl mb-3">
                        {/* Cart */}
                        {wishlistProduct.length === 0 ? <div className="flex flex-col items-center justify-center h-[100px]">
                            <h1 className="text-2xl font-semibold text-center">Wishlist is empty</h1>
                        </div> :
                            wishlistProduct.map((product, index) => (
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
                                                <p className="font-medium text-lg mb-2">Price: ${product.price}</p>
                                                <div>
                                                    <button
                                                        onClick={() => wishlistToAddCart(product)}
                                                        className="btn bg-purple-600 hover:border-purple-600 hover:scale-105 text-white rounded-4xl">
                                                        <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                                                </div>
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
                    {/* Navigate to home */}
                    <div className="text-center">
                        <Link to={"/"} className="btn bg-purple-600 hover:border-purple-600 hover:scale-105 text-white rounded-4xl">Shop Now</Link>
                    </div>
                </div>


                {/* Modal for purchase confirmation */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box text-center">
                        {/* Success logo */}
                        <i className="fa-solid fa-money-check-dollar text-5xl text-green-700 border-2 px-2 py-1 rounded-xl"></i>

                        {/* Title */}
                        <h2 className="font-bold text-2xl my-4">Payment Successfully Done!</h2>

                        {/* Divider */}
                        <hr />

                        {/* Message */}
                        <p className="my-2 text-xl">Thanks for Purchasing 😊</p>

                        {/* Total Price */}
                        <p className="text-xl">
                            Total Price: <span className="text-black font-semibold">{totalCost} $</span>
                        </p>

                        {/* Close Button */}
                        <form method="dialog">
                            <button
                                onClick={purchase}
                                className="btn mt-4 w-full rounded-3xl bg-gray-200 font-semibold text-lg hover:bg-purple-600 hover:text-white">
                                Close
                            </button>
                        </form>
                    </div>
                </dialog>
            </section>
        </div>
    );
};

export default Dashboard;