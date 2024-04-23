import '../page/About.css';
import myImg from '../img/me.jpg';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
function About() {
    const [flip, setFlip] = useState(false);

    const { transform } = useSpring({
        from: { transform: 'rotateY(0deg)' },
        to: { transform: flip ? 'rotateY(360deg)' : 'rotateY(0deg)' },
        config: { duration: 1000 },
    });
    return (
        <div className="about-page">
            <div className="about-img">
                <animated.img style={{ transform }} src={myImg} onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)} />
            </div>
            <div className="about-info">
                <h1 className="about-info--name">About me</h1>
                <p className="about-info--text">
                    Привет! Я <span className="bold">фронтенд разработчик</span> с большим энтузиазмом и стремлением к обучению. У меня есть опыт работы с{' '}
                    <span className="bold">HTML</span>, <span className="bold">Css</span>, <span className="bold">Scss</span>, практиковался на{' '}
                    <span className="bold">Tailwind</span>. Я успешно прошел курсы от школы <span className="bold">IT-Academy</span> по направлению "Веб-разработка приложений на
                    JavaScript", что подтверждается полученным <span className="bold">сертификатом</span>. Это дало мне твердую основу для дальнейшего изучения и развития в этой
                    области. В настоящее время я активно изучаю <span сlassName="bold">React</span> на курсе от школы <span className="bold">Udemy</span> у{' '}
                    <span className="bold">Bogdan Stashchuk</span>. Я также изучаю <span className="bold">Redux</span> и <span className="bold">React Router</span> для расширения
                    своих навыков в разработке веб-приложений. Я всегда открыт для новых возможностей и готов принять вызов, чтобы <span className="bold">стать лучшим</span> в этой
                    области!
                </p>
            </div>
            <div className="about-contacts">
                <h1 className="about-contacts--name">Contacts</h1>
                <div className="about-contacts--wrap">
                    <div className="about-contacts--info">
                        <h2 className="about-contacts--title">Location</h2>
                        <div className="about-contacts--subtitle">Belarus , Mogilev </div>
                    </div>
                    <div className="about-contacts--info">
                        <h2 className="about-contacts--title">Telegram</h2>
                        <div className="about-contacts--subtitle">+375 (33) 353-17-14</div>
                    </div>
                    <div className="about-contacts--info">
                        <h2 className="about-contacts--title">Email</h2>
                        <div className="about-contacts--subtitle">maksfrontdev@mail.ru</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
