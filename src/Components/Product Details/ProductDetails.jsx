
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ReactStars from "react-stars";
import { ProductContext } from "../../App";


const ProductDetails = () => {

    const { addToCart, addToWishlist} = useContext(ProductContext);

    const [singleProduct, setSingleProduct] = useState({});
    const [rating, setRating] = useState(0);

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        fetch(`/fake-data.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                const filterMatchedProduct = data.find((singleItem) => singleItem.product_id == id);
                // console.log(singleProduct.rating);
                setSingleProduct(filterMatchedProduct);
                setRating(filterMatchedProduct.rating);
            });

    }, []);

    // Rating stars
    const ratingStarCodes = {
        value: rating,
        size: 24,
        count: 5,
        isHalf: true,
        edit: false,
        activeColor: "#ffd700",
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
    };

    return (
        <div>
            <section className="relative max-w-[1540px] w-[90%] mx-auto px-[9px] py-2 border mb-[580px] md:mb-[390px]">
                <div className="flex flex-col justify-center items-center bg-purple-600 text-white">
                    {/* Text continer */}
                    <div className="hero-content text-center mb-40 mt-2">
                        <div className="">
                            <h3 className="font-bold text-white text-3xl">Product Details</h3>
                            <p className="pb-6 pt-2">
                                Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                        </div>
                    </div>



                    {/* Product info container */}
                    <div className="absolute flex flex-col md:flex-row gap-8 -bottom-[560px] md:-bottom-[360px] max-w-[1000px] w-[90%] border border-gray-300 p-6 rounded-4xl bg-white">
                        {/* <!-- Product Image --> */}
                        <div className="border border-gray-400 rounded-xl overflow-hidden w-full  md:w-[400px] p-4 bg-gray-200">
                            <img src={`${singleProduct.product_image}`} className="w-full h-full md:h-[350px] object-cover rounded-xl" alt={singleProduct.product_title} />
                        </div>

                        {/* <!-- Product Details --> */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-black">{singleProduct.product_title}</h2>
                            <p className="font-semibold text-xl text-slate-600 mb-5">Price: ${singleProduct.price}</p>
                            <span className={`font-semibold text-sm px-4 py-1 border rounded-3xl ${singleProduct.availability === true ? 'border-green-500 text-green-500 bg-green-100' : 'border-red-500 text-red-500 bg-red-100'} bg-green-100`}>
                                {singleProduct.availability === true ? 'In Stock' : 'Out of Stock'}
                            </span>

                            <p className="font-semibold text-base text-gray-600 mt-4">
                                {singleProduct.description}
                            </p>

                            {/* <!-- Specifications --> */}
                            <p className="font-bold text-black mt-1">Specifications</p>
                            <ol className="mt-2">
                                {
                                    singleProduct.Specification && singleProduct.Specification.map((spec, index) => (<li key={index} className="text-slate-500 font-semibold text-sm mb-1 ml-1">{spec}</li>))
                                }
                            </ol>

                            {/* <!-- Rating Section --> */}
                            <div className="font-bold text-base text-black mt-3">
                                Rating
                                <div className="flex gap-7 items-center mt-1">
                                    {/* <!-- Star Ratings --> */}
                                    <div className="flex">
                                        {/* <span className="text-yellow-400 text-3xl">★</span>
                                        <span className="text-yellow-400 text-3xl">★</span>
                                        <span className="text-yellow-400 text-3xl">★</span>
                                        <span className="text-yellow-400 text-3xl">★</span>
                                        <span className="text-gray-400 text-3xl">★</span> */}
                                        {
                                            <ReactStars {...ratingStarCodes}
                                            />
                                        }
                                    </div>
                                    <span className="px-3 py-1 rounded-3xl bg-green-100 text-black font-bold">{singleProduct.rating}</span>
                                </div>
                            </div>

                            {/* <!-- Buttons --> */}
                            <div className="flex items-center mt-4">
                                {/* <!-- Add to Cart Button --> */}
                                <button onClick={()=> addToCart(singleProduct)} className="btn font-bold text-base px-4 py-2 rounded-3xl hover:border-purple-600 text-white hover:text-purple-600 bg-purple-600 hover:bg-white inline-flex items-center">
                                    Add to Cart
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </button>

                                {/* <!-- Wishlist Button --> */}
                                <button onClick={()=> addToWishlist(singleProduct)} title="Add to wishlist" className="btn font-bold text-base px-4 py-2 rounded-full bg-gray-200 hover:bg-purple-600 h-12 w-12 ml-2 hover:text-white">
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Button for shop more */}
            <div className="text-center my-10">
                <Link to={"/"} className="btn bg-gray-200 hover:border-purple-600 hover:scale-105 text-black rounded-4xl">Shop More</Link>
            </div>
        </div>
    );
};

export default ProductDetails;