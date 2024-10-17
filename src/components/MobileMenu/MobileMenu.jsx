import "./MobileMenu.css";

export default function MobileMenu() {
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
    <div className="mobile-menu" data-mobile-menu="" onClick={linkClick}>
      <ul>
        {navItems.map((nav) => (
          <li key={nav.title}>
            <a href={nav.href}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
