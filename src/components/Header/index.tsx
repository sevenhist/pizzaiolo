import { Logo } from "components/Logo"
import s from "./Header.module.scss"
import basket from "../../img/basket.png"
import useBasketStore from "../../modules/basketStore/basket-store"

export const Header = () => {

    const { items, isOpen, toggleBasket, confirmOrder } = useBasketStore();

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            toggleBasket();
        }
    };

    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <Logo />
                <h2>Welcome to Pizzaiolo!</h2>
            </div>
            <div className={s.header__basket}>
                <button className={s.header__icon} onClick={toggleBasket}>
                    <img src={basket} alt="basket" />
                    {items.length > 0 && (
                        <span className={s.header__badge}>{items.length}</span>
                    )}
                </button>
                {isOpen && (
                    <>
                        <div className={s.header__overlay} onClick={handleOverlayClick} />
                        <div className={s.header__popup}>
                            <h3>Your Order</h3>
                            {items.length === 0 ? (
                                <p>Your basket is empty</p>
                            ) : (
                                <>
                                    <ul>
                                        {items.map((item) => (
                                            <li key={item.id}>{item.name}</li>
                                        ))}
                                    </ul>
                                    <button 
                                        className={s.header__confirm}
                                        onClick={confirmOrder}
                                    >
                                        Confirm Order
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}


