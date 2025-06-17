import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);
  const menuRef = useRef(null);

  const handleScrollToDeclare = () => {
    const declareSection = document.getElementById("declare");
    if (declareSection) {
      declareSection.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      const footer = document.getElementById("footer");
      const menu = menuRef.current;
      if (!footer || !menu) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight) {
        const overlap = windowHeight - footerRect.top;
        setBottomOffset(overlap + 24);
      } else {
        setBottomOffset(24);
      }
    };

    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/20"
          onClick={() => setOpen(false)}
        />
      )}

      <motion.div
        ref={menuRef}
        style={{ bottom: `${bottomOffset}px` }}
        className="fixed right-6 z-50"
        initial={false}
        animate={{
          x: open ? -20 : 0,
          width: open ? 416 : 208,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="font-h3 border border-black bg-black text-white rounded-t-2xl shadow-lg overflow-hidden transition-all duration-300">
          <div className="bg-white text-black w-full rounded-t-2xl">
            <div className="flex h-full flex-col">
              {!open && (
                <>
                  <button
                    aria-label="Open Menu"
                    className="focus-ring flex h-12 w-full items-center justify-between border-b border-black px-3 pr-0 hover:bg-red-600"
                    onClick={() => setOpen(true)}
                  >
                    <span className="text-2xl">Menu</span>
                    <span className="flex items-center justify-center border-l border-black">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="black" strokeWidth="1.5" className="size-8">
                        <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>
                  <button
                    className="focus-ring flex h-12 w-full items-center gap-x-3 border-t border-black px-3 text-left text-2xl hover:bg-red-600"
                    onClick={handleScrollToDeclare}
                  >
                    Declare Now
                  </button>
                </>
              )}

              {open && (
                <>
                  <div className="flex h-12 w-full items-center justify-between border-b border-black bg-white px-3">
                    <span className="text-2xl">Menu</span>
                    <button
                      aria-label="Close Menu"
                      className="flex items-center justify-center border-l border-black"
                      onClick={() => setOpen(false)}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="size-8">
                        <path strokeLinecap="square" d="M6 6l12 12M6 18L18 6" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-col w-full">
                    <a href="#hero" className="flex h-12 items-center gap-x-3 border-b border-black px-3 hover:bg-red-600 text-lg">
                      <span>🏠</span> Home
                    </a>
                    <a href="#accordion" className="flex h-12 items-center gap-x-3 border-b border-black px-3 hover:bg-red-600 text-lg">
                      <span>ℹ️</span> About
                    </a>
                    <a href="#latest" className="flex h-12 items-center gap-x-3 border-b border-black px-3 hover:bg-red-600 text-lg">
                      <span>📰</span> Latest
                    </a>
                    <a href="#newsletter" className="flex h-12 items-center gap-x-3 border-b border-black px-3 hover:bg-red-600 text-lg">
                      <span>✉️</span> Contact
                    </a>
                    <a href="#global" className="flex h-12 items-center gap-x-3 border-b border-black px-3 hover:bg-red-600 text-lg">
                      <span>🌐</span> Global Chapter
                    </a>
                  </nav>
                  <button
                    className="focus-ring flex h-12 w-full items-center gap-x-3 border-t border-black px-3 text-left text-2xl hover:bg-red-600"
                    onClick={handleScrollToDeclare}
                  >
                    Declare Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
