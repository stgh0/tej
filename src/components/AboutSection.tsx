// STYLE REMINDER: About is an editorial portrait, keeping the exact original copy, layout, and visual duality.
import { SectionLabel } from "./SiteFooter";

const interests = [
  "MATHEMATICS",
  "ART",
  "PSYCHOLOGY",
  "AI",
  "ABSTRACTION",
  "SPACE",
  "PHOTOGRAPHY",
  "MUSIC",
  "TYPOGRAPHY",
  "DESIGN",
];

const technical = [
  "C",
  "C++",
  "PYTHON",
  "JAVA",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "SQL",
  "NUMPY",
  "PANDAS",
  "POWER BI",
  "HYPERLEDGER FABRIC",
  "GIT / GITHUB",
  "AI / ML",
];

const creative = [
  "CANVA",
  "VISUAL DESIGN",
  "PRESENTATION DESIGN",
  "TYPOGRAPHY",
  "LAYOUT",
  "VISUAL STORYTELLING",
  "CREATIVE DIRECTION",
  "DIGITAL CONTENT",
];

export default function AboutSection() {
  return (
    <div id="about" className="about-composite-section" aria-label="About section">
      {/* 01: Hero / The Duality */}
      <section className="route-hero about-hero">
        <SectionLabel number="04">ABOUT // THE DUALITY</SectionLabel>
        <div className="route-heading">
          <h1>
            I LIKE TO KNOW
            <br />
            <em>WHY IT WORKS.</em>
          </h1>
          <p>
            I am a Computer Science &amp; Engineering student exploring Artificial Intelligence &amp; Machine Learning — and the space around them.
          </p>
        </div>
      </section>

      {/* 02: Narrative Copy */}
      <section className="route-section about-copy-section">
        <div className="about-copy-large">
          <p>
            I care about systems, intelligence, and data. I also care about typography, colour, visual communication, and the strange little decisions that make an idea feel alive.
          </p>
          <p>
            I spend time thinking about how information is presented, not just what information contains. I like taking something technically complicated and making it visually understandable.
          </p>
          <p className="copy-note">The interesting part is usually where the two meet.</p>
        </div>
      </section>

      {/* 03: The Technical + The Visual */}
      <section className="route-section worlds-section">
        <SectionLabel number="04.1">THE TECHNICAL + THE VISUAL</SectionLabel>
        <div className="worlds-grid">
          <div>
            <span className="skill-heading">01 / TECHNICAL</span>
            <div className="skill-cloud">
              {technical.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="skill-heading">02 / CREATIVE</span>
            <div className="skill-cloud creative-cloud">
              {creative.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04: Personal Interests / Signals */}
      <section className="route-section interest-route-section">
        <SectionLabel number="04.2">PERSONAL INTERESTS // SIGNALS</SectionLabel>
        <div className="interest-field">
          {interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
