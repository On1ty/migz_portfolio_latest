import "./LeftSideNav.css";
import avatarPhoto from "../../assets/avatar.jpeg";
import data from "../../data.json";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function LeftSideNav() {
  const { firstName, lastName, currentJob, socialMedia } = data;

  return (
    <aside className="left-sidenav">
      <div className="profile">
        <img className="profile__avatar" src={avatarPhoto} alt="avatar" />
        <p className="profile__name">
          {firstName} {lastName}
        </p>
        <span className="profile_job">{currentJob}</span>
        <SocialMedia socialMedia={socialMedia} />
      </div>
      <div></div>
      <div></div>
    </aside>
  );
}
