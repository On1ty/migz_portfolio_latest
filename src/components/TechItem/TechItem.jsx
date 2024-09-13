import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faAngular,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./TechItem.css";

export default function TechItem({ tech, yearsExp, icon }) {
  const icons = {
    faHtml5: faHtml5,
    faCss3Alt: faCss3Alt,
    faAngular: faAngular,
    faJsSquare: faJsSquare,
    faGitAlt: faGitAlt,
    faDatabase: faDatabase,
    faCode: faCode,
  };

  const reactIcon = icons[icon] ? icons[icon] : faCode;

  return (
    <div className="tech-item">
      <FontAwesomeIcon className="tech-icon" icon={reactIcon} />
      <p className="tech-name">{tech}</p>
      <p className="tech-exp">
        {yearsExp} {yearsExp > 1 ? `years` : `year`}
      </p>
    </div>
  );
}
