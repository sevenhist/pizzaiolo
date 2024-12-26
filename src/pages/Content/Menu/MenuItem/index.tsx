import { IMenuItem, ItemActive } from "models/IMenuItem";
import s from "./MenuItem.module.scss"
import { FC } from "react";
import useFoodStore from "modules/foodStore/store";
import { useNavigate } from "react-router-dom";


export const MenuItem: FC<{ item: IMenuItem }> = ({item}) => {
    
    const setActiveMenu = useFoodStore(store => store.setActiveMenuItem)
    const currentActiveMenu = useFoodStore(store => store.activeMenuItem)

    const navigate = useNavigate()

    const onClickFunc = () => {
        navigate(`/?product=${item.itemActive}`, { replace: true });
        setActiveMenu(item.itemActive)
    }

    return (
        <button onClick={() => onClickFunc()} 
            className={`${s.menu__block} ${currentActiveMenu === item.itemActive ? s.menu__block__active : ''}`}
        >
            <div className={s.menu__block__icon}>
                <img src={item.srcImg} alt="icon" />
            </div>
            <div className={s.menu__block__text}>
                <p>{item.name}</p>
            </div>
        </button>
    )
}