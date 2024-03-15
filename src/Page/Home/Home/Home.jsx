import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Freatured from "../Featured/Freatured";
import PopularItem from "../PopularItem/PopularItem";


const Home = () => {
    return (
        <div>
            <Banner />
            <Catagory />
            <PopularItem />
            <Freatured/>
        </div>
    );
};

export default Home;