export default function CarpenterService() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero */}
      <section
        data-aos="fade-down"
        className="h-[420px] flex items-center justify-center 
        bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200')] 
        bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-[#3a2c20]/70"></div>
        <h1 className="relative text-5xl font-bold text-white">
          Carpenter Services
        </h1>
      </section>

      {/* Info */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Crafted With Precision</h2>
          <p className="text-gray-700 mb-6">
            Custom furniture, doors, cabinets, polishing and full woodwork
            solutions delivered by expert craftsmen.
          </p>
        </div>

        <img
          data-aos="zoom-in"
          className="rounded-3xl shadow-xl"
          src="https://images.unsplash.com/photo-1611021061421-93741ec41ce1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
    </div>
  );
}
