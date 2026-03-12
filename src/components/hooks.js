import { useRef, useState, useEffect } from "react";

/* Trigger a CSS animation when element scrolls into view */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* Typewriter cycling through an array of words */
export function useTypewriter(words, speed = 85, pause = 1800) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (pauseRef.current) return;
    const current = words[wi];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          pauseRef.current = true;
          setTimeout(() => { pauseRef.current = false; setDeleting(true); }, pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWi((wi + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  });

  return text;
}
