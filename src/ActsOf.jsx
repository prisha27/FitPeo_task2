import React from "react";

const ACTS = [
  { number: 1, title: "Sound the Alarm", description: "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice." },
  { number: 2, title: "Start the Journey", description: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start." },
  { number: 3, title: "Bring Clients with Us", description: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress." },
  { number: 4, title: "Measure What We Make", description: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."},
  { number: 5, title: "Redefine ‘Good’", description: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards." },
  { number: 6, title: "Educate, Accelerate", description: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry." },
  { number: 7, title: "Design for Justice", description: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world." },
    { number: 8, title: "Amplify Voices for Change", description: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change." },

];

export default function ActsOf() {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row pt-0">
      <div className="w-full md:w-1/3 flex flex-col items-start p-6 sticky top-0 self-start h-fit z-10 bg-black">
        <h2 className="text-white text-2xl font-bold mb-2">8 Acts of Emergency</h2>
      </div>

      {/* right component */}
      <div className="w-full md:w-2/3 flex flex-col items-start px-0">
        <div className="text-white text-2xl font-normal mb-6 md:text-left px-6 pt-6">
          What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
        </div>
        
        {/* table  */}

<div className="w-[calc(100%-4.5rem)] bg-gray-200 border border-black mr-6 mb-6 ml-6">
          {ACTS.map((act, idx) => (
            <div key={act.number}>
             
              <div className="grid grid-cols-12 border-b border-black">
                <div className="col-span-2 border-r border-black flex items-center justify-center py-4 px-2 border-r border-black">
                  <span className="text-5xl font-normal text-black">{act.number}</span>
                </div>
                <div className="col-span-10 flex items-center py-4 px-4">
                  <span className="text-5xl font-normal text-black">{act.title}</span>
                </div>
              </div>
             
             
              <div className="grid grid-cols-12">
                <div className="col-span-2 border-b border-black" />
                <div className="col-span-10 py-4 pr-4 pl-2 border-b border-black text-black text-md font-normal text-left">
                  {act.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
