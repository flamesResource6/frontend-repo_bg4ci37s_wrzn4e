export default function Hero({ onBook }) {
  return (
    <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800">
            Find calm, clarity and care with Solace Counselling
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Compassionate, confidential therapy for individuals, couples and families. We help you navigate anxiety, stress, trauma and life transitions with evidence‑based support.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={onBook} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-sm">Book a session</button>
            <a href="#services" className="px-5 py-3 rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50">Explore services</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-slate-500">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span><span>Private & secure</span></div>
            <div>HCPC registered therapists</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-blue-200 to-indigo-200 shadow-inner" />
          <div className="absolute -bottom-4 -left-4 bg-white border border-blue-100 rounded-xl p-4 shadow">
            <p className="text-sm font-medium text-slate-700">“I feel heard and supported.”</p>
            <p className="text-xs text-slate-500 mt-1">— Client, 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
