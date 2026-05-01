import React from "react";

const teachers = [
  { name: "श्री रमेश कुमार", subject: "गणित (Mathematics)" },
  { name: "श्रीमती सीमा यादव", subject: "हिंदी (Hindi)" },
  { name: "श्री अजय सिंह", subject: "विज्ञान (Science)" },
  { name: "श्रीमती प्रीति शर्मा", subject: "अंग्रेजी (English)" },
  { name: "श्री राजेश पटेल", subject: "सामाजिक विज्ञान (Social Studies)" },
  { name: "श्रीमती नीलम वर्मा", subject: "कंप्यूटर (Computer)" },
];

export default function ClassesTeachers() {
  return (
    <section className="w-full  text-white py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#b8953a] mb-10">
          कक्षा 1 से 12 तक शिक्षा एवं शिक्षक
        </h2>

        {/* Classes Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">

          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-[#162d4a]/60 border border-white/10 rounded-xl py-3 text-center hover:bg-[#162d4a] transition"
            >
              <p className="text-[13px] sm:text-[14px] font-medium text-[#f0f6ff]">
                कक्षा {i + 1}
              </p>
            </div>
          ))}

        </div>

        {/* Teachers Section */}
        <h3 className="text-center text-[18px] sm:text-[20px] font-semibold text-[#8aacce] mb-6">
          हमारे शिक्षक / Our Teachers
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {teachers.map((t, i) => (
            <div
              key={i}
              className="bg-[#162d4a]/60 border border-white/10 rounded-2xl p-5 hover:scale-[1.02] transition"
            >

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-[#0e2035] border-2 border-[#b8953a] flex items-center justify-center mb-3">
                <span className="text-[#b8953a] font-bold">
                  {t.name.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <h4 className="text-[14px] sm:text-[15px] font-bold text-[#f0f6ff] mb-1">
                {t.name}
              </h4>

              {/* Subject */}
              <p className="text-[12px] sm:text-[13px] text-[#8aacce]">
                अध्यापन: {t.subject}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}