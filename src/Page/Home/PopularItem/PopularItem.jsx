import { useEffect, useState } from "react";
import SectionTile from "../../../Componets/sectionTitle/SectionTilte"
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularItem = () => {
  const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItem = data?.filter(item => item.filter(item.category === "popular"))
                setMenus(popularItem)
        })
    }, [])
    console.log(menus,);
    return (
        <section className="bg-red-500">
            <SectionTile
                heading={"FROM OUR MENU"}
                subheading={''}
            ></SectionTile>
            {
                menus.map(item =>
                    <MenuItem key={item._id}
                    item={item}
                    >
                    </MenuItem>
                    )
            }
        </section>
    );
};

export default PopularItem;