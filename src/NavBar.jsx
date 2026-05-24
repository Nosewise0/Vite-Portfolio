import "./Styles/NavBar.css";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-accent-bar" />
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          NOSEWISE_
        </a>

        <div className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="navbar-status">
          <div className="navbar-status-dot" />
          <span>Available for work</span>
        </div>

        <button
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile-menu ${mobileOpen ? "active" : ""}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
