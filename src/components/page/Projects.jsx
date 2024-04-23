import '../page/Projects.css';
import projects from '../data/Projects';
import ImageList from '../ProjectsList';
function Projects() {
    return (
        <div className="projects-page">
            <ImageList data={projects} />
        </div>
    );
}

export default Projects;
