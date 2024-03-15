import SectionTilte from "../../../Componets/sectionTitle/SectionTilte";
import featuredImg from "../../../assets/images/home/featured.jpg"
import './Featured.css'
const Freatured = () => {
    return (
        <div className="feature-item ">
            <SectionTilte
                heading={"FROM OUR MENU"}
                 subheading={'---Check it out---'}
            />
            <div className="md:flex justify-center items-center px-32 py-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, quae quisquam quam inventore molestiae porro, praesentium explicabo amet neque optio doloribus. Labore ratione perspiciatis consequatur repellendus harum esse facere fugiat voluptatem quisquam magni doloremque optio, at officia praesentium architecto nihil explicabo, obcaecati modi tenetur et accusantium numquam, mollitia odit! Odio.</p>
                    <button className="btn btn-outline">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Freatured;