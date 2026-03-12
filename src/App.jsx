import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./styles/globals.css";

export default function App() {
  const [page, setPage] = useState("HOME");

  const navigate = (p) => {
    setPage(p);
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
