import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import GadgetSection from "../Gadgets section/GadgetSection";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
            document.title = "Home | Gadget Heaven";
        }, []);

    const gadgetData = useLoaderData();
    // console.log(data);

    return (
        <div>
            <Banner></Banner>
            <GadgetSection gadgetData={gadgetData}></GadgetSection>
        </div>
    );
};

export default Home;