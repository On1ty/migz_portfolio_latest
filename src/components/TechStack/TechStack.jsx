import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faAngular,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./TechStack.css";

export default function TechStack({ tech }) {
  const icons = {
    faHtml5: faHtml5,
    faCss3Alt: faCss3Alt,
    faAngular: faAngular,
    faJsSquare: faJsSquare,
    faGitAlt: faGitAlt,
    faDatabase: faDatabase,
  };

  return (
    <div className="tech-stack">
      {tech.map((tech) => (
        <div className="tech-item" key={tech.name}>
          <FontAwesomeIcon className="tech-icon" icon={icons[tech.reactIcon] ?? faCode} />
          <p className="tech-name">{tech.name}</p>
          <p className="tech-exp">
            {tech.yearsExp} {tech.yearsExp > 1 ? `years` : `year`}
          </p>
        </div>
      ))}
    </div>
  );
}
