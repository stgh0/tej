// STYLE REMINDER: Contact is the closing frame — tactile, personal, and cinematic with verified direct links.
import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { assetUrl } from "@/lib/assets";
import { SectionLabel } from "./SiteFooter";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "shivtejghorpade@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard: " + email);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-composite-section" aria-labelledby="contact-heading">
      <div className="contact-hero-inner">
        <img
          className="contact-artifact"
          src={assetUrl("assets/shivtej-mark_919e8a51.png")}
          alt=""
          aria-hidden="true"
        />
        <div className="contact-mark" aria-hidden="true">
          SHIVTEJ
          <br />
          <span>/</span>
          <br />
          GHORPADE
        </div>

        <SectionLabel number="05">CONTACT // CLOSING FRAME</SectionLabel>

        <h2 id="contact-heading" className="contact-statement-heading">
          LET&apos;S MAKE SOMETHING<br />
          <em>WORTH KEEPING.</em>
        </h2>

        <p className="contact-subhead">
          Open to software development, generative AI systems, hackathons, and thoughtful visual collaborations.
          Based in Pune, India &bull; Building everywhere.
        </p>

        {/* Direct Functional Contact Channels */}
        <div className="contact-channels-grid">
          {/* Email Channel */}
          <div className="contact-channel-card contact-channel--primary">
            <div className="channel-icon-wrap">
              <Mail size={18} className="text-signal" />
            </div>
            <div className="channel-info">
              <span className="channel-tag">DIRECT INQUIRY</span>
              <strong className="channel-val">{email}</strong>
            </div>
            <div className="channel-actions">
              <a
                href={`mailto:${email}`}
                className="channel-btn channel-btn-action"
                aria-label="Send email"
              >
                <span>SEND EMAIL</span>
                <ArrowUpRight size={13} />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="channel-btn channel-btn-copy"
                aria-label="Copy email address"
              >
                {copied ? <Check size={13} className="text-signal" /> : <Copy size={13} />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Channel */}
          <a
            href="https://www.linkedin.com/in/shivtej-ghorpade-bb3900382/"
            target="_blank"
            rel="noreferrer"
            className="contact-channel-card"
          >
            <div className="channel-icon-wrap">
              <Linkedin size={18} />
            </div>
            <div className="channel-info">
              <span className="channel-tag">NETWORK // VERIFIED</span>
              <strong className="channel-val">LinkedIn Profile</strong>
              <small>Connect &amp; view hackathon updates</small>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>

          {/* GitHub Channel */}
          <a
            href="https://github.com/stgh0"
            target="_blank"
            rel="noreferrer"
            className="contact-channel-card"
          >
            <div className="channel-icon-wrap">
              <Github size={18} />
            </div>
            <div className="channel-info">
              <span className="channel-tag">CODEBASE // REPOSITORIES</span>
              <strong className="channel-val">github.com/stgh0</strong>
              <small>Open source projects &amp; experiments</small>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>

          {/* Canva Collaboration Invite */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              email
            )}&su=Canva%20project%20invite&body=Hi%20Shivtej%2C%20I%27d%20like%20to%20invite%20you%20to%20my%20Canva%20project.%20Here%27s%20the%20link%3A%20`}
            target="_blank"
            rel="noreferrer"
            className="contact-channel-card"
          >
            <div className="channel-icon-wrap">
              <Sparkles size={18} className="text-signal" />
            </div>
            <div className="channel-info">
              <span className="channel-tag">CREATIVE COLLAB</span>
              <strong className="channel-val">Invite Me on Canva</strong>
              <small>Design review &amp; presentation co-creation</small>
            </div>
            <ArrowUpRight size={16} className="channel-arrow" />
          </a>
        </div>
      </div>

      <div className="contact-postscript">
        <p>Made between systems and instinct.</p>
        <span className="postscript-coord">PUNE, IN &bull; 2026</span>
      </div>
    </section>
  );
}
