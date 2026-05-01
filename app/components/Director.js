import React from "react";

export default function Director() {
  return (
    <section className="w-full  text-white py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#b8953a] mb-10">
          विद्यालय निदेशक / Director
        </h2>

        {/* Card */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#162d4a]/60 border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8">

          {/* Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
            <img
              src="/director.jpg"   // 👉 apni image yahan lagao
              alt="Director"
              className="w-full h-full object-cover rounded-full border-4 border-[#b8953a]"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">

            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#f0f6ff] mb-2">
              श्री रमेश कुमार सिंह
            </h3>

            <p className="text-[12px] sm:text-[13px] text-[#8aacce] mb-4">
              School Director / संस्थापक एवं निदेशक
            </p>

            <p className="text-[12px] sm:text-[13px] leading-6 text-[#9bb7cf]">
              शिक्षा केवल ज्ञान नहीं है, बल्कि यह जीवन को सही दिशा देने का माध्यम है।
              हमारा उद्देश्य छात्रों को गुणवत्तापूर्ण शिक्षा और बेहतर भविष्य प्रदान करना है।
            </p>

            {/* Contact */}
            <div className="mt-4 text-[13px] text-[#b8953a] font-medium">
              Mobile: 7428044077
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}