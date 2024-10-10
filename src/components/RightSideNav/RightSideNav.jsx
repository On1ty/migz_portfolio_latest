import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHouse,
  faLaptopCode,
  faUserGraduate,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import "./RightSideNav.css";

export default function RightSideNav() {
  const [activeLink, setActiveLink] = useState("#hero");

  const navItems = [
    { href: "#hero", icon: faUserSecret },
    { href: "#techStack", icon: faLaptopCode },
    { href: "#education", icon: faUserGraduate },
    { href: "#workHistory", icon: faBriefcase },
    { href: "#contact", icon: faEnvelope },
  ];

  return (
    <nav className="right-sidenav">
      <div className="wrapper">
        <ul className="nav">
          {navItems.map(({ href, icon }) => (
            <li key={href}>
              <a
                href={href}
                className={activeLink === href ? "active" : ""}
                onClick={() => setActiveLink(href)}>
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
