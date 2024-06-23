import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrap}>
                <h1 className={styles.headerTitle}>Portfolio</h1>
                <nav>
                    <ul className={styles.headerLink}>
                        <Link to={'/'}>Главная</Link>
                        <Link to={'/Projects'}>Проекты</Link>
                        <Link to={'/About'}>Обо мне</Link>
                    </ul>
                </nav>
            </div>
            <hr />
        </header>
    );
}

export default Header;
