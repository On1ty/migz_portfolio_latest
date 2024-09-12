import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MobileNav.css";

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      <div className="burger-menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}
