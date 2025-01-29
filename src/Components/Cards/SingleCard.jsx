import PropTypes from "prop-types";

const SingleCard = ({ singleItem }) => {
    console.log(singleItem);

    return (
        <div>
            <div className="border rounded-xl p-5 bg-white">
                {/* Product Image */}
                <img
                    src={`${singleItem.product_image}`}
                    className="w-full h-[250px] object-cover rounded-2xl"
                    alt={singleItem.product_title}
                />

                {/* Product Title */}
                <h2 className="font-semibold text-2xl mt-4 mb-1">
                    {singleItem.product_title}
                </h2>

                {/* Price and Stock Status */}
                <div className="flex justify-between items-center">
                    <p className="text-text-clr font-bold text-base">
                        {singleItem.price}
                    </p>
                    <span className={`font-semibold text-sm px-4 py-1 border rounded-3xl ${singleItem.availability === true ? 'border-green-500 text-green-500 bg-green-100' : 'border-red-500 text-red-500 bg-red-100'} bg-green-100`}>
                        {singleItem.availability === true ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>

                {/* View Details Button */}
                <button className="border-2 border-purple-600 px-5 py-2 mb-5 text-purple-600 hover:bg-purple-600 hover:text-white btn rounded-3xl shadow-purple-500 hover:shadow-2xl duration-500 font-semibold text-lg mt-4">
                    View Details
                </button>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    singleItem: PropTypes.object.isRequired,
}

export default SingleCard;