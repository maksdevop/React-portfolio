import projects from '../data/Projects';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../page/SingleProject.css';
import ButtonGitHub from '../ButtonGitHub';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { GrNext, GrPrevious } from 'react-icons/gr';

function Project() {
    const params = useParams();
    const project = projects.find((project) => project.slug === params.slug);
    const projectImg = project.images;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % projectImg.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + projectImg.length) % projectImg.length);
    };

    return (
        <div className="single">
            <h1 style={{ fontSize: '50px' }}>Single Project Info </h1>
            <div className="single-project">
                <h2>{project.title}</h2>
                <div className="single-img-wrap">
                    <GrPrevious className="prev" onClick={prevSlide} />

                    <TransitionGroup>
                        <CSSTransition key={currentIndex} timeout={500} classNames="fade">
                            <img className="single-img" src={projectImg[currentIndex]} alt={project.title} />
                        </CSSTransition>
                    </TransitionGroup>

                    <GrNext className="next" onClick={nextSlide} />
                </div>
                <h3>{`Skills : ${project.stack}`}</h3>
                <Link to={project.gitHub}>
                    <ButtonGitHub />
                </Link>
                <h2>{project.id}</h2>
            </div>
        </div>
    );
}

export default Project;
