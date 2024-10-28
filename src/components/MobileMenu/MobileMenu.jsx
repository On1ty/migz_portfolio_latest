import "./MobileMenu.css";

export default function MobileMenu({ activeSection }) {
  function linkClick(e) {
    if (e.target.tagName === "A") {
      e.currentTarget.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  function handleResize() {
    var mobileMenu = document.querySelector("[data-mobile-menu]");
    mobileMenu.classList.remove("active");
  }

  window.addEventListener("resize", handleResize);

  const navItems = [
    { href: "#hero", title: "Migz" },
    { href: "#techStack", title: "Tech Stack" },
    { href: "#education", title: "Education" },
    { href: "#workHistory", title: "Work History" },
    { href: "#contact", title: "Contact" },
  ];

  return (
    <div className="mobile-menu" data-mobile-menu="" onClick={linkClick}>
      <ul>
        {navItems.map(({ title, href }) => (
          <li key={title}>
            <a
              href={href}
              className={
                activeSection === href.substring(1) ? "link-active" : ""
              }
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
