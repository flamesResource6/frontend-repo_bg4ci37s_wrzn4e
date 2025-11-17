export default function Testimonials() {
  const quotes = [
    {
      q: 'Therapy gave me space to breathe and tools to cope. I feel like myself again.',
      a: '— A., London'
    },
    {
      q: 'We communicate better and understand each other more. It changed our relationship.',
      a: '— J & K'
    },
    {
      q: 'Our teenager is calmer and more confident. The support was incredible.',
      a: '— Parent'
    }
  ]
  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800">Client stories</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <figure key={i} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
              <blockquote className="text-slate-700">“{t.q}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
