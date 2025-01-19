import { Logo } from "components/Logo"
import s from "./Header.module.scss"
import basket from "../../img/basket.png"

export const Header = () => {

    const handleBasketClick = () => {
        // Add click handling logic here
        console.log('Basket clicked!');
    };

    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <Logo />
                <h2>Welcome to Pizzaiolo!</h2>
            </div>
            <div className={s.header__basket}>
                <button className={s.header__icon} onClick={handleBasketClick}>
                    <img src={basket} alt="basket" />
                </button>
            </div>
        </header>
    )
}