import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
const events = [
  {
    tags: ["Events", "D! UK"],
    date: "24.04.2025, 03 PM:30",
    title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
    summary: "Recap: SD4P Collective working session – 28th March 2025",
    link: "/sd4p", 
  },
  {
    tags: ["Events", "D! UK"],
    date: "06.12.2024, 02 PM:30",
    title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
    summary:
      "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
    link: "https://designdeclares.com/latest/designing-tomorrow-speculative-thinking-shapes-our-present", 
  },
];

export default function LatestSection() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold">Latest</h2>
        </div>

        <motion.div
          className="md:w-2/3 flex flex-col gap-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between gap-6"
            >
              <div className="md:w-3/5">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-sm text-white/70">{event.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                  {event.title}
                </h3>
              </div>

              <div className="md:w-2/5">
                <p className="text-white/80 mb-2">{event.summary}</p>
                <Link to={event.link} className="underline text-white">
                  Read story
                </Link>
              </div>
            </div>
          ))}

         <div className="mt-8">
  <button
    onClick={() => window.location.href = "https://designdeclares.com/latest"}
    className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
  >
    See all the latest
  </button>
</div>
        </motion.div>
      </div>
    </div>
  );
}
