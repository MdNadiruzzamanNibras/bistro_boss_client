import { useEffect, useState } from "react";
import SectionTile from "../../../Componets/sectionTitle/SectionTilte"
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularItem = () => {
  const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
               
                     const popularItem = data.filter(item => item.category === "popular"); // Corrected filtering condition

                console.log(popularItem,"ppp");
                setMenus(popularItem)
        })
    }, [])
    console.log(menus,);
    return (
        <section className="mb-12">
            <SectionTile
                heading={"FROM OUR MENU"}
                subheading={'---Check it out---'}
            ></SectionTile>
            <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-10">
                {
                menus.map(item =>
                    <MenuItem key={item._id}
                    item={item}
                    >
                    </MenuItem>
                    )
            }
            </div>
        </section>
    );
};

export default PopularItem;