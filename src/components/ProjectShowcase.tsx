// STYLE REMINDER: Project rows behave like discoverable exhibition objects; the summary is a quiet annotation with technical tags and repository links.
import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, MoveUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/projects";

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const current = projects[active] || projects[0];

  return (
    <div className="project-showcase-container">
      <div className="project-stage route-project-stage">
        {/* Left: Dynamic Exhibition Visual Preview */}
        <div className="project-preview">
          <img
            key={current.slug}
            src={current.image}
            alt={`${current.title} project artwork`}
            loading="lazy"
          />
          <span className="project-scan">SCAN // {current.year} // SYSTEM ARCHIVE</span>
          <span className="preview-index">
            {current.id} / {String(projects.length).padStart(2, "0")}
          </span>
          <span className="preview-award">{current.award}</span>

          <div className="preview-summary">
            <span className="preview-label">SUMMARY //</span>
            <p>{current.summary}</p>
            <div className="preview-tech-pills">
              {current.stack.slice(0, 4).map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="preview-action-links">
              <Link href={`/projects/${current.slug}`} className="preview-link preview-link-primary">
                OPEN CASE STUDY <ArrowUpRight size={14} />
              </Link>
              {current.github && (
                <a
                  href={current.github}
                  target="_blank"
                  rel="noreferrer"
                  className="preview-link preview-link-subtle"
                  aria-label={`View ${current.title} on GitHub`}
                >
                  <Github size={13} />
                  <span>GITHUB</span>
                </a>
              )}
              {current.liveDemo && (
                <a
                  href={current.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="preview-link preview-link-subtle"
                  aria-label={`View ${current.title} Live Demo`}
                >
                  <ExternalLink size={13} />
                  <span>DEMO</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: Interactive Project Index List */}
        <div className="project-list" role="tablist" aria-label="Projects list">
          {projects.map((project, index) => {
            const isCurrent = active === index;
            return (
              <div
                key={project.slug}
                className={`project-row ${isCurrent ? "active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                tabIndex={0}
                role="tab"
                aria-selected={isCurrent}
                aria-label={project.title}
              >
                <span className="project-number">{project.id}</span>
                <div className="project-header-group">
                  <div className="project-title-bar">
                    <span className="project-title">{project.title}</span>
                    <span className="project-year">{project.year}</span>
                    <MoveUpRight className="project-arrow" size={17} />
                  </div>
                  <span className="project-detail">
                    {project.type}
                    <small>{project.detail}</small>
                  </span>

                  <p className="project-hover-summary">{project.summary}</p>

                  <div className="project-row-footer">
                    <div className="project-stack-tags">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="mini-tag">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="mini-tag mini-tag-more">+{project.stack.length - 4}</span>
                      )}
                    </div>

                    <div className="project-row-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-github-btn"
                          title="View on GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={13} />
                          <span>Code</span>
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="project-detail-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Details</span>
                        <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
