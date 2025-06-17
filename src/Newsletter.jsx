import React, { useState } from "react";
import img1 from "./assets/newsletter.png";

export default function DonateD() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (API call, validation, etc.)
  };

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row pt-24">
      
      
      <div className="w-full md:w-1/3 flex flex-col items-start p-6">
        <h2 className="text-white text-xl font-bold mb-2">The Design Declares Newsletter and Toolkit</h2>
      </div>
          

     
      <div className="w-full md:w-2/3 flex flex-col items-start px-6 ">
        <div className="text-gray-300  font-normal mb-12 md:text-left">
        
        <img
          src={img1}
          alt="Design Declares Newsletter"
          className=" rounded-xl shadow-lg mb-8"
        />

       
     
          <p className="text-2xl mb-8">
            Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
          </p>
          <p className="text-lg mb-8">
            Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
          </p>
        </div>

       
      <form
  onSubmit={handleSubmit}
  className="text-white p-4 w-full flex flex-col gap-6 shadow-xl"
>
  <label className="block w-full">
    <span className="text-lg font-semibold">
      Email:<span className="text-red-500">*</span>
    </span>
    <input
      type="email"
      required
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="mt-2 w-full p-4 bg-transparent border text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
    />
  </label>

  <label className="flex items-center gap-3">
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
      className="w-6 h-6 accent-orange-500 border-gray-400 rounded"
    />
    <span className="text-base">
      I would like to be added to the Design Declares! newsletter and receive further updates.
    </span>
  </label>

  <a
    href="/privacy-policy"
    className="underline text-gray-300 text-sm hover:text-orange-400"
    target="_blank"
    rel="noopener noreferrer"
  >
    View our Privacy Policy
  </a>

  <div className="flex justify-start">
    <button
      type="submit"
      className="bg-white text-black font-semibold px-4 py-2 rounded-full text-base hover:bg-orange-500 hover:text-white transition"
    >
      Subscribe
    </button>
  </div>
</form>

      </div>
    </div>
  );
}
