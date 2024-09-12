import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MobileNav.css";

export default function MobileNav() {
  function burgerMenuClick() {
    var mobileMenu = document.querySelector("[data-mobile-menu]");
    var isOpen = mobileMenu.classList.contains("active");

    if (isOpen) {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <nav className="mobile-nav">
      <a className="burger-menu" onClick={burgerMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </a>
    </nav>
  );
}
