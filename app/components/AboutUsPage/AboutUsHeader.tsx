export default function AboutUsHeader() {
  return (
    <section className="relative overflow-hidden pt-30  bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold">
              About eleminsis
            </span>
          </div>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_20px_rgba(0,204,170,0.4)] transition-all duration-1000 delay-300opacity-100 scale-x-100"
            }`}
          />

          <p
            className={`max-w-3xl mx-auto mt-6 text-gray-700 text-base leading-relaxed transition-all duration-700 delay-400 opacity-100 translate-y-0"
            }`}
          >
            ELEMENSIS distributes high-end, naturally derived goods that have
            been painstakingly cultivated and harvested to adhere to rigid
            health and quality criteria. Along with our premium brands, we
            deliver the unmatched advantages of healthy, high-quality, and
            premium products to your homes & businesses
          </p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
