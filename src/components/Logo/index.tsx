import { FC } from "react"
import { Link } from "react-router-dom"
import { ROUTES } from "routes/routes"
import s from "./Logo.module.scss"
import logo from "../../img/LOGO_Kopie.jpg"

interface LogoProps {
    className?: string,
    onClick?: () => void
}

export const Logo: FC<LogoProps> = ({ className, onClick }) => {
    return (
        <Link onClick={onClick} to={ROUTES.home} className={`${className && className} ${s.logo}`}>
            <img className={s.logo__icon} src={logo} alt="Logo" />
        </Link>
    )
}