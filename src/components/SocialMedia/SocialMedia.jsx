import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.scss";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia(props) {
  const { socialMedia } = props;

  const icons = {
    faFacebookF: faFacebookF,
    faInstagram: faInstagram,
    faLinkedinIn: faLinkedinIn,
  };

  return (
    <div className="social-media">
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="media"
          title={social.name}>
          <FontAwesomeIcon icon={icons[social.reactIcon] || faLink} />
        </a>
      ))}
    </div>
  );
}
