import React, { useState } from "react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const handleScrollToDeclare = () => {
    const declareSection = document.getElementById("declare");
    if (declareSection) {
      declareSection.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Optionally close menu after scroll
    }
  };

  return (
    <div className="font-h3 fixed bottom-4 right-4 z-20 border border-black bg-white text-black max-sm:left-4 md:bottom-6 md:right-6">
      <div className="max-sm:!w-auto" style={{ width: open ? "26rem" : "13rem" }}>
        <div className="flex h-full flex-col">

          {!open && (
            <>
              <button
                type="button"
                aria-label="Open Menu"
                className="focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors justify-between border-b pr-0 hover:bg-red-600"
                onClick={() => setOpen(true)}
              >
                <span className="text-2xl">Menu</span>
                <span className="flex aspect-square h-full items-center justify-center border-l border-l-black">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="black" strokeWidth="1.5" className="size-8 transition-transform">
                    <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              <div className="-mb-px box-border overflow-hidden"></div>
              <button
                className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-600 text-left text-2xl"
                onClick={handleScrollToDeclare}
              >
                Declare Now
              </button>
            </>
          )}

          {open && (
            <>
              <div className="flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors justify-between border-b pr-0 bg-white">
                <span className="text-2xl">Menu</span>
                <button
                  aria-label="Close Menu"
                  className="flex aspect-square h-full items-center justify-center border-l border-l-black"
                  onClick={() => setOpen(false)}
                >
                  <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="size-8 transition-transform">
                    <path strokeLinecap="square" d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col w-full">
                <a href="#home" className="focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-b hover:bg-red-600 text-lg">
                  <span>🏠</span> Home
                </a>
                <a href="#about" className="focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-b hover:bg-red-600 text-lg">
                  <span>ℹ️</span> About
                </a>
                <a href="#latest" className="focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-b hover:bg-red-600 text-lg">
                  <span>📰</span> Latest
                </a>
                <a href="#contact" className="focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-b hover:bg-red-600 text-lg">
                  <span>✉️</span> Contact
                </a>
                <a href="#global-chapter" className="focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-b hover:bg-red-600 text-lg">
                  <span>🌐</span> Choose Global Chapter
                </a>
              </nav>
              <button
                className="focus-ring group relative focus-ring flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-600 text-left text-2xl"
                onClick={handleScrollToDeclare}
              >
                Declare Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
