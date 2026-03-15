import { useState, useEffect } from "react";
import { OWNER, PROJECTS, SKILLS } from "../data/content";
import { useTypewriter, useInView } from "../components/hooks";
import ProjectCard from "../components/ProjectCard";
import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/components.css";

/* ── Scroll-reveal wrapper ───────────────────────────── */
function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Live clock ──────────────────────────────────────── */
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
      }));
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

/* ── Footer (three-card layout from screenshot) ──────── */
function SiteFooter({ onNavigate }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      padding: "60px 0 32px",
    }}>
      <div className="container">
        {/* Three cards row */}
        <div className="footer-cards">

          {/* Card 1 — Logo + bio + status + clock */}
          <div className="footer-card">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 40, height: 40, background: "var(--yellow)",
                  borderRadius: 10, display: "flex", alignItems: "center",
                  justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#000",
                }}>{OWNER.initials}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em" }}>{OWNER.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--yellow)", letterSpacing: "0.15em" }}>
                    SOFTWARE ENGINEER
                  </div>
                </div>
              </div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.22, flexShrink: 0 }}>
                <rect x="8" y="8" width="16" height="16" rx="3" stroke="#888" strokeWidth="1.5"/>
                <rect x="11" y="11" width="10" height="10" rx="1.5" stroke="#888" strokeWidth="1"/>
                <line x1="4" y1="12" x2="8" y2="12" stroke="#888" strokeWidth="1.5"/>
                <line x1="4" y1="16" x2="8" y2="16" stroke="#888" strokeWidth="1.5"/>
                <line x1="4" y1="20" x2="8" y2="20" stroke="#888" strokeWidth="1.5"/>
                <line x1="24" y1="12" x2="28" y2="12" stroke="#888" strokeWidth="1.5"/>
                <line x1="24" y1="16" x2="28" y2="16" stroke="#888" strokeWidth="1.5"/>
                <line x1="24" y1="20" x2="28" y2="20" stroke="#888" strokeWidth="1.5"/>
                <line x1="12" y1="4" x2="12" y2="8" stroke="#888" strokeWidth="1.5"/>
                <line x1="16" y1="4" x2="16" y2="8" stroke="#888" strokeWidth="1.5"/>
                <line x1="20" y1="4" x2="20" y2="8" stroke="#888" strokeWidth="1.5"/>
                <line x1="12" y1="24" x2="12" y2="28" stroke="#888" strokeWidth="1.5"/>
                <line x1="16" y1="24" x2="16" y2="28" stroke="#888" strokeWidth="1.5"/>
                <line x1="20" y1="24" x2="20" y2="28" stroke="#888" strokeWidth="1.5"/>
              </svg>
            </div>

            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
              Pushing the boundaries of{" "}
              <strong style={{ color: "var(--text)" }}>Digital Craftsmanship</strong>{" "}
              through code, design, and decentralization.
            </p>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "8px 16px", borderRadius: 100,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.03)",
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--text-muted)", letterSpacing: "0.08em",
              marginBottom: 10, whiteSpace: "nowrap",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px rgba(74,222,128,0.9)",
                display: "inline-block", flexShrink: 0,
              }} />
              LIVE STATUS: AVAILABLE FOR FREELANCE
            </div>

            <br />
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 14px", borderRadius: 100,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
              fontFamily: "var(--font-mono)", fontSize: 12,
              color: "var(--text-muted)",
            }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" style={{ color: "var(--yellow)", flexShrink: 0 }}>
                <path d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z"/>
              </svg>
              <LiveClock />
            </div>
          </div>

          {/* Card 2 — Quick links + social */}
          <div className="footer-card">
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--text-dim)", letterSpacing: "0.2em",
              marginBottom: 20, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ color: "var(--yellow)", fontSize: 14 }}>›_</span>
              QUICK LINKS
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 24 }}>
              {["PROJECTS","BLOG","ABOUT","CONTACT"].map((p, i, arr) => (
                <button key={p} onClick={() => onNavigate(p)} style={{
                  background: "none", border: "none",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  textAlign: "left", padding: "10px 0",
                  fontSize: 15, fontWeight: 600,
                  color: "var(--text-muted)", cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.target.style.color = "var(--text)"}
                  onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                >
                  {p.charAt(0) + p.slice(1).toLowerCase()}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: OWNER.social.github, label: "GitHub", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> },
                { href: OWNER.social.linkedin, label: "LinkedIn", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 010-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg> },
                { href: OWNER.social.twitter, label: "Twitter", svg: <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} title={s.label} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.color = "var(--yellow)"; e.currentTarget.style.background = "rgba(245,200,66,0.07)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >{s.svg}</a>
              ))}
            </div>
          </div>

          {/* Card 3 — Vision CTA */}
          <div className="footer-card" style={{ border: "1px solid rgba(245,200,66,0.2)", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", top: -60, right: -60,
              width: 180, height: 180,
              background: "radial-gradient(circle, rgba(245,200,66,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <h3 style={{ fontSize: "clamp(18px,2.2vw,24px)", fontWeight: 800, lineHeight: 1.25, marginBottom: 10, letterSpacing: "-0.02em" }}>
              Have a <span style={{ color: "var(--yellow)" }}>vision</span> in mind?
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 22 }}>
              Let's build something exceptional together. I'm currently taking new projects.
            </p>
            <button onClick={() => onNavigate("CONTACT")} className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", borderRadius: 100, marginBottom: 22, fontSize: 13, letterSpacing: "0.05em" }}>
              START A CONVERSATION
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                <path d="M15.854.146a.5.5 0 01.11.54l-5.819 14.547a.75.75 0 01-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 01.124-1.33L15.314.037a.5.5 0 01.54.11z"/>
              </svg>
            </button>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.9 }}>
              <div style={{ color: "var(--text-dim)" }}><span style={{ color: "var(--yellow)", opacity: 0.6 }}>&gt; </span>system.initialize()</div>
              <div style={{ color: "var(--text-dim)" }}><span style={{ color: "var(--yellow)", opacity: 0.6 }}>&gt; </span>fetching_latest.build...</div>
              <div style={{ color: "var(--yellow)", opacity: 0.75 }}><span>&gt; </span>{OWNER.name.toLowerCase()}_portfolio_v1.0.2.stable</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} {OWNER.name.toUpperCase()} STUDIO
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["PRIVACY POLICY", "LEGAL TERMS"].map(t => (
              <span key={t} style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "var(--text-dim)", letterSpacing: "0.08em", cursor: "pointer", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "var(--text-muted)"}
                onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
              >{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button onClick={scrollTop} title="Back to top" style={{
              width: 36, height: 36, borderRadius: 9,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 15, transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.color = "var(--yellow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >↑</button>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.1em" }}>DEVELOPED &amp; DESIGN BY</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--yellow)", letterSpacing: "0.08em", fontWeight: 700 }}>{OWNER.name.toUpperCase()} DEV</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════
   HOME PAGE — fully scrollable one-page layout
   ══════════════════════════════════════════════════════════ */
export default function HomePage({ onNavigate }) {
  const typed = useTypewriter(OWNER.tagline);
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 6);

  return (
    <div>
      {/* ══ HERO ══════════════════════════════════════ */}
      <section className="hero">
        <div className="geo-bg" />
        <div style={{ position:"absolute", top:"15%", left:"8%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(245,200,66,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"20%", right:"10%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(245,200,66,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />

        <div className="hero-content">
          <div style={{ opacity:0, animation:"fadeInUp 0.7s 0.1s forwards" }}>
            <div className="hero-typewriter">{typed}<span className="hero-cursor" /></div>
          </div>
          <div style={{ opacity:0, animation:"fadeInUp 0.7s 0.25s forwards" }}>
            <p className="hero-desc">{OWNER.bio}</p>
          </div>
          <div style={{ opacity:0, animation:"fadeInUp 0.7s 0.4s forwards" }}>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => onNavigate("PROJECTS")}>Explore Projects →</button>
              <button className="btn btn-outline" onClick={() => onNavigate("CONTACT")}>Hire Me ☆</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECTS ═════════════════════════ */}
      <section className="section" style={{ position:"relative", overflow:"hidden" }}>
        <div className="orb orb-gold" style={{ width:420, height:420, left:"-140px", top:"10%", opacity:0.85 }} />
        <div className="orb" style={{ width:300, height:300, right:"-80px", bottom:"5%", background:"radial-gradient(circle, #2a2a2a 0%, #111 60%, transparent 100%)", opacity:0.5, animationDelay:"3s" }} />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <FadeIn>
            <div style={{ textAlign:"center", marginBottom:40 }}>
              <h2 className="section-title">Featured <span>Projects</span></h2>
            </div>
          </FadeIn>
          <div className="projects-grid">
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.08}><ProjectCard project={p} /></FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ textAlign:"center", marginTop:32 }}>
              <button className="btn btn-outline" onClick={() => onNavigate("PROJECTS")}>View All Projects →</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ TECHNICAL SKILLS ══════════════════════════ */}
      <section className="section" style={{ background:"var(--bg2)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign:"center", marginBottom:40 }}>
              <span className="section-eyebrow">Expertise</span>
              <h2 className="section-title">Technical <span>Skills</span></h2>
              <p style={{ color:"var(--text-muted)", maxWidth:480, margin:"12px auto 0", fontSize:15 }}>
                The tools, languages and frameworks I use to ship production-grade systems.
              </p>
            </div>
          </FadeIn>
          <div className="skills-grid">
            {SKILLS.map((sk, i) => (
              <FadeIn key={sk.title} delay={i * 0.07}>
                <div className="skill-card" style={{ "--skill-color": sk.color }}>
                  <div className="skill-icon">{sk.icon}</div>
                  <div className="skill-title">{sk.title}</div>
                  <div className="skill-desc">{sk.desc}</div>
                  <div className="skill-tags">
                    {sk.tags.map(t => (
                      <span key={t} className="tag" style={{ borderColor:`${sk.color}30`, color:sk.color, background:`${sk.color}0d` }}>{t}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════ */}
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
