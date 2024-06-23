import '../page/About.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-info">
                <h1 className="about-info--name">About me</h1>
                <p className="about-info--text">
                    Привет! Я <span className="about-info--bold">фронтенд разработчик</span> с большим энтузиазмом и стремлением к обучению. У меня есть опыт работы с
                    <span className="about-info--bold">HTML</span>, <span className="about-info--bold">Css</span>, <span className="about-info--bold">Scss</span>, практиковался на
                    <span className="about-info--bold">Tailwind</span>. Я успешно прошел курсы от школы <span className="about-info--bold">IT-Academy</span> по направлению
                    "Веб-разработка приложений на JavaScript", что подтверждается полученным <span className="about-info--bold">сертификатом</span>. Это дало мне твердую основу для
                    дальнейшего изучения и развития в этой области. В настоящее время я активно изучаю <span сlassName="about-info--bold">React</span> на курсе от школы
                    <span className="about-info--bold">Udemy</span> у <span className="about-info--bold">Bogdan Stashchuk</span>. Я также изучаю
                    <span className="about-info--bold">Redux</span> и <span className="about-info--bold">React Router</span> для расширения своих навыков в разработке
                    веб-приложений. Я всегда открыт для новых возможностей и готов принять вызов, чтобы <span className="about-info--bold">стать лучшим</span> в этой области!
                </p>
            </div>

            <div className="about-contacts">
                <h1 className="about-contacts--name">Contacts</h1>
                <div className="about-contacts--wrap">
                    <div className="about-contacts--info">
                        <h2 className="about-contacts--title">Location</h2>
                        <p className="about-contacts--subtitle">Belarus , Mogilev </p>
                    </div>

                    <div className="about-contacts--info">
                        <h2 className="about-contacts--title">Telegram</h2>
                        <a href="tel:+375 (33) 353-17-14" className="about-contacts--subtitle">
                            +375 (33) 353-17-14
                        </a>
                    </div>

                    <div className="about-contacts--info">
                        <h2 className="about-contacts--title">Email</h2>
                        <a href="mailto:maksfrontdev@mail.ru" className="about-contacts--subtitle">
                            maksfrontdev@mail.ru
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
