import { useEffect, useRef, useState } from "react";
import SplashScroll from "./SplashScroll";
import Hero from "./Hero";
import FloatingMenu from "./FloatingMenu";
import AccordionItem from "./AccordionItem";
import Donate from "./Donate";
import ActsOf from "./ActsOf";
import Emergency from "./Emergency";
import LatestNews from "./LatestNews";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import SignatoriesList from "./SignatoriesList";
import GlobalSupportersList from "./GlobalSupportersList";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [showFloating, setShowFloating] = useState(false);
  const [revealFooter, setRevealFooter] = useState(false);
  const splashRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowFloating(true), 3300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const splashEl = splashRef.current;
      if (!splashEl) return;

      const scrollTop = splashEl.scrollTop;
      const scrollHeight = splashEl.scrollHeight;
      const clientHeight = splashEl.clientHeight;

      // Footer reveal when bottom reached
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setRevealFooter(atBottom);

      // Scroll Progress logic
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

    const splashEl = splashRef.current;
    splashEl?.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => splashEl?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔴 Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[100]">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Black Scrollable Section */}
      <SplashScroll ref={splashRef} revealFooter={revealFooter}>
        <section id="hero"><Hero /></section>

        {showFloating && !revealFooter && (
          <div className="fixed top-6 right-6 z-[60]">
            <FloatingMenu />
          </div>
        )}

        <section id="accordion"><AccordionItem /></section>
        <section id="donate"><Donate /></section>
        <section id="acts"><ActsOf /></section>
        <section id="emergency"><Emergency /></section>
        <section id="latest"><LatestNews /></section>
        <section id="newsletter"><Newsletter /></section>
        <section id="list"><SignatoriesList /></section>
        <section id="global"><GlobalSupportersList /></section>
      </SplashScroll>

      {/* Footer below, hidden until black slides up */}
      <section id="footer" className="relative z-10">
        <Footer />
      </section>
    </>
  );
}
