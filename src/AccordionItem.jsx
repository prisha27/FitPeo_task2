import React, { useState } from "react";

const ChevronUp = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 15l6-6 6 6" />
  </svg>
);
const ChevronDown = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);


function AccordionItem({ title, children, defaultOpen = true , largeTitle = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-gray-400 py-2">
      <button
        className={`w-full flex justify-between items-center py-4 text-left focus:outline-none ${
          largeTitle ? "text-2xl md:text-3xl font-light text-white" : "text-lg text-white"
        }`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-4 text-white">{open ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      {open && children}
    </div>
  );
}

export default function BreakdownPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">

<div className="w-full md:w-1/3 flex flex-col items-start p-6 sticky top-0 self-start h-fit z-10 bg-black">
        <h2 className="text-white text-xl font-bold mb-2">This is Breakdown</h2>
      </div>

  
      <div className="w-full md:w-2/3 flex flex-col items-start md:items-end px-6 pt-2">
        <h1 className="text-white font-sans text-[4vw] leading-tight font-ariel mb-12 md:text-left">
          The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
        </h1>

        <div className="w-full border-b border-gray-400">
          <AccordionItem title="The Role of Design" defaultOpen={false} largeTitle>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-100 text-lg font-light">
              <div>
                As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.
              </div>
              <div>
                Because designers are makers. We make ideas real. We generate solutions. We build the world – dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Time for Change" defaultOpen={false} largeTitle>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-100 text-lg font-light">
              <div>
                Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.
<br /><br />
This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs
              </div>
              <div>
                It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.
<br /> <br />
And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.              </div>
             
            </div>
          </AccordionItem>
          <AccordionItem title="Act with Urgency" defaultOpen={false} largeTitle>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-100 text-lg font-light">
              <div>
                  We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.
              </div>
              <div>
                This is the most important brief of our lives. Join us as we begin to design a climate-positive future.
              </div>
            </div>
          </AccordionItem>
        </div>

        <button
  className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold text-lg shadow hover:bg-red-600 transition self-start"
  onClick={() => window.open("https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be", "_blank")}
>
  View our D! Intro Video
</button>
      </div>
    </div>
  );
}
