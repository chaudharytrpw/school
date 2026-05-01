import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full text-white py-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-center text-[22px] sm:text-[26px] md:text-[32px] font-bold text-[#b8953a] mb-10">
          संपर्क करें / Contact Us
        </h1>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Address */}
            <div className="bg-[#162d4a]/60 border border-white/10 rounded-xl p-5">
              <h2 className="text-[16px] font-semibold text-[#b8953a] mb-2">
                विद्यालय का पता
              </h2>
              <p className="text-[13px] text-[#f5f7f9] leading-6">
                USRI PANDEY, NEDAULI KARAUNDL,<br />
                LALGANJ TEHSIL, DISTRICT MIRZAPUR<br />
                PIN: 231211
              </p>
            </div>

            {/* Mobile */}
            <div className="bg-[#162d4a]/60 border border-white/10 rounded-xl p-5">
              <h2 className="text-[16px] font-semibold text-[#b8953a] mb-2">
                मोबाइल नंबर
              </h2>
              <p className="text-[14px] text-[#f4f6f8]">
                📞 7428044077
              </p>
            </div>

            {/* Email */}
            <div className="bg-[#162d4a]/60 border border-white/10 rounded-xl p-5">
              <h2 className="text-[16px] font-semibold text-[#b8953a] mb-2">
                ईमेल
              </h2>
              <p className="text-[14px] text-[#f0f3f6]">
                📧 school@example.com
              </p>
            </div>

            {/* 🗺 MAP */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">

              {/* Map Header */}
              <div className="bg-[#0e2035] px-4 py-2 text-sm text-[#b8953a] font-semibold">
                📍 School Location - Lalganj Mirzapur
              </div>

              <iframe
                src="https://www.google.com/maps?q=Lalganj+Tehsil+Mirzapur+Uttar+Pradesh+231211&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                className="w-full"
              ></iframe>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">

              <a
                href="https://wa.me/917428044077"
                target="_blank"
                className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
              >
                WhatsApp Now
              </a>

              <a
                href="https://www.google.com/maps/dir//Lalganj+Mirzapur+Uttar+Pradesh"
                target="_blank"
                className="flex-1 text-center bg-[#b8953a] hover:bg-[#a8842f] text-black font-semibold py-3 rounded-lg transition"
              >
                Get Directions
              </a>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-[#162d4a]/60 border border-white/10 rounded-2xl p-6">

            <h2 className="text-[18px] font-semibold text-[#f0f6ff] mb-5">
              हमें संदेश भेजें
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="आपका नाम"
                className="w-full px-4 py-3 rounded-lg bg-[#0e2035] border border-white/10 text-white outline-none focus:border-[#b8953a]"
              />

              <input
                type="email"
                placeholder="आपका ईमेल"
                className="w-full px-4 py-3 rounded-lg bg-[#0e2035] border border-white/10 text-white outline-none focus:border-[#b8953a]"
              />

              <input
                type="text"
                placeholder="मोबाइल नंबर"
                className="w-full px-4 py-3 rounded-lg bg-[#0e2035] border border-white/10 text-white outline-none focus:border-[#b8953a]"
              />

              <textarea
                rows="4"
                placeholder="आपका संदेश"
                className="w-full px-4 py-3 rounded-lg bg-[#0e2035] border border-white/10 text-white outline-none focus:border-[#b8953a]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#b8953a] hover:bg-[#a8842f] text-black font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}