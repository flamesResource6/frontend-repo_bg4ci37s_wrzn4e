import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form)
    payload.consent = !!payload.consent
    payload.source = 'contact'

    try {
      const res = await fetch(`${BACKEND}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus({ ok: true, msg: 'Thank you. We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Get in touch</h2>
          <p className="text-slate-600 mt-2">Have a question or want to book? Send us a message and we’ll respond within one business day.</p>
          <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-600"><span className="font-medium">Email:</span> hello@solacecounselling.com</p>
            <p className="text-sm text-slate-600 mt-2"><span className="font-medium">Phone:</span> +44 0200 000 000</p>
            <p className="text-sm text-slate-600 mt-2"><span className="font-medium">Location:</span> In‑person in London & online UK‑wide</p>
          </div>
        </div>
        <form onSubmit={submit} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input name="name" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" name="email" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Phone (optional)</label>
              <input name="phone" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Subject</label>
              <input name="subject" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="sm:col-span-2 flex items-center gap-2">
              <input id="consent" name="consent" type="checkbox" defaultChecked />
              <label htmlFor="consent" className="text-sm text-slate-600">I consent to be contacted about my enquiry</label>
            </div>
            <div className="sm:col-span-2">
              <button disabled={sending} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-4 py-2 rounded-lg">
                {sending ? 'Sending...' : 'Send message'}
              </button>
              {status && (
                <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
