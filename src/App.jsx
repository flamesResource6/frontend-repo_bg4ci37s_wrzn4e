import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar onBook={() => setBookingOpen(true)} />
      <main>
        <Hero onBook={() => setBookingOpen(true)} />
        <section id="about" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold">About Solace Counselling</h2>
              <p className="mt-3 text-slate-600">We offer a warm, non‑judgemental space where you can talk openly and be heard. Our qualified therapists draw on person‑centred, CBT and integrative approaches to support your goals.</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-slate-700 text-sm">
                <li>• Confidential & ethical practice</li>
                <li>• In‑person and online sessions</li>
                <li>• Flexible daytime & evening availability</li>
                <li>• Short‑term and open‑ended therapy</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-semibold">Areas we can help with</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
                {['Anxiety','Depression','Stress','Relationships','Work & Burnout','Trauma','Grief','Self‑esteem'].map(i => (
                  <div key={i} className="px-3 py-2 rounded-lg bg-white border border-slate-100">{i}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Services />
        <section id="therapists" className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold">Meet our therapists</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[1,2,3].map((n) => (
                <div key={n} className="p-6 bg-white rounded-xl border border-slate-100">
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-indigo-100 to-blue-100" />
                  <h3 className="mt-4 font-semibold">Therapist {n}</h3>
                  <p className="text-sm text-slate-600">HCPC registered, integrative approach</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <Contact />
      </main>
      <Footer onBook={() => setBookingOpen(true)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}

export default App
