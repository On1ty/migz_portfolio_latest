import "./LeftSideNav.css";
import avatarPhoto from "../../assets/avatar.jpeg";
import data from "../../data.json";
import SocialMedia from "../SocialMedia/SocialMedia";
import moment from "moment";

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
  } = data;
  const age = moment().diff(birthday, "years");

  return (
    <aside className="left-sidenav">
      <div className="wrapper">
        <div className="profile">
          <img className="profile__avatar" src={avatarPhoto} alt="avatar" />
          <p className="profile__name">
            {firstName} {lastName}
          </p>
          <span className="profile_job">{currentJob}</span>
          <SocialMedia socialMedia={socialMedia} />
        </div>
        <div className="info">
          <div><span>Age</span></div>
          <span>{age}</span>
          <div><span>Residence</span></div>
          <span>{country}</span>
          <div><span>Freelance</span></div>
          <span className={freelance ? "freelance" : "freelance--error"}>{freelance ? "" : "Not"} Available</span>
          <div><span>Address</span></div>
          <span>
            {city}, {province}
          </span>
        </div>
        <div></div>
      </div>
    </aside>
  );
}
