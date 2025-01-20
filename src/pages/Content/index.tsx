import { Header } from "components/Header"
import s from "./Content.module.scss"
import pizza  from "../../img/pizza_label.png"
import { Menu } from "./Menu"

export const Content = () => {
    return (
        <div className={s.container}>
            <Header />
            <div className={s.info}>
                <div className={s.info__text_and_button}>
                    <div className={s.info__text}>
                        <h1>Make Your First Order and Get <span>50% Off</span></h1>
                        <p>The pizzaiolo skillfully prepares and serves an impressive variety of pizzas, 
                            offering them generously to eager patrons. Each pizza is carefully crafted, 
                            delivering exceptional flavor and quality with every bite.
                        </p>
                    </div>
                    <button onClick={() => {
                        document.getElementById("menu")?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }} className={s.info__button}><p>Order Now</p></button>
                </div>
                <div className={s.info__pizza}>
                    <img src={pizza} />
                </div>
            </div>
            <Menu />
        </div>
    )
}