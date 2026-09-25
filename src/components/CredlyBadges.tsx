// STYLE REMINDER: Credentials are displayed as a quiet evidence wall — tactile, archival, and secondary to the work itself.
import { ArrowUpRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";

const badges = [
  { title: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild", issued: "JUN 27, 2026", image: assetUrl("assets/ai_0f1b6341.png") },
  { title: "Getting Started with Cybersecurity", issuer: "IBM SkillsBuild", issued: "JUN 27, 2026", image: assetUrl("assets/cybersecurity_91027e84.png") },
  { title: "JavaScript Essentials 1", issuer: "Cisco", issued: "JUN 27, 2026", image: assetUrl("assets/javascript-essentials-1_9887b06c.png") },
  { title: "JavaScript Essentials 2", issuer: "Cisco", issued: "JUN 27, 2026", image: assetUrl("assets/javascript-essentials-2_dad62ff5.png") },
  { title: "Journey to Cloud: Envisioning Your Solution", issuer: "IBM SkillsBuild", issued: "JUN 27, 2026", image: assetUrl("assets/journey-to-cloud_7038eabb.png") },
] as const;

export default function CredlyBadges() {
  return <section className="credly-section" aria-labelledby="credly-heading">
    <div className="credly-intro">
      <span className="credly-kicker">02 / CREDLY BADGE WALLET</span>
      <h2 id="credly-heading">SIGNALS<br /><em>OF PRACTICE.</em></h2>
      <p>Verified learning in AI, cybersecurity, JavaScript, and cloud systems. Small marks of the systems I keep returning to.</p>
      <a className="credly-wallet-link" href="https://www.credly.com/users/shivtej-ghorpade/badges/credly" target="_blank" rel="noreferrer">OPEN PUBLIC WALLET <ArrowUpRight size={14} /></a>
    </div>
    <div className="credly-grid">
      {badges.map((badge, index) => <a className="credly-badge" href="https://www.credly.com/users/shivtej-ghorpade/badges/credly" target="_blank" rel="noreferrer" key={badge.title}>
        <span className="credly-index">0{index + 1}</span>
        <div className="credly-image-wrap"><img src={badge.image} alt={`${badge.title} badge issued by ${badge.issuer}`} /></div>
        <div className="credly-meta"><strong>{badge.title}</strong><span>{badge.issuer}</span><small>ISSUED {badge.issued}</small></div>
      </a>)}
    </div>
  </section>;
}
