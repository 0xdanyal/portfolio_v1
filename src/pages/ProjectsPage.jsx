import { useState } from "react";
import { PROJECTS } from "../data/content";
import ProjectCard from "../components/ProjectCard";
import { useInView } from "../components/hooks";
import "../styles/pages.css";

const ALL_TAGS = ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

function FadeIn({ children, delay = 0 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <div style={{ paddingTop: 72 }}>
      <div style={{
        background:"linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%)",
        borderBottom:"1px solid var(--border)",
        padding:"64px 0 52px",
        textAlign:"center",
        position:"relative",
        overflow:"hidden",
      }}>
        <div className="geo-bg" />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="page-hero-title">All <span style={{ color:"var(--yellow)" }}>Projects</span></h1>
          <p className="page-hero-sub">
            A collection of full-stack and backend systems, Web3 contracts and CLI tools.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filter buttons */}
          <FadeIn>
            <div className="projects-filter">
              {["All", "RUST", "PYTHON", "TYPESCRIPT", "SOLANA", "CLI"].map(tag => (
                <button
                  key={tag}
                  className={`filter-btn ${filter === tag ? "active" : ""}`}
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="projects-grid">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.07}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign:"center", padding:"80px 0", color:"var(--text-dim)" }}>
              No projects match this filter.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
