import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0e2035] text-[#d6e6f5] border-t border-[#b8953a]/30">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* School Name */}
        <div className="text-center mb-6">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#b8953a] leading-snug">
            श्रीमती दलवन्ती देवी उ०मा०वि०
          </h2>
          <p className="text-[11px] sm:text-[12px] tracking-widest text-[#8aacce]">
            SMT. DALWANTI DEVI U. MA. VIDHYALAYA
          </p>
        </div>

        {/* Address */}
        <div className="text-center text-[11px] sm:text-[12px] md:text-[13px] leading-6 text-[#9bb7cf] space-y-1 mb-6 px-2 sm:px-10">
          <p>
            USRI PANDEY, NEDAULI KARAUNDL, LALGANJ TEHSIL DISTRICT MIRZAPUR
          </p>
          <p>स्थापित वर्ष 2015</p>
          <p>LALGANJ MIRZAPUR - 231211</p>
        </div>

        {/* Mobile */}
        <div className="text-center text-[13px] sm:text-[14px] text-[#b8953a] font-medium mb-6">
          Mobile: 7428044077
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-4 text-center px-2">

          <p className="text-[11px] sm:text-[12px] text-[#8aacce] uppercase tracking-wider">
            प्रवेश के लिए प्रार्थना-पत्र / Application for Admission
          </p>

          <p className="text-[12px] sm:text-[13px] text-[#b8953a] mt-1 font-semibold">
            SESSION 2026-27
          </p>

        </div>

      </div>
    </footer>
  );
}