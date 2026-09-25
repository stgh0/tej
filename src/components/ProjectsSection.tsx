// STYLE REMINDER: Projects section presents works as pieces in an exhibition space.
import { SectionLabel } from "./SiteFooter";
import ProjectShowcase from "./ProjectShowcase";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section-container" aria-labelledby="projects-heading">
      <div className="section-header-block">
        <SectionLabel number="02">WORK // SELECTED INVESTIGATIONS</SectionLabel>
        <div className="projects-intro-row">
          <h2 id="projects-heading" className="projects-main-title">
            PROJECTS<br />
            <em>AS PIECES.</em>
          </h2>
          <p className="projects-main-lead">
            Not finished answers. Investigations into trust, patterns, full-stack systems, and the distance between a problem and its people.
          </p>
        </div>
      </div>

      <ProjectShowcase projects={projects} />
    </section>
  );
}
