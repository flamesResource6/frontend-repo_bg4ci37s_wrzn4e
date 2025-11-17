import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BookingModal({ open, onClose }) {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  if (!open) return null

  async function submit(e) {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form)
    payload.consent = !!payload.consent

    try {
      const res = await fetch(`${BACKEND}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus({ ok: true, msg: 'Request received. We will confirm by email.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: 'Could not submit. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-800">Request an appointment</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>
        <form onSubmit={submit} className="mt-4 grid gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input name="name" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" name="email" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-slate-600">Phone (optional)</label>
              <input name="phone" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Service</label>
              <select name="service" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200">
                <option>Individual Therapy</option>
                <option>Couples Therapy</option>
                <option>Family Therapy</option>
                <option>Child & Adolescent</option>
                <option>Trauma Support</option>
                <option>Anxiety & Depression</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-slate-600">Preferred date</label>
              <input type="date" name="preferred_date" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Preferred time</label>
              <input type="time" name="preferred_time" required className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-600">Notes (optional)</label>
            <textarea name="notes" rows="3" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex items-center gap-2">
            <input id="consent2" name="consent" type="checkbox" defaultChecked />
            <label htmlFor="consent2" className="text-sm text-slate-600">I consent to be contacted to arrange this appointment</label>
          </div>
          <div className="flex gap-3 mt-2">
            <button disabled={sending} className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-4 py-2 rounded-lg">
              {sending ? 'Submitting...' : 'Submit request'}
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
          </div>
          {status && (
            <p className={`mt-2 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </div>
  )
}
