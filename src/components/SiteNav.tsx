// STYLE REMINDER: Navigation is an index inside an installation — quiet, fixed, technical, and always one click from every room.
import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { Link, useLocation } from "wouter";
import { assetUrl } from "@/lib/assets";

export const navItems = [
  { id: "home", number: "01", label: "Home", href: "/" },
  { id: "projects", number: "02", label: "Projects", href: "/projects" },
  { id: "achievements", number: "03", label: "Achievements", href: "/achievements" },
  { id: "about", number: "04", label: "About", href: "/about" },
  { id: "contact", number: "05", label: "Contact", href: "/contact" },
] as const;

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isItemActive = (href: string) => {
    if (href === "/") {
      return location === "/" || location === "/home";
    }
    return location.startsWith(href);
  };

  return (
    <header className={`site-nav ${isScrolled || location !== "/" ? "route-nav is-scrolled" : ""}`}>
      <Link href="/" className="wordmark" onClick={() => setOpen(false)} aria-label="Shivtej Ghorpade home">
        <img src={assetUrl("assets/shivtej-mark_919e8a51.png")} alt="" />
        <span>SHIVTEJ / GHORPADE</span>
      </Link>

      <button
        className="menu-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span>{open ? "CLOSE" : "INDEX"}</span>
        <i className={open ? "open" : ""} />
      </button>

      <nav className={`nav-index ${open ? "open" : ""}`} aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = isItemActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <span>{item.number}</span>
              {item.label}
              {isActive && <span className="nav-active-pip" aria-hidden="true" />}
            </Link>
          );
        })}
        <a
          className="github-nav-link"
          href="https://github.com/stgh0"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Shivtej Ghorpade on GitHub"
        >
          <Github size={16} strokeWidth={1.7} aria-hidden="true" />
          <span className="sr-only">GitHub</span>
        </a>
      </nav>
    </header>
  );
}
