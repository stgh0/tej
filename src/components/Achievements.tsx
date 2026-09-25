// STYLE REMINDER: Achievements are recorded marks in an editorial timeline — precise, verified, asymmetric, and never louder than the work itself.
import { ArrowUpRight, Trophy, Award, CheckCircle2 } from "lucide-react";
import CertificationsAndBadges from "./CertificationsAndBadges";

type AchievementItem = {
  id: string;
  number: string;
  title: string;
  result: string;
  year: string;
  category: string;
  description: string;
  proofUrl: string;
  highlight?: boolean;
};

const achievementsData: AchievementItem[] = [
  {
    id: "webverse",
    number: "01",
    title: "WEBVERSE",
    result: "WINNERS",
    year: "2026",
    category: "NATIONAL HACKATHON // M.E.S. WADIA COLLEGE OF ENGINEERING",
    description:
      "Secured 1st place in the national hackathon by engineering an intelligent clinical case-taking and patient diagnostic assistance system.",
    proofUrl: "https://www.linkedin.com/in/shivtej-ghorpade-bb3900382/",
    highlight: true,
  },
  {
    id: "campusathon",
    number: "02",
    title: "CAMPUSATHON",
    result: "FINALIST — TOP 10",
    year: "2026",
    category: "SYSTEMS & ALGORITHMS HACKATHON",
    description: "",
    proofUrl: "https://www.linkedin.com/in/shivtej-ghorpade-bb3900382/",
    highlight: true,
  },
  {
    id: "nirman",
    number: "03",
    title: "NIRMAN",
    result: "FINALIST",
    year: "2026",
    category: "STATE INNOVATION HACKATHON // GDGOC MITAOE",
    description:
      "Advanced to the finals in the state-level innovation hackathon, prototyping and pitching an end-to-end technical solution evaluated on feasibility and impact.",
    proofUrl: "https://www.linkedin.com/in/shivtej-ghorpade-bb3900382/",
  },
  {
    id: "datathon",
    number: "04",
    title: "DATATHON",
    result: "2ND RUNNER-UP",
    year: "2025",
    category: "DATA SYSTEMS // SYSTEM VERIFICATION",
    description:
      "Earned 2nd runner-up in a data-focused competition, building structured data models and verifiable trust architectures under strict time limits.",
    proofUrl: "https://www.linkedin.com/in/shivtej-ghorpade-bb3900382/",
  },
  {
    id: "promptwars",
    number: "05",
    title: "PROMPT WARS",
    result: "3RD RUNNER-UP",
    year: "2025",
    category: "AI & PROMPT ENGINEERING SPRINT",
    description:
      "Secured 3rd runner-up in an intensive prompt-engineering challenge balancing algorithmic constraints with nuanced, deterministic outputs.",
    proofUrl: "https://www.linkedin.com/in/shivtej-ghorpade-bb3900382/",
  },
];

export default function Achievements({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="achievements" className="achievements-section" aria-labelledby="achievements-heading">
      {!hideHeader && (
        <div className="section-header-block">
          <div className="section-label">
            <span>03</span>
            <span>ACHIEVEMENTS // RECORD OF TRIALS</span>
          </div>
          <div className="achievements-intro-row">
            <h2 id="achievements-heading" className="achievements-title">
              SIGNALS OF<br />
              <em>VERIFIED RESULTS.</em>
            </h2>
            <p className="achievements-lead">
              Rooms where architectural ideas, algorithmic prototypes, and pressure converged into working software.
            </p>
          </div>
        </div>
      )}

      {/* Editorial Timeline */}
      <div className="achievements-timeline" role="list">
        {achievementsData.map((item) => (
          <article
            key={item.id}
            className={`timeline-entry ${item.highlight ? "timeline-entry--highlight" : ""}`}
            role="listitem"
          >
            <div className="timeline-rail">
              <span className="timeline-number">{item.number}</span>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-track-line" aria-hidden="true" />
            </div>

            <div className="timeline-body">
              <div className="timeline-meta-bar">
                <span className="timeline-category">{item.category}</span>
                <span className="timeline-year">{item.year}</span>
              </div>

              <div className="timeline-main-row">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-result-badge">
                  {item.result === "WINNERS" && <Trophy size={13} className="inline mr-1" />}
                  {item.result.includes("FINALIST") && <Award size={13} className="inline mr-1" />}
                  {item.result}
                </span>
              </div>

              {item.description ? <p className="timeline-desc">{item.description}</p> : null}

              <div className="timeline-proof-row">
                <a
                  href={item.proofUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-proof-link"
                  aria-label={`View LinkedIn verification for ${item.title}`}
                >
                  <CheckCircle2 size={13} className="text-signal" />
                  <span>VERIFIED PROOF</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Subsection: Certifications & Badges */}
      <CertificationsAndBadges />
    </section>
  );
}
