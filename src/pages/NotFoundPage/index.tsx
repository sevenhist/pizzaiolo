import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.scss';
import { ROUTES } from 'routes/routes';

export const NotFoundPage = () => {
    return (
        <div className={s.notFound}>
            <p>Sorry, no such page was found :(</p>
            <Link to={ROUTES.home}>Go home</Link>
        </div>
)}