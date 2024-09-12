import "./MobileMenu.css";

export default function MobileMenu() {
  function linkClick(e) {
    if (e.target.tagName === "A") {
      e.currentTarget.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  return (
    <div className="mobile-menu" data-mobile-menu="" onClick={linkClick}>
      <ul>
        <li>
          <a href="#">Migz</a>
        </li>
        <li>
          <a href="#">Tech Stack</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Work History</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
    </div>
  );
}
