export default function PainterService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-50">
      {/* Hero */}
      <section
        data-aos="fade-down"
        className="relative h-[420px] flex items-center justify-center 
        bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-indigo-600/70"></div>
        <h1 className="relative text-white text-5xl font-bold">
          Painter Services
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          data-aos="zoom-in"
          className="rounded-3xl shadow-xl"
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=900"
          alt=""
        />

        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Bring Colors to Life</h2>
          <p className="text-gray-700 mb-6">
            Professional wall painting, texture finishes, waterproof coating and
            full home renovation solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
