import "./MobileMenu.css";

export default function MobileMenu({ activeSection }) {
  function linkClick(e) {
    if (e.target.tagName === "A") {
      e.currentTarget.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  const navItems = [
    { href: "#hero", title: "Migz" },
    { href: "#techStack", title: "Tech Stack" },
    { href: "#education", title: "Education" },
    { href: "#workHistory", title: "Work History" },
    { href: "#contact", title: "Contact" },
  ];

  return (
    <div className="mobile-menu" onClick={linkClick}>
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
