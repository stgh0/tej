// STYLE REMINDER: The footer is a cinematic closing frame: sparse, human, and linked back to the signal mark.
import { assetUrl } from "@/lib/assets";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="route-footer" role="contentinfo">
      <div className="footer-col footer-col-identity">
        <div className="footer-brand">
          <img src={assetUrl("assets/shivtej-mark_919e8a51.png")} alt="" />
          <div>
            <strong>SHIVTEJ GHORPADE</strong>
            <span>MIT Academy of Engineering, Pune, India</span>
          </div>
        </div>
        <p className="footer-bio-note">
          Computer Science student building at the intersection of code, AI and design.
        </p>
      </div>

      <div className="footer-col footer-col-nav">
        <span className="footer-heading">NAVIGATION</span>
        <div className="footer-nav-links">
          <Link href="/">HOME</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/achievements">ACHIEVEMENTS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>

      <div className="footer-col footer-col-social">
        <span className="footer-heading">SIGNALS // DIRECT</span>
        <div className="footer-social-links">
          <a
            href="https://github.com/stgh0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={13} />
            <span>GitHub</span>
            <ArrowUpRight size={11} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivtej-ghorpade-bb3900382/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={13} />
            <span>LinkedIn</span>
            <ArrowUpRight size={11} />
          </a>
          <a
            href="mailto:shivtejghorpade@gmail.com"
            aria-label="Send direct email"
          >
            <Mail size={13} />
            <span>Email</span>
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>

      <div className="footer-bottom-line">
        <span>© {currentYear} SHIVTEJ GHORPADE</span>
        <span>MADE BETWEEN SYSTEMS &amp; INSTINCT</span>
      </div>
    </footer>
  );
}

export function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}
