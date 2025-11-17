export default function Services() {
  const services = [
    {
      title: 'Individual Therapy',
      desc: 'One‑to‑one sessions to explore challenges like anxiety, stress, low mood and life transitions.',
    },
    {
      title: 'Couples Therapy',
      desc: 'Support for communication, connection and conflict resolution for partners at any stage.',
    },
    {
      title: 'Family Therapy',
      desc: 'Facilitated conversations to strengthen relationships and improve understanding at home.',
    },
    {
      title: 'Child & Adolescent',
      desc: 'Age‑appropriate support for young people coping with school pressure, emotions and change.',
    },
    {
      title: 'Trauma Support',
      desc: 'Sensitive, trauma‑informed care to process difficult experiences at your pace.',
    },
    {
      title: 'Anxiety & Depression',
      desc: 'Evidence‑based approaches like CBT to build coping strategies and resilience.',
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800">Services</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">We tailor therapy to your needs using approaches such as CBT, person‑centred, integrative and solution‑focused therapy.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-5 border border-slate-100 rounded-xl hover:shadow-sm transition">
              <h3 className="font-semibold text-slate-800">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
