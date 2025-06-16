import React, { useState } from "react";
import heroImg from "./assets/sd4p_1.png";
import img2 from "./assets/sd4p_2.png";
import img3 from "./assets/sd4p_3.png"
import img4 from "./assets/sd4p_4.png"
import Footer from "./Footer";
import img5 from "./assets/sd4p_5.png"
import ProgressChecker from "./ProgressChecker";


export default function SD4P() {
  const [copied, setCopied] = useState(false);

  const handleShareClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    <div className="bg-black text-white min-h-screen px-6 py-12 font-sans relative">
     
      <div className="absolute top-6 left-6 text-5xl font-bold font-headline">D!</div>

      <div className="max-w-4xl ml-20 space-y-10">
       
        <div>
          <h1 className="text-2xl md:text-4xl mb-4 mt-10 leading-tight">
            SD4P Collective: How can Service Design drive meaningful sustainability impact
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-neutral-800 rounded-full px-3 py-1 text-sm font-medium">Events</span>
            <span className="bg-neutral-800 rounded-full px-3 py-1 text-sm font-medium">D! UK</span>
            <span className="text-neutral-400 text-sm">24.04.2025, 03 PM</span>
          </div>

      
          <div className="w-full flex justify-center relative">
            <button
              onClick={handleShareClick}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                copied ? "bg-red-600 text-white" : "bg-white text-black hover:bg-neutral-200"
              }`}
            >
              Share Article
            </button>
            {copied && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm animate-fade-in">
                &#10003; Link copied
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <img
          src={heroImg}
          alt="SD4P Collective group at Imperial College"
          className="w-[70%] object-cover rounded-xl ml-0"
        />

     
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl">
            Recap: SD4P Collective working session – 28th March 2025
          </h2>

          <p className="text-lg">In short:</p>

          <ul className="list-disc ml-6 space-y-4 text-base leading-relaxed">
            <li>
              <span className="font-semibold text-white">
                The Service Designer for the Planet Collective
              </span>{" "}
              (SD4P Collective) is an initiative facilitated by Design Declares
            </li>
            <li>
              The SD4P held its first in-person session on 28 March 2025 at Imperial College London,
              gathering 30+ professionals and students.
            </li>
            <li>
              We ran breakout groups to develop briefs around:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Service Design-specific educational material/training</li>
                <li>Service Design-specific green skill assessment</li>
                <li>Approaches to measure services sustainability impact</li>
              </ul>
            </li>
            <li>
              We also reflected on how we run and organise ourselves as a collective, balancing learning and hands-on participation
            </li>
            <li>The event was low-waste by design</li>
            <li>
              <span className="font-semibold text-white">Next SD4P meet-up:</span>{" "}
              online Friday 2nd May 2025, 3pm BST.
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src={img2}
            alt="Group photo at Imperial College"
            className="ml-0 w-full  object-cover"
          />
        </div>

   
        <div className="space-y-6 text-base leading-relaxed text-neutral-200">
          <h2 className="text-3xl md:text-5xl text-white">
            Service Designers for The Planet Collective
          </h2>
          <p>
            Last month marked a significant moment for the Service Designers for The Planet
            Collective (in short the ‘SD4P Collective’): our first in-person session! Held at
            Imperial College London, this third gathering brought together over 30 participants —
            students, professionals, thinkers, and doers — united by a common belief:{" "}
            <strong>design has a role to play in shaping a more sustainable, just, and regenerative future 🌍</strong>.
          </p>

          <p>
            The SD4P Collective is a group of like-minded service designers from the <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
>
  Design Declares
</a> community, building a community of practice to advance knowledge, design for
            life, and create real impact. We launched last October 2024, and the collective includes
            70 people to date! At our core: action, experimentation, learning, collaborating, respect and
            inclusion.
          </p>

          <p>The session was very hands-on and focused on ideas the collective had prioritised in previous sessions:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>✨ Creating educational materials for Service Design, User Research, and Strategic Design</li>
            <li>✨ Mapping ‘green’ skills and identifying gaps</li>
            <li>✨ Equipping designers with better measurement tools</li>
          </ul>

          <p>
            It began with a wide-angle lens. <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
>
Ned Gartside
</a> took us through the broader ecosystem – mapping
            ongoing initiatives across public and private design sectors, business, digital
            sustainability. This was not just about identifying gaps, but about locating where our
            collective energy can bring the most value.  We asked:
          </p>

          <p><i>
            Where does SD4P sit in this landscape? What can we offer that doesn’t yet
            exist—or needs strengthening?
          </i>
          </p>
        </div>

        <img
          src={img3}
          alt=""
          className="w-[70%] ml-0 object-cover mx-auto"
        />

         <p>
            From there, we moved to action. Splitting into three groups, we unpacked early-stage ideas, evolving them into tangible briefs. 
            With such big groups, we used a ‘liberating structure’ approach to ensure all team members could voice their opinion. 
            Walking through a project canvas brief, the groups uncovered current challenges and needs, ideated on possible ways the ideas could manifest
             and discussed who should be involved, both human and non-human stakeholders.
          </p>

          <p>
            In group 1, facilitated by <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
> Sruti Gidugu </a>: On creating educational materials, there was a bigger question of defining ‘design’ and
             ‘service design’ and based on the context of where members work: how to empower <strong>designers to spread the message of sustainability - </strong>
            as pioneers in their work environment, ultimately driving value, to their immediate sphere of influence, and beyond.
          </p>

          <p>
            In group 2, guided by  <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
>  Eve McCann </a>: Focused on ‘greener skills’ assessment, we discussed <strong> how to assess our own green skills –</strong> from a knowledge, skills, experience, culture, sustainability areas, etc. standpoint.
             And how to identify the key gaps that would inform the training material of group 1.
          </p>

            <p>
                In group 3, supported by <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
> Sandrine Herbert-Razafinjato</a>: Focused on ways to measure what we make, 
                the group discussed how to <strong> “make the invisible visible”, so to embed sustainability into design decisions </strong> – 
                looking beyond a product/service, across the entire lifecycle and supply chain (and with the key question of how to set the ‘right’ parameters?). 
                Interestingly the conversation drifted beyond the ‘designer circle’ and a key idea emerged to bring onboard <strong> environmental measurement specialists (not just use self-serve tools or canvases)</strong>to support the design work; and to look at 
                Nature as a key stakeholder on the decision making.


            </p>


             <img
          src={img4}
          alt=""
          className="w-[70%] ml-0 object-cover mx-auto"
        />

        <p>
            As the afternoon unfolded, the conversation shifted inwards. 
            We reflected on what it means to <strong>be a collective </strong>– how we want to organise ourselves,
             how we share work, get to know each other, and maintain momentum whilst being realistic 
             of everyone’s diverging goals and level of dedication. We discussed how we might cater 
             for 2 types of crowd, maybe <strong>2 streams: the ‘learning-consuming members’ </strong>who want to be 
             kept in the loop and have access to what is produced (can be self-served, remote) ; 
             and the <strong> ‘outcome-oriented members’ </strong>who actively want to be involved (hands-on, have
              time/energy to help, want to contribute, maybe more in-person). There is definitely 
              a will to be experimental and empirical: to name, test, learn and iterate as-we-go.
             And an appetite to hold meetings in nature and a Supper Club 😜.
        </p>

        <p>
            And then, like any productive workshop, we took it to the pub, where we extended the conversations,
             sparked new connections, came up with more ideas, and it reminded us that the <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
> creating change is as much about relationships as it is about ideas. </a>
              
              
        </p>

        <p>
            We left feeling energised – not just by the work, the conversations, but by each other.
        </p>

        <p>
            Last but not least, the workshop was designed with care: minimising waste wherever we could.
             Walking the talk, and embodying the change we want to see becoming the norm. That is: We 
             limited the use of stickies by using whiteboard sheets for brainstorming and ideation
              (not easy but we're learning! and kudos to the group who DIDN'T use any post-it at all!);
               The final synthesised boards were captured directly onto Miro. To that extent, we also 
               limited the digital assets to a mere 7 slides on Miro! <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
> Imperial Business Design Studio </a>
               made sure all coffee/teas/water were served in crockery; and they gifted a  <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
> Chilly's </a> reusable 
               water bottle to all participants. And finally, we used seedpaper for participants badges, so they can go
                home and rewild their local area by planting them afterwards 🌸 🙏 🫶
        </p>

        <p>
            The SD4P Collective is just getting started, and it’s promising! We are looking forward to keeping the conversation going.
        </p>

        <p>
            The next meet-up will be online on Friday 2nd May 2025 at 3pm UK. To join, please DM 
             <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
> Ned. </a>
             </p>

        <p>
            Thank you to  
            <a
  href="https://www.designdeclares.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-red-400 transition underline"
> Imperial College Business Design Studio </a> for supporting this initiative.
        </p>
       

         

      
            </div>

      <img
        src={img5}
        alt="SD4P Collective group at Imperial College"
        className="w-[60%] object-cover ml-5 mb-6"
      />

      
      <hr className="border-t border-white w-[70%] ml-5 mb-10" />

                <div className="ml-5 mb-6">
        <button
          onClick={handleShareClick}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            copied ? "bg-red-600 text-white" : "bg-white text-black hover:bg-neutral-200"
          }`}
        >
          Share Article
        </button>

        {copied && (
          <div className="mt-2 text-sm text-green-400 font-medium">
            ✓ Link copied!
          </div>
        )}
      </div>
      <Footer />

      <div className="fixed bottom-6 right-6 z-50">
        <ProgressChecker />
      </div>
      </div>
    </>
  );
}
