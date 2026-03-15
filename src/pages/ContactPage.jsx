import { useState } from "react";
import { OWNER } from "../data/content";
import { useInView } from "../components/hooks";
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
    }}>{children}</div>
  );
}

const WHY_WORK = [
  `${OWNER.stats ? OWNER.stats[0].num : "4+"} years of professional experience`,
  "Full-stack & backend development expertise",
  "Strong focus on performance & clean architecture",
  "Agile development methodology",
  "Excellent communication & async collaboration",
  "Open to remote, onsite & freelance work",
];

export default function ContactPage({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(OWNER.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Page header ── */}
      <div style={{ textAlign: "center", padding: "48px 24px 60px" }}>
        <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Connect With Me
        </h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
          I'm excited to collaborate on innovative projects or discuss opportunities in tech.
          Reach out via email or connect on social platforms!
        </p>
      </div>

      {/* ── Two-card layout ── */}
      <div className="container" style={{ marginBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 800, margin: "0 auto" }} className="contact-grid">

          {/* Card 1: Info */}
          <FadeIn delay={0.1}>
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "28px 26px",
              position: "relative",
              overflow: "hidden",
              height: "100%",
            }}>
              {/* Watermark G */}
              <div style={{ position: "absolute", bottom: -10, right: 10, fontSize: 120, fontWeight: 900, color: "var(--yellow)", opacity: 0.04, pointerEvents: "none", lineHeight: 1, fontFamily: "var(--font-sans)", userSelect: "none" }}>
                {OWNER.initials[0]}
              </div>

              {/* Name + badge */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.01em" }}>{OWNER.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{OWNER.title.split("&")[0].trim()}</div>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "5px 10px", borderRadius: 100,
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.25)",
                  fontSize: 10, fontFamily: "var(--font-mono)",
                  color: "#4ade80", letterSpacing: "0.1em", whiteSpace: "nowrap",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 5px rgba(74,222,128,0.8)", display: "inline-block" }} />
                  AVAILABLE FOR<br />FREELANCE
                </div>
              </div>

              {/* Email row */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.15em", marginBottom: 8 }}>EMAIL</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" }}>
                  <span style={{ fontSize: 14, color: "var(--text)" }}>{OWNER.email}</span>
                  <button onClick={copyEmail} title={copied ? "Copied!" : "Copy email"} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: copied ? "#4ade80" : "var(--text-muted)",
                    padding: "2px 4px", transition: "color 0.2s",
                  }}>
                    {copied ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z"/><path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Location row */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.15em", marginBottom: 8 }}>LOCATION</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ color: "var(--yellow)", flexShrink: 0 }}>
                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z"/>
                  </svg>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{OWNER.location.split("·")[0].trim()}</span>
                </div>
              </div>

              {/* Status note */}
              <div style={{
                padding: "10px 14px", borderRadius: 10,
                border: "1px dashed var(--border)",
                fontStyle: "italic", fontSize: 13,
                color: "var(--text-dim)", marginBottom: 24,
              }}>
                "Looking for remote opportunities"
              </div>

              {/* Social icons */}
              <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                {[
                  { href: OWNER.social.github, icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> },
                  { href: OWNER.social.linkedin, icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 010-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg> },
                  { href: OWNER.social.twitter, icon: <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    width: 40, height: 40, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                    color: "var(--text-muted)", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.color = "var(--yellow)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Why Work With Me */}
          <FadeIn delay={0.2}>
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "28px 26px",
              position: "relative",
              overflow: "hidden",
              height: "100%",
            }}>
              {/* Faint gear watermark */}
              <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", border: "12px solid rgba(255,255,255,0.03)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 10, right: 10, width: 80, height: 80, borderRadius: "50%", border: "8px solid rgba(255,255,255,0.04)", pointerEvents: "none" }} />

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24, letterSpacing: "-0.01em" }}>
                Why Work With Me?
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {WHY_WORK.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--yellow)", flexShrink: 0, marginTop: 6 }} />
                    {item}
                  </li>
                ))}
              </ul>
{/* 
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                <button onClick={() => onNavigate("CONTACT")} className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center", gap: 8, borderRadius: 100 }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M15.854.146a.5.5 0 01.11.54l-5.819 14.547a.75.75 0 01-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 01.124-1.33L15.314.037a.5.5 0 01.54.11z"/>
                  </svg>
                  Start a Conversation
                </button>
              </div> */}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
