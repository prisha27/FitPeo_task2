import React, { useState } from "react";

const options = [
  "As a business",
  "As an individual",
  "As a public institution",
  "As a team or department",
];

export default function Emergency() {
  const [selected, setSelected] = useState();
  const [consent, setConsent] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
    website: "",
    country: "",
    discipline: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("We were unable to verify your submission. Please try again later.");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row pt-24">
      <div className="w-full md:w-1/3 flex flex-col items-start p-6 sticky top-0 self-start h-fit z-10 bg-black">
        <h2 className="text-white text-xl font-bold mb-2">Declare Emergency Now</h2>
      </div>

      <div className="w-full md:w-2/3 flex flex-col items-start px-6">
        <div className="text-gray-300 text-2xl md:text-2xl font-normal mb-12 md:text-left">
          Design Declares is open to individuals and institutions working in industrial,
          digital, graphic, communication and service design. To declare here, you must
          be a company with an office in the UK employing at least one full-time designer...
        </div>

        <div className="min-h-screen bg-black flex items-center justify-center py-12 w-full">
          <form onSubmit={handleSubmit} className="w-full max-w-2xl border border-white p-8 -ml-6">
            <h1 className="text-white text-4xl md:text-5xl mb-8 leading-tight font-sans">
              I am Declaring Emergency
            </h1>

       
            <div className="flex flex-wrap gap-6 mb-6">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`flex items-center gap-2 px-3 py-2 border border-white transition ${
                    selected === opt ? "bg-white bg-opacity-10" : ""
                  }`}
                  onClick={() => setSelected(opt)}
                >
                  <span
                    className={`w-8 h-8 border border-white flex items-center justify-center text-2xl ${
                      selected === opt ? "bg-white bg-opacity-10" : ""
                    }`}
                  >
                    {selected === opt && (
                      <span className="text-orange-500 text-2xl font-bold">×</span>
                    )}
                  </span>
                  <span className="text-white text-base">{opt}</span>
                </button>
              ))}
            </div>

            <div className=" space-y-0 border border-white">
             
              <div className="flex border-b border-white">
                <label className="text-gray-200 px-3 py-2 w-1/3">Individual Name*</label>
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="bg-black text-gray-200 px-3 py-2 w-2/3 outline-none"
                  required
                />
              </div>

           
              <div className="flex border-b border-white">
                <label className="text-gray-200 px-3 py-2 w-1/3">Website*</label>
                <input
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  className="bg-black text-gray-200 px-3 py-2 w-2/3 outline-none"
                  required
                />
              </div>

           
              <div className="flex border-b border-white">
                <label className="text-gray-200 px-3 py-2 w-1/3">Country*</label>
                <select
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  className="bg-black text-gray-200 px-3 py-2 w-2/3  hover:text-red-600 outline-none"
                  required
                >
                  <option value=""></option>
                  <option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="India">India</option>
<option value="Australia">Australia</option>
<option value="Canada">Canada</option>
<option value="Germany">Germany</option>
<option value="France">France</option>
<option value="Italy">Italy</option>
<option value="Netherlands">Netherlands</option>
<option value="Spain">Spain</option>
<option value="Sweden">Sweden</option>
<option value="Norway">Norway</option>
<option value="Denmark">Denmark</option>
<option value="Switzerland">Switzerland</option>
<option value="Brazil">Brazil</option>
<option value="Mexico">Mexico</option>
<option value="Japan">Japan</option>
<option value="South Korea">South Korea</option>
<option value="South Africa">South Africa</option>
<option value="Other">Other</option>

                </select>
              </div>

              <div className="flex border-b border-white">
                <label className="text-gray-200 px-3 py-2 w-1/3">Discipline*</label>
                <select
                  name="discipline"
                  value={values.discipline}
                  onChange={handleChange}
                  className="bg-black text-gray-200 px-3 py-2 w-2/3  hover:text-red-500 outline-none"
                  required
                >
                  <option value=""></option>
                  <option value="Communication Design">Communication Design</option>
                  <option value="Digital Design">Digital Design</option>
                  <option value="Service Design">Service Design</option>
                  <option value="Product Design">Product Design</option>
                </select>
              </div>

   
              <div className="flex border-b border-white">
                <label className="text-gray-200 px-3 py-2 w-1/3">Email*</label>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className="bg-black text-gray-200 px-3 py-2 w-2/3 outline-none"
                  required
                />
              </div>

           
              <div>
                <textarea
                  name="message"
                  placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                  value={values.message}
                  onChange={handleChange}
                  className="w-full bg-black text-white border-none px-3 py-2 resize-none"
                  rows={4}
                />
              </div>
            </div>

          
            <div className="flex flex-col gap-4 mt-6">
              <label className="flex items-start gap-3">
                <span
                  className="w-8 h-8 border border-white flex items-center justify-center text-2xl cursor-pointer"
                  onClick={() => setConsent((c) => !c)}
                >
                  {consent && <span className="text-orange-500 text-2xl font-bold">×</span>}
                </span>
                <span className="text-white text-sm leading-tight">
                  I consent for my data to be used for the purpose of the Declaration, and for my
                  name and reason for joining to be used in the promotion of the Declaration.
                </span>
              </label>

              <label className="flex items-start gap-3">
                <span
                  className="w-8 h-8 border border-white flex items-center justify-center text-2xl cursor-pointer"
                  onClick={() => setNewsletter((n) => !n)}
                >
                  {newsletter && <span className="text-orange-500 text-2xl font-bold">×</span>}
                </span>
                <span className="text-white text-sm leading-tight">
                  I would like to be added to the Design Declares! newsletter.
                </span>
              </label>
            </div>

            <div className="mt-4 mb-6">
              <a href="#" className="text-xs underline text-white">
                View our Privacy Policy
              </a>
            </div>


            <button
              type="submit"
              className="w-fit px-8 py-3 bg-white text-black rounded-full font-semibold text-lg shadow hover:bg-orange-500 hover:text-white transition"
            >
              Declare Emergency Now
            </button>


            {error && <div className="mt-6 text-white text-base">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
