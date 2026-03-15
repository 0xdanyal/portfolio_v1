import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { POSTS } from "./data/content";
import "./styles/globals.css";

export default function App() {
  const [page, setPage] = useState("HOME");
  const [selectedPost, setSelectedPost] = useState(null);

  const navigate = (p) => {
    if (p.startsWith("BLOG_DETAIL:")) {
      const postId = parseInt(p.split(":")[1]);
      const post = POSTS.find(post => post.id === postId);
      setSelectedPost(post);
      setPage("BLOG_DETAIL");
    } else {
      setPage(p);
      setSelectedPost(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toUpperCase();
    if (hash && ["HOME","PROJECTS","BLOG","ABOUT","CONTACT"].includes(hash)) {
      setPage(hash);
    }
  }, []);

  const renderPage = () => {
    switch (page) {
      case "HOME":     return <HomePage onNavigate={navigate} />;
      case "PROJECTS": return <ProjectsPage onNavigate={navigate} />;
      case "BLOG":     return <BlogPage onNavigate={navigate} />;
      case "BLOG_DETAIL": return <BlogDetailPage post={selectedPost} onNavigate={navigate} />;
      case "ABOUT":    return <AboutPage onNavigate={navigate} />;
      case "CONTACT":  return <ContactPage onNavigate={navigate} />;
      default:         return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar current={page} onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      {/* Footer on every page. HomePage also has its own inline footer — that one
          is the scrollable homepage version; this one covers all other pages. */}
      {page !== "HOME" && <Footer onNavigate={navigate} />}
    </div>
  );
}
