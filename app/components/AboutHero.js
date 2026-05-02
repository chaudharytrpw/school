export default function AboutHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
      
      {/* Background Image */}
      <img
        src="/about-title-bg.jpg" // 👈 यहाँ अपना image path डालो
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-20">
        <div className="text-white max-w-xl">
          
          <p className="text-blue-700 font-bold text-sm md:text-base mb-2">
            Know Smt. Dalwanti Devi U. Ma. Vidhyalaya Better
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            About Us
          </h1>

        </div>
      </div>
    </section>
  );
}