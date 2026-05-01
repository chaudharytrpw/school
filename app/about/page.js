import React from "react";

export default function Page() {
  return (
    <section id="about" className="w-full  text-white py-14 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-center text-[22px] sm:text-[26px] md:text-[32px] font-bold text-[#b8953a] mb-10">
          हमारे विद्यालय के बारे में / About School
        </h1>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div className="space-y-4">

            <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#0e65e8]">
              श्रीमती दलवन्ती देवी उ०मा०वि०
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#01070d] leading-7">
              हमारा विद्यालय वर्ष 2015 में स्थापित हुआ। इसका उद्देश्य ग्रामीण क्षेत्र के बच्चों को
              गुणवत्तापूर्ण शिक्षा प्रदान करना है। यहाँ कक्षा 1 से 12 तक की शिक्षा दी जाती है।
              विद्यालय में अनुभवी शिक्षक बच्चों के सर्वांगीण विकास पर ध्यान देते हैं।
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#010509] leading-7">
              हम शिक्षा के साथ-साथ अनुशासन, संस्कार और नैतिक मूल्यों को भी बढ़ावा देते हैं।
              हमारा लक्ष्य छात्रों को उज्ज्वल भविष्य के लिए तैयार करना है।
            </p>

          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/school.jpg"   // 👉 apni image lagao
              alt="School"
              className="w-full max-w-md rounded-2xl border border-[#b8953a]/40 shadow-lg object-cover"
            />
          </div>

        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {[
            {
              title: "अनुभवी शिक्षक",
              desc: "Qualified और experienced teachers",
            },
            {
              title: "कक्षा 1 से 12",
              desc: "Complete schooling facility available",
            },
            {
              title: "सुरक्षित वातावरण",
              desc: "Safe and disciplined learning environment",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#162d4a]/60 border border-white/10 rounded-xl p-5 hover:scale-[1.03] transition"
            >
              <h3 className="text-[15px] font-semibold text-[#e5a912] mb-2">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#f1f3f5]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}