export default function ElectronicsService() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero */}
      <section
        data-aos="fade-down"
        className="h-[420px] flex items-center justify-center 
        bg-[url('https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=1200')] 
        bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="relative text-5xl font-bold">Electronics Services</h1>
      </section>

      <div className="h-24"></div>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8 ">
        {["AC Repair", "Wiring", "Fan Repair"].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="bg-gradient-to-br to-gray-800 from-teal-800 p-8 rounded-xl border border-gray-800 
            hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item}</h3>
            <p className="text-gray-400">
              Certified technicians delivering safe and fast electronic
              solutions.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
