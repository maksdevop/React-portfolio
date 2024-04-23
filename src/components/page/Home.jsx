import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <div className="home-page__header">
                <h1 className="home-page__title">
                    Hi , my name is <span className="home-page__name">Maksim </span>
                    <br /> <span className="home-page__work">I'm a Front-End Developer</span>
                </h1>
                <p className="home-page__description">with passion for learning and creating</p>
            </div>
            <section className="home-page__main">
                <div className="home-page__main-up">
                    <h2 className="home-page__main-title">Front-End</h2>
                    <p className="home-page__main-text">React , React Router , StyledComponents , JavaScript , Redux , HTML , CSS (Scss) , TailwindCss , NPM , Git , GitHub </p>
                </div>
                <div className="home-page__main-down">
                    <h2 className="home-page__main-title">Back-End</h2>
                    <p className="home-page__main-text">NodeJs , Firebase , MongoDB , MySQL</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
