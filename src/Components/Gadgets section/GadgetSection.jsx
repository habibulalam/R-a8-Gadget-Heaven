import PropTypes from "prop-types";
import { useState } from "react";
import SingleCard from "../Cards/SingleCard";

const GadgetSection = ({ gadgetData }) => {
    // all data
    console.log(gadgetData);

    // Currently selected data
    const [selectedData, setSelectedData] = useState(gadgetData);

    // state to handle active tab
    const [activeTab, setActiveTab] = useState('allProducts');



    // Function to handle tab click
    const handleTabClick = (tabName) => {
        // console.log(tabName);
        setActiveTab(tabName);

        // Filter data based on tab
        if (tabName === 'allProducts') {
            setSelectedData(gadgetData);
        } else {
            const filteredData = gadgetData.filter((singleItem) => singleItem.category === tabName);
            setSelectedData(filteredData);
        }
    }

    return (
        <div>
            <section id="product-section" className="max-w-[1540px] w-[90%] mx-auto">
                {/* Text container */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold">Explore Cutting-Edge Gadgets</h1>
                </div>
                {/* Full dynamic container */}
                <div className="flex flex-col gap-4 md:flex-row">
                    {/* Tabs list container */}
                    <div className="bg-gray-100 p-2 h-fit rounded-2xl">
                        <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                            <li>
                                <button onClick={() => handleTabClick('allProducts')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'allProducts' ? 'text-white bg-purple-700' : 'bg-white hover:bg-gray-200 hover:text-gray-900'} `}>
                                    <p><i className="fa-solid fa-box"></i> All Products</p>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTabClick('Laptops')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'Laptops' ? 'text-white bg-purple-700' : 'bg-white hover:bg-gray-200 hover:text-gray-900'} `}>
                                    <p><i className="fa-solid fa-laptop"></i> Laptops</p>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTabClick('Headphones')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'Headphones' ? 'text-white bg-purple-700' : 'bg-white hover:bg-gray-200 hover:text-gray-900'} `}>
                                    <p><i className="fa-solid fa-headphones"></i> Headphones</p>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTabClick('Phones')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'Phones' ? 'text-white bg-purple-700' : 'bg-white hover:bg-gray-200 hover:text-gray-900'} `}>
                                    <p><i className="fa-solid fa-mobile-screen-button"></i> Mobiles</p>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleTabClick('Watches')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'Watches' ? 'text-white bg-purple-700' : 'bg-white hover:bg-gray-200 hover:text-gray-900'} `}>
                                    <p><i className="fa-solid fa-clock"></i> Watches</p>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Data display container */}
                    <div className="p-6 bg-gray-100 text-gray-500 rounded-lg w-full h-fit">
                        {/* Card container */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* Card */}
                            {
                                selectedData.map((singleItem, index) => <SingleCard key={index} singleItem={singleItem}></SingleCard>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

GadgetSection.propTypes = {
    gadgetData: PropTypes.array,
}

export default GadgetSection;
