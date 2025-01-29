import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import GadgetSection from "../Gadgets section/GadgetSection";

const Home = () => {

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