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
    const timer = setTimeout(() => setShowFloating(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = splashRef.current;
    if (!el) return;

    const handleRevealFooter = () => {
      try {
        const matrix = getComputedStyle(el).transform;
        const currentY = matrix !== 'none' ? 
          parseInt(matrix.split(', ')[5]) : 0;
        
        const adjustedScrollTop = el.scrollTop - currentY;
        const atBottom = adjustedScrollTop + el.clientHeight >= el.scrollHeight - 20;
        setRevealFooter(atBottom);
      } catch (error) {
        console.error("Scroll calculation error:", error);
      }
    };

    el.addEventListener("scroll", handleRevealFooter, { passive: true });
    return () => el.removeEventListener("scroll", handleRevealFooter);
  }, []);

  useEffect(() => {
    const el = splashRef.current;
    if (!el) return;

    const handleScroll = () => {
      try {
        const matrix = getComputedStyle(el).transform;
        const currentY = matrix !== 'none' ? 
          parseInt(matrix.split(', ')[5]) : 0;

        const adjustedScrollTop = el.scrollTop - currentY;
        const totalScrollable = el.scrollHeight - el.clientHeight;
        const scrolledPercent = (adjustedScrollTop / totalScrollable) * 100;
        setProgress(Math.min(100, Math.max(0, scrolledPercent)));
      } catch (error) {
        console.error("Progress calculation error:", error);
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
 
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[100]">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

     
      <SplashScroll ref={splashRef} revealFooter={revealFooter}>
        <section id="hero">
          <Hero />
        </section>
        <section id="accordion">
          <AccordionItem />
        </section>
        <section id="donate">
          <Donate />
        </section>
        <section id="acts">
          <ActsOf />
        </section>
        <section id="emergency">
          <Emergency />
        </section>
        <section id="latest">
          <LatestNews />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
        <section id="list">
          <SignatoriesList />
        </section>
        <section id="global">
          <GlobalSupportersList />
        </section>
      </SplashScroll>

     
      {showFloating && !revealFooter && <FloatingMenu />}

  
      {revealFooter && (
        <section id="footer" className="relative z-30 bg-red-600 text-white">
          <Footer />
        </section>
      )}
    </>
  );
}
