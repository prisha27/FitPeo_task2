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

  // Show floating menu after Hero animation or time
  useEffect(() => {
    const timer = setTimeout(() => setShowFloating(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Handle footer reveal when end of black part is reached
  useEffect(() => {
    const el = splashRef.current;
    if (!el) return;

    const handleRevealFooter = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;

      const atBottom = scrollTop + clientHeight >= scrollHeight - 20;
      setRevealFooter(atBottom);
    };

    el.addEventListener("scroll", handleRevealFooter, { passive: true });
    return () => el.removeEventListener("scroll", handleRevealFooter);
  }, []);

  // Scroll progress for progress bar
  useEffect(() => {
    const el = splashRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;

      const totalScrollable = scrollHeight - clientHeight;
      const scrolledPercent = (scrollTop / totalScrollable) * 100;
      setProgress(Math.min(100, Math.max(0, scrolledPercent)));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[100]">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <SplashScroll ref={splashRef}>
        <section id="hero">
          <Hero />
        </section>

        {showFloating && !revealFooter && (
          <div className="fixed top-6 right-6 z-[60]">
            <FloatingMenu />
          </div>
        )}

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

      {revealFooter && (
        <section id="footer" className="relative z-30 bg-red-600 text-white">
          <Footer />
        </section>
      )}
    </>
  );
}
