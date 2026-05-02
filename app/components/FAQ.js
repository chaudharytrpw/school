"use client"
import React, { useState } from "react";

const faqs = [
  {
    q: "स्कूल में एडमिशन कैसे लें?",
    a: "एडमिशन प्रक्रिया बहुत आसान है। आप सीधे स्कूल आकर फॉर्म भर सकते हैं या दिए गए मोबाइल नंबर पर कॉल करके पूरी जानकारी प्राप्त कर सकते हैं। हमारी टीम आपकी हर कदम पर मदद करती है।",
  },
  {
    q: "स्कूल का नया सत्र कब शुरू होता है?",
    a: "हमारा नया शैक्षणिक सत्र (2026-27) अप्रैल महीने से शुरू होता है। सीमित सीटों के कारण समय रहते एडमिशन सुनिश्चित करें।",
  },
  {
    q: "क्या स्कूल में कंप्यूटर शिक्षा और स्मार्ट क्लास की सुविधा है?",
    a: "हाँ, हमारे स्कूल में आधुनिक कंप्यूटर लैब और स्मार्ट क्लास की सुविधा उपलब्ध है, जिससे बच्चों को डिजिटल लर्निंग का बेहतर अनुभव मिलता है।",
  },
  {
    q: "स्कूल का समय क्या है?",
    a: "स्कूल का समय सुबह 8:00 बजे से दोपहर 2:00 बजे तक है, जिसमें पढ़ाई के साथ-साथ खेल और अन्य गतिविधियों का भी ध्यान रखा जाता है।",
  },
  {
    q: "क्या स्कूल में अनुभवी शिक्षक हैं?",
    a: "हाँ, हमारे स्कूल में अनुभवी और समर्पित शिक्षक हैं, जो हर बच्चे के सर्वांगीण विकास पर विशेष ध्यान देते हैं।",
  },
  {
    q: "क्या स्कूल में खेल और अन्य गतिविधियाँ होती हैं?",
    a: "जी हाँ, पढ़ाई के साथ-साथ खेल, सांस्कृतिक कार्यक्रम और अन्य गतिविधियों का आयोजन भी किया जाता है ताकि बच्चों का सम्पूर्ण विकास हो सके।",
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
                className="w-full flex justify-between cursor-pointer items-center px-4 sm:px-5 py-4 text-left bg-[#162d4a]/60 hover:bg-[#162d4a] transition"
              >
                <span className="text-[13px] sm:text-[14px] font-medium">
                  {item.q}
                </span>

                <span className="text-[#b8953a]  text-xl">
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