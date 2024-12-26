import s from "./Menu.module.scss"
import pizzaIcon from "../../../img/pizza__icon.svg"
import dessert from "../../../img/dessert__icon.svg"
import search from "../../../img/Search.svg"
import { useState } from "react";
import { IMenuItem, ItemActive } from "models/IMenuItem";
import { MenuItem } from "./MenuItem";
import { FoodList } from "pages/FoodList";
import useFoodStore from "modules/foodStore/store";

export const Menu = () => {
    const setSearch = useFoodStore(store => store.setCurrentSearch);
    const currentSearch = useFoodStore(store => store.currentSearch)

    const menuBlocks: Array<IMenuItem> = [
        {
            srcImg: pizzaIcon,
            name: "Pizza",
            itemActive: "pizza"
        },
        {
            srcImg: dessert,
            name: "Dessert",
            itemActive: "dessert"
        }
    ]

    return (
        <div className={s.menu__container} id="menu">
            <div className={s.menu}>
                <div className={s.menu__navigation}>
                    <div className={s.menu__titel}>
                        <h1>Our Menu</h1>
                    </div>      
                    {
                        menuBlocks.map((param) => (
                            <MenuItem key={param.name} item={param}/>
                        ))
                    }
                </div>
                <div className={s.menu__search}>
                    <button className={s.menu__search__img}>
                        <img src={search} alt="icon" />
                    </button>
                    <input type="text" value={currentSearch} onChange={e => setSearch(e.target.value)} placeholder="Search" />
                </div>
            </div>
            <FoodList />
        </div>
    )
}