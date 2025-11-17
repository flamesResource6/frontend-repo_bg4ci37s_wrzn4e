export default function Footer({ onBook }) {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="text-lg font-bold tracking-tight text-slate-800">Solace <span className="text-blue-600">Counselling</span></div>
          <p className="text-slate-600 mt-3 text-sm max-w-sm">Compassionate, confidential therapy in London and online across the UK.</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Contact</p>
          <p className="mt-2">hello@solacecounselling.com</p>
          <p className="mt-1">+44 0200 000 000</p>
          <p className="mt-1">Mon–Fri, 9am–6pm</p>
        </div>
        <div className="flex md:justify-end">
          <button onClick={onBook} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">Book a session</button>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 bg-slate-50">© {new Date().getFullYear()} Solace Counselling. All rights reserved.</div>
    </footer>
  )
}
