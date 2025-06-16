import { useEffect, useState } from "react";
import Hero from "./Hero";
import FloatingMenu from "./FloatingMenu";
import AccordionItem from "./AccordionItem";
import Donate from "./Donate";
import ActsOf from "./ActsOf";
import Emergency from "./Emergency";
import LatestNews from "./LatestNews";
import Footer from "./Footer";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFloating(true), 3300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["accordion", "donate", "acts", "emergency"];
      let visibleCount = 0;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom > 0) {
            visibleCount = index + 1;
          }
        }
      });

      const progressMap = [0, 10, 30, 40, 60];
      setProgress(progressMap[visibleCount] || 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Hero />
      {showFloating && <FloatingMenu />}
      <section id="accordion"><AccordionItem /></section>
      <section id="donate"><Donate /></section>
      <section id="acts"><ActsOf /></section>
      <section id="emergency"><Emergency /></section>
      <section id="latest"><LatestNews /></section>
      <section id="footer"><Footer /></section>
    </>
  );
}
