export default function WhyUs() {
  const features = [
    {
      title: "Verified Listings",
      desc: "100% authentic and verified properties for safe investment.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Best Prices",
      desc: "Market competitive pricing with no hidden charges.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Trusted Agents",
      desc: "Professional and experienced agents you can rely on.",
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-4xl font-bold mb-4 text-white">
            Why Choose HomeFinder?
          </h3>
          <p className="text-orange-300 text-lg">
            We deliver trust, transparency, and value in every property deal.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group bg-gradient-to-br to-gray-800 from-teal-800 rounded-2xl p-8 shadow hover:shadow-xl 
              transition duration-300 hover:-translate-y-2"
            >
              {/* Icon substitute: colored circle */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full 
                bg-gradient-to-r ${item.color} text-white mb-6 text-lg font-bold`}
              >
                {item.title[0]}
              </div>

              <h4 className="text-xl text-orange-300 font-semibold mb-3">
                {item.title}
              </h4>

              <p className="text-white leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
