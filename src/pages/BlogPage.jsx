import { POSTS } from "../data/content";
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

/* Cover placeholder — geometric pattern per tag */
function CoverPlaceholder({ post }) {
  const colors = {
    Rust:       { bg: "#1a100a", accent: "#FF5733" },
    Web3:       { bg: "#0f0a1a", accent: "#9945FF" },
    SQL:        { bg: "#0a1a10", accent: "#10B981" },
    Python:     { bg: "#0a0f1a", accent: "#3B82F6" },
    TypeScript: { bg: "#0f1500", accent: "#F5C842" },
  };
  const c = colors[post.tag] || { bg: "#111", accent: "#F5C842" };
  return (
    <div style={{ width: "100%", height: "100%", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {/* Grid lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }} viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
        {[0,50,100,150,200,250,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke={c.accent} strokeWidth="0.5"/>)}
        {[0,50,100,150,200].map(y => <line key={y} x1="0" y1={y} x2="300" y2={y} stroke={c.accent} strokeWidth="0.5"/>)}
      </svg>
      {/* Central element */}
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 42, fontWeight: 900, color: c.accent, opacity: 0.35, letterSpacing: "-0.04em", zIndex: 1 }}>
        {post.tag.slice(0, 2).toUpperCase()}
      </div>
      {/* ARTICLE badge */}
      <div style={{ position: "absolute", top: 12, right: 12, fontFamily: "var(--font-mono)", fontSize: 9, padding: "3px 8px", borderRadius: 100, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em" }}>
        ARTICLE
      </div>
    </div>
  );
}

/* Blog card — matching the reference screenshot */
function BlogCard({ post, delay }) {
  return (
    <FadeIn delay={delay}>
      <div style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        {/* Cover image */}
        <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
          {post.cover
            ? <img src={post.cover} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
            : <CoverPlaceholder post={post} />
          }
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 24px" }}>
          {/* Date + read time */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)" }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" style={{ color: "var(--yellow)" }}>
                <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zm9.992 6.5H2.5v7.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V6.5h-.008z"/>
              </svg>
              {post.date}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)" }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" style={{ color: "var(--yellow)" }}>
                <path d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z"/>
              </svg>
              {post.readTime} read
            </div>
          </div>

          {/* Title */}
          <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.45, marginBottom: 10, color: "var(--text)" }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {post.excerpt}
          </p>

          {/* Tag */}
          <div style={{ marginTop: 16 }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, padding: "3px 10px",
              borderRadius: 100, border: `1px solid ${post.tagColor}40`,
              color: post.tagColor, background: `${post.tagColor}10`,
            }}>{post.tag}</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* ── Header ── */}
      <div style={{ textAlign: "center", padding: "48px 24px 60px" }}>
        <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Blogs
        </h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
          Thoughts on web development, technology trends, and lessons learned along the way.
        </p>
      </div>

      {/* ── Blog grid ── */}
      <div className="container" style={{ marginBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {POSTS.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </div>
  );
}
