import { OWNER, STATS } from "../data/content";
import { useTypewriter, useInView } from "../components/hooks";
import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/components.css";

function FadeIn({ children, delay = 0 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

/* Social icon button */
function SocialBtn({ href, children, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={label}
      style={{
        width: 44, height: 44, borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--border)",
        color: "var(--text-muted)",
        transition: "all 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.color = "var(--yellow)"; e.currentTarget.style.background = "rgba(245,200,66,0.07)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
    >
      {children}
    </a>
  );
}

/* Skills grouped by category (from the screenshot layout) */
const SKILL_GROUPS = [
  { title: "Blockchain", tags: ["Solana", "Smart Contract", "@solana/web3.js", "Anchor", "SPL Tokens"] },
  // { title: "Cloud & DevOps Tools", tags: ["AWS", "Azure", "Git", "GitHub", "VS Code", "Nginx", "Docker", "GitHub Actions"] },
  { title: "Databases", tags: ["MongoDB (NoSQL)", "PostgreSQL", "MySQL", "Redis"] },
  { title: "Frontend", tags: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Next.js"] },
  { title: "Backend", tags: ["Node.js", "FastAPI", "NestJS", "Express", "Django"] },
  { title: "Languages", tags: ["Python", "TypeScript", "JavaScript", "Rust"] },
];

export default function AboutPage({ onNavigate }) {
  const typed = useTypewriter([`Hi, I'm ${OWNER.name}`]);

  const downloadCV = () => {
    const a = document.createElement("a");
    a.href = "/danyal_FS_CV.pdf";
    a.download = "danyal_CV.pdf";
    a.click();
  };

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Page title ── */}
      <div style={{ textAlign: "center", padding: "48px 0 56px" }}>
        <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
          About Me
        </h1>
      </div>

      {/* ── Bio section: photo left, text right ── */}
      <div className="container" style={{ marginBottom: 80 }}>
        <div className="about-bio-grid">

          {/* Photo */}
          <FadeIn delay={0.1}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: "100%", maxWidth: 340, aspectRatio: "3/4",
                borderRadius: 20, overflow: "hidden",
                border: "2px solid var(--border)",
                background: "var(--card)",
                margin: "0 auto",
              }}>
                {OWNER.avatar ? (
                  <img src={OWNER.avatar} alt={OWNER.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transform: "scale(1.1)" }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" }}>
                    <div style={{ fontSize: 72, fontWeight: 900, color: "var(--yellow)", opacity: 0.8 }}>{OWNER.initials}</div>
                  </div>
                )}
              </div>
              {/* Yellow accent border */}
              <div style={{ position: "absolute", bottom: -8, right: "calc(50% - 178px)", width: "100%", maxWidth: 340, height: "100%", borderRadius: 20, border: "2px solid rgba(245,200,66,0.25)", pointerEvents: "none", transform: "translate(10px, 10px)", zIndex: -1 }} />
            </div>
          </FadeIn>

          {/* Bio text */}
          <FadeIn delay={0.2}>
            <div>
              {/* Typewriter heading */}
              <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.1 }}>
                <span style={{ color: "var(--text-muted)", fontWeight: 700 }}>Hi, I'm </span>
                <span style={{ color: "var(--yellow)" }}>{OWNER.name}</span>
                <span style={{ borderRight: "3px solid var(--yellow)", marginLeft: 2, animation: "blink 1s infinite" }} />
              </h2>

              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>
                With over {STATS[0].num} of experience in software engineering, I specialize in
                creating modern, scalable applications using cutting-edge technologies.
                I'm passionate about clean code, developer experience, and continuous learning.
              </p>

              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 36 }}>
                {OWNER.longBio}
              </p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <button onClick={downloadCV} className="btn btn-primary"
                  style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"/>
                  </svg>
                  Download CV
                </button>
                <button onClick={() => onNavigate("CONTACT")} className="btn btn-outline"
                  style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                  </svg>
                  Let's Talk
                </button>
              </div>

              {/* Social icons */}
              <div style={{ display: "flex", gap: 10 }}>
                <SocialBtn href={OWNER.social.github} label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                </SocialBtn>
                <SocialBtn href={OWNER.social.linkedin} label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 010-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                </SocialBtn>
                <SocialBtn href={OWNER.social.twitter} label="Twitter">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>
                </SocialBtn>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Technical Skills ── */}
      <div style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "72px 0" }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, textAlign: "center", marginBottom: 56, letterSpacing: "-0.02em" }}>
              Technical Skills
            </h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {SKILL_GROUPS.map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.07}>
                <div style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "24px 22px",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,200,66,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                >
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: "var(--text)" }}>
                    {group.title}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-mono)", fontSize: 11,
                        padding: "4px 10px", borderRadius: 100,
                        background: "rgba(245,200,66,0.06)",
                        border: "1px solid rgba(245,200,66,0.2)",
                        color: "var(--text-muted)",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
