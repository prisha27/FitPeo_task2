import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && checked) {
      setSubscribed(true);
      setEmail("");
      setChecked(false);
    }
  };

  return (
    <footer className="bg-[#EA5C3C] text-black px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

       
        <div>
          <h2 className="text-4xl font-heading leading-none">
            DESIGN<br />DECLARES
          </h2>
        </div>

       
        <div className="space-y-2 text-base">
          <p>Contact</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Privacy Policy</p>
        </div>

       
        <div>
          <p className="font-bold mb-2">Sign up to the D! Newsletter</p>

          {!subscribed ? (
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email:*"
                className="w-full border border-black px-3 py-2 bg-[#EA5C3C] placeholder-black"
              />

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 border border-black"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <label className="text-sm">
                  I would like to be added to the Design Declares! newsletter and receive further updates.
                </label>
              </div>

              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-full font-semibold"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-sm font-medium">Thank you for subscribing.</p>
          )}

      
          <p
            onClick={() => navigate("/privacy-policy")}
            className="mt-3 text-sm underline cursor-pointer hover:text-white transition-colors duration-200"
          >
            View our Privacy Policy
          </p>
        </div>
      </div>


      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3">
        <div />
        <div className="col-span-2 md:col-span-2 text-sm text-black space-y-2">
          <p>
            This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand.{" "}
            <a href="#" className="underline">Learn more about our carbon footprint.</a>
          </p>
          <p>
            Empowered by <a href="#" className="underline">Driftime®</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
