import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen.jsx';

export default function Hero({ onParagraphVisible }) {
  const [showSplash, setShowSplash] = useState(true);
  const [showDeclares, setShowDeclares] = useState(false);
  const [showUK, setShowUK] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      const declaresTimer = setTimeout(() => setShowDeclares(true), 1000);
      const ukTimer = setTimeout(() => setShowUK(true), 1200);
      const paragraphTimer = setTimeout(() => {
        setShowParagraph(true);
        if (typeof onParagraphVisible === "function") {
          onParagraphVisible();
        }
      }, 2400);

      return () => {
        clearTimeout(declaresTimer);
        clearTimeout(ukTimer);
        clearTimeout(paragraphTimer);
      };
    }
  }, [showSplash, onParagraphVisible]);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-start pt-5 overflow-hidden">
      <div className="flex-1 flex flex-col justify-start pl-3">
        <h1 className="font-headline text-[18vw] md:text-[9vw] font-bold uppercase text-gray-100 leading-none">
          <span className="flex flex-col tracking-wider">
            <span className="block animate-reveal-text">Design</span>
            {showDeclares && (
              <span className="block animate-reveal-text">Declares</span>
            )}
            {showUK && (
              <span className="block animate-reveal-text">
                <span className="text-orange-500">UK</span>
              </span>
            )}
          </span>
        </h1>
      </div>

      {showParagraph && (
        <div className="flex-1 flex flex-col justify-start items-end pl-3">
          <p className="text-gray-200 text-lg max-w-md mr-5">
            Design Declares is a growing group of designers, design studios,
            agencies and institutions here to declare a climate and ecological
            emergency. As part of the global declaration movement, we commit to
            harnessing the tools of our industry to reimagine, rebuild and heal
            our world.
          </p>
        </div>
      )}
    </div>
  );
}
