import { Logo } from "components/Logo"
import s from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <Logo />
                <h2>Welcome to Pizzaiolo!</h2>
            </div>
        </header>
    )
}