import '../header/Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <div className="header__wrap">
                <h1 className='header__title'>Portfolio</h1>
                <ul className="header__link">
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/Projects'}>Проекты</Link>
                    <Link to={'/About'}>Обо мне</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
