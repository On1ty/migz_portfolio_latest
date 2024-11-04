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
import "./RightSideNav.scss";

export default function RightSideNav({ activeSection }) {
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
                className={activeSection === href.substring(1) ? "active" : ""}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
