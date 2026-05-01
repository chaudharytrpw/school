"use client"
import React, { useState } from "react";

const faqs = [
  {
    q: "स्कूल में एडमिशन कैसे लें?",
    a: "आप स्कूल में आकर फॉर्म भर सकते हैं या दिए गए मोबाइल नंबर पर संपर्क कर सकते हैं।",
  },
  {
    q: "स्कूल का सत्र कब शुरू होता है?",
    a: "स्कूल का सत्र 2026-27 अप्रैल महीने से शुरू होता है।",
  },
  {
    q: "क्या स्कूल में कंप्यूटर शिक्षा उपलब्ध है?",
    a: "हाँ, छात्रों के लिए कंप्यूटर शिक्षा की सुविधा उपलब्ध है।",
  },
  {
    q: "स्कूल का समय क्या है?",
    a: "स्कूल का समय सुबह 8:00 बजे से दोपहर 2:00 बजे तक है।",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  text-white py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#b8953a] mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 sm:px-5 py-4 text-left bg-[#162d4a]/60 hover:bg-[#162d4a] transition"
              >
                <span className="text-[13px] sm:text-[14px] font-medium">
                  {item.q}
                </span>

                <span className="text-[#b8953a] text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-4 sm:px-5 text-[12px] sm:text-[13px] text-[#9bb7cf] bg-[#0e2035] transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 py-4"
                    : "max-h-0 overflow-hidden py-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}