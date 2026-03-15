import { useState, useEffect } from "react";
import { OWNER } from "../data/content";
import "../styles/components.css";

const PAGES = ["HOME", "PROJECTS", "BLOG", "ABOUT", "CONTACT"];

export default function Navbar({ current, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const h = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const handleNav = (p) => {
    onNavigate(p);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled || menuOpen ? "scrolled" : ""}`}>
        {/* Logo */}
        <a className="navbar-logo" onClick={() => handleNav("HOME")} style={{ cursor: "pointer" }}>
          <div className="navbar-logo-box">D</div>
          <span className="navbar-logo-name">Danyal</span>
        </a>

        {/* Desktop center links */}
        <div className="navbar-links">
          {PAGES.map((p) => (
            <span
              key={p}
              className={`navbar-link ${current === p ? "active" : ""}`}
              onClick={() => handleNav(p)}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Right: availability + CTA (desktop) + hamburger (mobile) */}
        <div className="navbar-right">
          <div className="availability-badge">
            <span className="dot" />
            {OWNER.availability}
          </div>
         

          {/* Hamburger — only visible on mobile via CSS */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          {PAGES.map((p) => (
            <button
              key={p}
              className={`navbar-mobile-link ${current === p ? "active" : ""}`}
              onClick={() => handleNav(p)}
            >
              {p.charAt(0) + p.slice(1).toLowerCase()}
            </button>
          ))}
          <div style={{ marginTop: 16 }}>
            <button
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => handleNav("CONTACT")}
            >
              Hire Me ☆
            </button>
          </div>
        </div>
      )}
    </>
  );
}
