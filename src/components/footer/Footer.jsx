import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrap}>
                <div className={styles.footerImg}>
                    <div className={styles.footerIcons}>
                        <Link to="https://www.instagram.com/_ehue_/?next=%2F">
                            <FaInstagramSquare />
                        </Link>
                        <Link to="https://www.linkedin.com/in/maksim-sirotin-9b96052b4/">
                            <FaLinkedin />
                        </Link>
                    </div>
                    <p className={styles.footerText}>
                        <code>&#169; 2024 front-dev.com</code>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
