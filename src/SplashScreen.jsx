import React from 'react';

export default function SplashScreen() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute top-0 left-0 flex items-start pt-5 pl-5 space-x-1">
        <span className="text-[20vw] text-gray-100 font-bold font-headline animate-slide-in-left">
          D
        </span>
        <span className="text-[20vw] text-gray-100 font-bold font-headline animate-slide-in-right delay-[200ms]">
          !
        </span>
      </div>
    </div>
  );
}
