// STYLE REMINDER: The landing hero is an architectural threshold — oversized typography, precise Swiss coordinates, and an understated 'Currently' card.
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToPreviews = () => {
    const el = document.getElementById("home-previews");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="landing-signal" aria-hidden="true" />

      <div className="hero-top-meta">
        <div className="meta-block">
          <span className="meta-tag">COORDINATES</span>
          <span>18.5204° N, 73.8567° E &bull; PUNE, INDIA</span>
        </div>
        <div className="meta-block text-right">
          <span className="meta-tag">DISCIPLINE</span>
          <span>COMPUTER SCIENCE / AI &amp; ML / DESIGN</span>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="signal-dot" aria-hidden="true" />
          A COMPUTER SCIENTIST BUILDING AT THE CONVERGENCE OF CODE &amp; FORM
        </p>

        <h1 className="hero-display-name">
          <span className="name-line-1">SHIVTEJ</span>
          <span className="name-line-2">GHORPADE</span>
        </h1>

        <div className="hero-statement-grid">
          <div className="hero-positioning">
            <p className="positioning-lead">
              Computer Science student building at the intersection of code, AI and design.
            </p>
            <p className="positioning-sub">
              Interested in software development, AI / ML, building products, hackathons, design, visual culture, and exploring ideas through technology.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="cta-button cta-primary" aria-label="View Projects">
                <span>VIEW PROJECTS</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact" className="cta-button cta-secondary" aria-label="Contact Me">
                <span>CONTACT ME</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <aside className="currently-card" aria-label="Current activity">
            <div className="currently-header">
              <span className="currently-badge">
                <Sparkles size={11} className="text-signal" /> CURRENTLY // EXPLORING
              </span>
              <span className="currently-stamp">2026 // LOG</span>
            </div>
            <ul className="currently-list">
              <li>
                <span className="bullet-signal" />
                <div>
                  <strong>Studying Computer Science</strong>
                  <small>MIT Academy of Engineering, Pune</small>
                </div>
              </li>
              <li>
                <span className="bullet-signal" />
                <div>
                  <strong>Building products</strong>
                  <small>Full-stack web &amp; intelligent tools</small>
                </div>
              </li>
              <li>
                <span className="bullet-signal" />
                <div>
                  <strong>Exploring AI + design</strong>
                  <small>Bridging algorithms with visual culture</small>
                </div>
              </li>
              <li>
                <span className="bullet-signal" />
                <div>
                  <strong>Participating in hackathons</strong>
                  <small>Rapid systems design under constraint</small>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      <div className="hero-bottom-bar">
        <button
          type="button"
          onClick={scrollToPreviews}
          className="scroll-cue"
          aria-label="Scroll to selected work preview"
        >
          <ArrowDown size={13} />
          <span>EXPLORE HIGHLIGHTS // SCROLL TO PREVIEW</span>
        </button>
        <span className="hero-edition">RED THREAD INSTALLATION // VOL. 01</span>
      </div>
    </section>
  );
}
