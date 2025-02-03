import { useEffect, useState } from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from "recharts";

// JSON data
// const products = [
//     { product_id: 1, product_title: "XPS 15 Laptop", price: 1500, rating: 3.8 },
//     { product_id: 2, product_title: "Samsung Galaxy S22", price: 850, rating: 2.9 },
//     { product_id: 3, product_title: "MacBook Pro 14", price: 2100, rating: 4.1 },
//     { product_id: 4, product_title: "Apple Watch Series 8", price: 399, rating: 3.5 },
//     { product_id: 5, product_title: "Sony WH-1000XM5", price: 350, rating: 4.9 },
//     { product_id: 6, product_title: "ASUS ROG Zephyrus", price: 1800, rating: 1.8 },
//     { product_id: 7, product_title: "iPhone 14", price: 999, rating: 2.5 },
//     { product_id: 8, product_title: "Samsung Galaxy Watch 5", price: 350, rating: 3.2 },
//     { product_id: 9, product_title: "Bose QuietComfort 45", price: 329, rating: 4.7 },
//     { product_id: 10, product_title: "Surface Laptop Studio", price: 1600, rating: 2.1 },
//     { product_id: 11, product_title: "Google Pixel 7", price: 799, rating: 3.9 },
//     { product_id: 12, product_title: "Fitbit Versa 4", price: 230, rating: 2.8 },
//     { product_id: 13, product_title: "HP Spectre x360", price: 1400, rating: 4.4 },
//     { product_id: 14, product_title: "AirPods Max", price: 549, rating: 4.6 },
//     { product_id: 15, product_title: "ThinkPad X1 Carbon", price: 1700, rating: 3.0 },
// ];

const Statistics = () => {

    const [products, setProduct ] = useState();

    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);

    useEffect(() => {
        fetch("/fake-data.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            });
    }, []);

    return (
        <div className="mb-16">
            <h2 className="text-center font-semibold">Product Price, Name & Rating Statistics</h2>
            <ResponsiveContainer width="100%" height={700}>
                <ComposedChart
                    data={products}
                    margin={{ top: 40, right: 20, bottom: 150, left: 20 }} // Increased bottom margin
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="product_title" angle={-45} textAnchor="end" interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} /> {/* Moves the legend to the top */}
                    <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" style={{paddingTop: '40px'}}/>
                    <Bar dataKey="price" barSize={20} fill="#413ea0" />
                    <Scatter dataKey="rating" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
