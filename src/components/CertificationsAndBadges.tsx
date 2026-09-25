// STYLE REMINDER: Certifications & Badges are archival proof objects — tactile, clean, and interactive with high-res inspection.
import { useState, useEffect } from "react";
import { ArrowUpRight, Maximize2, X, ExternalLink, ShieldCheck } from "lucide-react";
import { assetUrl } from "@/lib/assets";

type AnthropicCert = {
  id: string;
  title: string;
  issuer: string;
  partnerInfo?: string;
  image: string;
  accentBg: string;
};

const anthropicCerts: AnthropicCert[] = [
  {
    id: "anthropic-nonprofits",
    title: "AI Fluency for nonprofits",
    issuer: "ANTHROPIC // GIVINGTUESDAY",
    partnerInfo: "Anthropic & GivingTuesday Global Initiative",
    image: assetUrl("assets/anthropic-cert-1.png"),
    accentBg: "#a7bfb2",
  },
  {
    id: "anthropic-students",
    title: "AI Fluency for students",
    issuer: "ANTHROPIC",
    partnerInfo: "In collaboration with UCC, Ringling College of Art + Design, HEA & National Forum",
    image: assetUrl("assets/anthropic-cert-2.png"),
    accentBg: "#cfcfd9",
  },
  {
    id: "anthropic-framework",
    title: "AI Fluency: Framework & Foundations",
    issuer: "ANTHROPIC",
    partnerInfo: "In collaboration with UCC, Ringling College of Art + Design, HEA & National Forum",
    image: assetUrl("assets/anthropic-cert-3.png"),
    accentBg: "#73865c",
  },
  {
    id: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "ANTHROPIC",
    partnerInfo: "Foundational AI capabilities & Anthropic Claude architecture",
    image: assetUrl("assets/anthropic-cert-4.png"),
    accentBg: "#ded8c7",
  },
];

type CredlyBadge = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  image: string;
  url: string;
};

const credlyBadges: CredlyBadge[] = [
  {
    id: "ibm-ai",
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    issued: "JUN 2026",
    image: assetUrl("assets/ai_0f1b6341.png"),
    url: "https://www.credly.com/users/shivtej-ghorpade/badges/credly",
  },
  {
    id: "ibm-cybersecurity",
    title: "Getting Started with Cybersecurity",
    issuer: "IBM SkillsBuild",
    issued: "JUN 2026",
    image: assetUrl("assets/cybersecurity_91027e84.png"),
    url: "https://www.credly.com/users/shivtej-ghorpade/badges/credly",
  },
  {
    id: "cisco-js-1",
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    issued: "JUN 2026",
    image: assetUrl("assets/javascript-essentials-1_9887b06c.png"),
    url: "https://www.credly.com/users/shivtej-ghorpade/badges/credly",
  },
  {
    id: "cisco-js-2",
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    issued: "JUN 2026",
    image: assetUrl("assets/javascript-essentials-2_dad62ff5.png"),
    url: "https://www.credly.com/users/shivtej-ghorpade/badges/credly",
  },
  {
    id: "ibm-cloud",
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM SkillsBuild",
    issued: "JUN 2026",
    image: assetUrl("assets/journey-to-cloud_7038eabb.png"),
    url: "https://www.credly.com/users/shivtej-ghorpade/badges/credly",
  },
];

export default function CertificationsAndBadges() {
  const [selectedCert, setSelectedCert] = useState<AnthropicCert | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <div className="certifications-subsystem" aria-labelledby="certs-heading">
      <div className="cert-section-header">
        <div className="section-label">
          <span>03.1</span>
          <span>CERTIFICATIONS &amp; BADGES</span>
        </div>
        <div className="cert-intro-text">
          <h3 id="certs-heading" className="cert-subheading">
            CREDENTIALS // <em>EVIDENCE WALL</em>
          </h3>
          <p>
            Official verifications across generative AI, systems architecture, cybersecurity, and computational foundations.
          </p>
        </div>
      </div>

      {/* Part 1: Anthropic Certificates Gallery */}
      <div className="cert-group">
        <div className="cert-group-header">
          <span className="cert-kicker">ANTHROPIC CERTIFICATES // OFFICIAL COMPLETIONS</span>
          <span className="cert-count">{anthropicCerts.length} VERIFIED AWARDS</span>
        </div>

        <div className="anthropic-grid">
          {anthropicCerts.map((cert, index) => (
            <article
              key={cert.id}
              className="anthropic-card"
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedCert(cert)}
              aria-label={`View ${cert.title} certificate`}
            >
              <div className="anthropic-preview-wrap">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate of completion`}
                  loading="lazy"
                />
                <div className="anthropic-hover-overlay">
                  <span className="view-cert-cta">
                    <Maximize2 size={15} />
                    <span>VIEW CERTIFICATE</span>
                  </span>
                </div>
              </div>

              <div className="anthropic-meta">
                <div className="anthropic-tag-row">
                  <span className="anthropic-index">0{index + 1}</span>
                  <span className="anthropic-issuer">{cert.issuer}</span>
                </div>
                <h4 className="anthropic-title">{cert.title}</h4>
                {cert.partnerInfo && <small className="anthropic-partner">{cert.partnerInfo}</small>}
                <button
                  type="button"
                  className="anthropic-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                >
                  <span>INSPECT PROOF</span>
                  <Maximize2 size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Part 2: Credly Public Wallet Badges */}
      <div className="cert-group credly-group-wrap">
        <div className="cert-group-header">
          <div>
            <span className="cert-kicker">CREDLY BADGES // VERIFIED WALLET</span>
            <p className="credly-subtext">
              Verified skills in AI, cloud engineering, cybersecurity, and JavaScript.
            </p>
          </div>
          <a
            href="https://www.credly.com/users/shivtej-ghorpade/badges/credly"
            target="_blank"
            rel="noreferrer"
            className="credly-public-link"
          >
            <span>OPEN CREDLY WALLET</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="credly-cards-grid">
          {credlyBadges.map((badge, index) => (
            <a
              key={badge.id}
              href={badge.url}
              target="_blank"
              rel="noreferrer"
              className="credly-badge-item"
              aria-label={`${badge.title} badge issued by ${badge.issuer}`}
            >
              <div className="credly-top-bar">
                <span className="badge-index">0{index + 1}</span>
                <span className="badge-date">{badge.issued}</span>
              </div>
              <div className="credly-badge-image-box">
                <img src={badge.image} alt={badge.title} loading="lazy" />
              </div>
              <div className="credly-badge-info">
                <h4 className="badge-title">{badge.title}</h4>
                <div className="badge-issuer-row">
                  <ShieldCheck size={13} className="text-signal" />
                  <span>{badge.issuer}</span>
                </div>
              </div>
              <span className="credly-verify-badge">
                VERIFY <ArrowUpRight size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* High-Resolution Certificate Modal Preview */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="modal-title-group">
                <span className="modal-issuer">{selectedCert.issuer}</span>
                <h3 className="modal-title">{selectedCert.title}</h3>
              </div>
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={18} />
              </button>
            </div>

            <div className="cert-modal-image-wrap">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} official certificate`}
              />
            </div>

            <div className="cert-modal-footer">
              <span>RECIPIENT: SHIVTEJ GHORPADE</span>
              <span>VERIFIED COMPLETION</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
