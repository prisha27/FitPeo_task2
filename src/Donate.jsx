import React from "react";

export default function DonateD() {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row pt-24">

      <div className="w-full md:w-1/3 flex flex-col items-start p-6">
        <h2 className="text-white text-xl font-bold mb-2">Donate to D!</h2>
      </div>

       <div className="w-full md:w-2/3 flex flex-col items-start px-6 ">
        <div className="text-gray-300 text-2xl md:text-2xl font-normal mb-12 md:text-left">
          Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
        </div>
        <div className="flex gap-x-6">
          <button
            className="px-8 py-3 bg-white text-black rounded-full font-semibold text-lg shadow hover:bg-red-600 hover:text-white transition"
            onClick={() => window.open("https://wise.com/pay/r/uZ5h3pxRMmTE_pk")}
          >
            Donate £10
          </button>
          <button
            className="px-8 py-3 bg-white text-black rounded-full font-semibold text-lg shadow hover:bg-red-600 hover:text-white transition"
            onClick={() => window.open("https://wise.com/pay/r/u2IiQNt2ebixruk")}
          >
            Donate £20
          </button>
          <button
            className="px-8 py-3 bg-white text-black rounded-full font-semibold text-lg shadow hover:bg-red-600 hover:text-white transition"
            onClick={() => window.open("https://wise.com/pay/r/2vqUbqPfU9hvVLE")}
          >
            Donate £50
          </button>
          </div>
      </div>
    </div>
  );
}
