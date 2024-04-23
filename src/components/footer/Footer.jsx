import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import '../footer/Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrap">
                <div className="footer__img">
                    <div className="footer__icons">
                        <Link to="https://www.instagram.com/_ehue_/?next=%2F">
                            <FaInstagramSquare />
                        </Link>
                        <Link to="https://www.linkedin.com/in/maksim-sirotin-9b96052b4/">
                            <FaLinkedin />
                        </Link>
                    </div>
                    <p className="footer__text">
                        <code>&#169; 2024 front-dev.com</code>
                    </p>
                </div>
                <p></p>
            </div>
        </div>
    );
}

export default Footer;
