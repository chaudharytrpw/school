import React from "react";
import Admissionhero from "../components/Admissionhero";

export default function AdmissionForm() {
  return (
    <> 
    <Admissionhero/>
    <section className="w-full min-h-screen bg-[#d4f3d2] text-[#0e2035] py-14 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold text-[#0e2035]">
            प्रवेश प्रार्थना-पत्र / Admission Form
          </h1>

          <p className="text-[12px] sm:text-[13px] text-[#2f4f3f] mt-2">
            SESSION 2026-27
          </p>

          <p className="text-[12px] text-[#355c48] mt-1">
            LALGANJ MIRZAPUR - 231211 | Mobile: 7428044077
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/70 backdrop-blur-md border border-[#b9e6b6] rounded-2xl p-5 sm:p-8 shadow-md">

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <Input label="Date of Application / दिनांक" />
            <Input label="Student Name / विद्यार्थी का नाम" />

            <Input label="Date of Birth / जन्म तिथि" />
            <Input label="Gender / लिंग" />

            <Input label="Social Category / श्रेणी" />
            <Input label="Religion / धर्म" />

            <Input label="Aadhar No. / आधार नंबर" />
            <Input label="Mother Name / माता का नाम" />

            <Input label="Father Name & Occupation / पिता का नाम" />
            <Input label="Guardian Name / अभिभावक का नाम" />

            <Input label="Mother Tongue / मातृभाषा" />
            <Input label="Mobile No. / मोबाइल नंबर" />

            <Input label="Last School / पिछली स्कूल" />
            <Input label="Distance / दूरी" />

          </form>

          {/* Address */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">

            <Textarea label="Residential Address / निवास स्थान" />
            <Textarea label="Permanent Address / स्थायी पता" />

          </div>

          {/* Declaration */}
          <div className="mt-6 text-[13px] text-[#2f4f3f] leading-6">
            <p>
              मैं विद्यालय के सभी नियमों का पालन करने के लिए सहमत हूँ।
              <br />
              I agree to follow all school rules and regulations.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">

            <Input label="Student Signature" />
            <Input label="Parent Signature" />
            <Input label="Date" />

          </div>

          {/* Submit */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-[#0e2035] hover:bg-[#142f4f] text-white font-semibold px-8 py-3 rounded-lg transition w-full sm:w-auto"
            >
              Submit Form
            </button>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

/* INPUT */
function Input({ label }) {
  return (
    <div>
      <label className="text-[12px] text-[#355c48] block mb-1">
        {label}
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 rounded-lg bg-white border border-[#b9e6b6] text-[#0e2035] outline-none focus:border-[#0e2035]"
      />
    </div>
  );
}

/* TEXTAREA */
function Textarea({ label }) {
  return (
    <div>
      <label className="text-[12px] text-[#355c48] block mb-1">
        {label}
      </label>
      <textarea
        rows="3"
        className="w-full px-3 py-2 rounded-lg bg-white border border-[#b9e6b6] text-[#0e2035] outline-none focus:border-[#0e2035]"
      />
    </div>
  );
}