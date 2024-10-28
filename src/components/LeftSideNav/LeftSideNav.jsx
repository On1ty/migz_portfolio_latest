import "./LeftSideNav.css";
import avatarPhoto from "../../assets/avatar.jpeg";
import data from "../../data.json";
import SocialMedia from "../SocialMedia/SocialMedia";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faFigma,
  faGithub,
  faPhp,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faVialCircleCheck } from "@fortawesome/free-solid-svg-icons/faVialCircleCheck";
import { faCircleXmark, faImages } from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import RequestCVBtn from "../RequestCVBtn/RequestCVBtn";

export default function LeftSideNav() {
  const {
    firstName,
    lastName,
    currentJob,
    socialMedia,
    birthday,
    city,
    province,
    country,
    freelance,
    extraSkills,
  } = data;

  const age = moment().diff(birthday, "years");

  const icons = {
    faBootstrap: faBootstrap,
    faSass: faSass,
    faImages: faImages,
    faGithub: faGithub,
    faFigma: faFigma,
    faVialCircleCheck: faVialCircleCheck,
    faPhp: faPhp,
  };

  function closeLeftSideNav() {
    var mobileMenu = document.querySelector("[data-mobile-menu]");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }

  return (
    <aside className="left-sidenav" data-mobile-menu>
      <div className="wrapper">
        <span className="close-left-sidenav" onClick={closeLeftSideNav}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
        <div className="profile">
          <img
            className="profile__avatar"
            src={avatarPhoto}
            alt="Juan Miguel's profile picture"
          />
          <p className="profile__name">
            {firstName} {lastName}
          </p>
          <span className="profile_job">{currentJob}</span>
          <SocialMedia socialMedia={socialMedia} />
        </div>
        <div className="info">
          <div>
            <span>Age</span>
          </div>
          <span>{age}</span>
          <div>
            <span>Country</span>
          </div>
          <span>{country}</span>
          <div>
            <span>Freelance</span>
          </div>
          <span className={freelance ? "freelance" : "freelance--error"}>
            {freelance ? "" : "Not"} Available
          </span>
          <div>
            <span>Address</span>
          </div>
          <span>
            {city}, {province}
          </span>
        </div>
        <div className="extra-skills">
          <p>Extra Skills</p>
          <ul>
            {extraSkills.map((extra) => (
              <li key={extra.name}>
                <FontAwesomeIcon icon={icons[extra.reactIcon] ?? faClone} />
                {extra.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <RequestCVBtn />
        </div>
      </div>
    </aside>
  );
}
