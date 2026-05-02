import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      

      {/* 🧾 CENTER WRAPPER */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4">

        <div className="w-full max-w-7xl rounded-2xl overflow-hidden">

          <div className="bg-[#162d4a]/30 ">

            {/* Gold top line */}
            <div className="h-1 bg-[#b8953a]" />

            <div className="px-7 pt-8 pb-7">

              {/* Header */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 flex-shrink-0 rounded-full bg-[#0e2035] border-[2.5px] border-[#b8953a] flex items-center justify-center">
                  <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke="#b8953a" strokeWidth="1" />
                    <path
                      d="M22 7L24.8 16.5H34.8L26.8 22.2L29.6 31.7L22 26L14.4 31.7L17.2 22.2L9.2 16.5H19.2Z"
                      fill="#b8953a"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="3.5"
                      fill="#0e2035"
                      stroke="#b8953a"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="font-serif text-[22px] font-bold text-[#f0f6ff]">
                    श्रीमती दलवन्ती देवी उ०मा०वि०
                  </h1>
                  <p className="text-[15px] text-[#8aacce]">
                    Smt. Dalwanti Devi U. Ma. Vidhyalaya
                  </p>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-3 border border-white rounded-xl overflow-hidden mb-5">
                {[
                  { label: "पता", value: "Lalganj Tehsil, Mirzapur" },
                  { label: "स्थापना", value: "2000" },
                  { label: "Mobile", value: "7428044077" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`px-2.5 py-3 text-center ${
                      i < 2 ? "border-r border-white" : ""
                    }`}
                  >
                    <p className="text-[20px] text-[#1089df] uppercase">
                      {item.label}
                    </p>
                    <p className="text-[12px] text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}