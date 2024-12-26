import useFoodStore from "modules/foodStore/store"
import s from "./PizzaList.module.scss"
import { useEffect, useMemo, useState } from "react"
import { Loader } from "vibe-library"
import { IFoodResponse } from "models/IFoodResponse"
import { useNavigate } from "react-router-dom"


export const FoodList = () => {

    const getFoodList = useFoodStore(store => store.getFoodList)
    const foodList = useFoodStore(store => store.foodList)
    const isLoading = useFoodStore(store => store.isLoading)
    const activeMenuItem = useFoodStore(store => store.activeMenuItem)
    const name = useFoodStore(store => store.activeMenuItemText)
    const currentSearch = useFoodStore(store => store.currentSearch)

    useEffect(() => {
        getFoodList().catch((err) =>
            console.error("Error fetching food data:", err)
        );
    }, [getFoodList, activeMenuItem]);

    const filteredFoodList = useMemo(() => {
        if (!foodList) return null;
        if (!currentSearch) return foodList;

        return foodList.filter((item) =>
            item.name.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }, [foodList, currentSearch]);

    if (isLoading) return (
        <div className={s.loader}>
            <Loader />
        </div>
    )

    return (
        <div className={s.products}>
            {
                filteredFoodList?.map((currentItem) => (
                    <div className={s.product__block}>
                        <div className={s.product__img}>
                            <img src={currentItem?.img} alt="image" />
                        </div>
                        <div className={s.product__desc}>
                            <div className={s.product__properties}>
                                <h1>{name} {currentItem?.name}</h1>
                                <p>
                                    {currentItem?.description}
                                </p>
                            </div>
                            <span>{currentItem?.price}$</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}