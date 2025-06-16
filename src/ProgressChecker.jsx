import React, { useEffect, useState } from "react";

export default function ProgressChecker() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  
  const getProgressColor = (percent) => {
    return "bg-red-600";
  };

  const progressBarColor = getProgressColor(scrollProgress);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-50">
      <div
        className={`h-full transition-all duration-200 ease-out ${progressBarColor}`}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
