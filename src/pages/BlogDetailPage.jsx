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

export default function BlogDetailPage({ post, onNavigate }) {
  if (!post) return <div>Post not found</div>;

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Back button */}
      <div style={{ padding: "20px 0" }}>
        <button onClick={() => onNavigate("BLOG")} className="btn btn-outline"
          style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8.5 2.5L1 8l7.5 5.5V2.5z"/>
          </svg>
          Back to Blogs
        </button>
      </div>

      {/* Article header */}
      <FadeIn>
        <div style={{ marginBottom: 40 }}>
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
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, padding: "3px 10px",
              borderRadius: 100, border: `1px solid ${post.tagColor}40`,
              color: post.tagColor, background: `${post.tagColor}10`,
            }}>{post.tag}</span>
          </div>

          <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>
            {post.title}
          </h1>

          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 600 }}>
            {post.excerpt}
          </p>
        </div>
      </FadeIn>

      {/* Article content */}
      <FadeIn delay={0.2}>
        <div className="container" style={{ marginBottom: 80 }}>
          <div style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "40px 48px",
            lineHeight: 1.7,
            fontSize: 16,
            color: "var(--text)",
          }}>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}