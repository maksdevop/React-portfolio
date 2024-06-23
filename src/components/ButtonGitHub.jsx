import './ButtonGitHub.css';
import gitHubImg from './img/assects/github-mark.svg';
function ButtonGitHub() {
    return (
        <button className="git-hub">
            <img className="git-hub-img" src={gitHubImg} alt="" />
            GitHub
        </button>
    );
}

export default ButtonGitHub;
