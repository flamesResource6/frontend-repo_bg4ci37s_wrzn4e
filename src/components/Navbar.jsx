import { useState } from 'react'

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div onClick={() => scrollTo('hero')} className="cursor-pointer">
          <span className="text-lg font-bold tracking-tight text-slate-800">Solace</span>
          <span className="ml-1 text-lg font-semibold text-blue-600">Counselling</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <button onClick={() => scrollTo('services')} className="hover:text-blue-600">Services</button>
          <button onClick={() => scrollTo('about')} className="hover:text-blue-600">About</button>
          <button onClick={() => scrollTo('therapists')} className="hover:text-blue-600">Therapists</button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-blue-600">Stories</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-600">Contact</button>
        </nav>
        <div className="hidden md:flex">
          <button onClick={onBook} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow-sm">Book a session</button>
        </div>
        <button className="md:hidden inline-flex items-center p-2" onClick={() => setOpen(!open)}>
          <span className="sr-only">Menu</span>
          <div className="w-6 h-0.5 bg-slate-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-800"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button onClick={() => scrollTo('services')} className="text-left">Services</button>
            <button onClick={() => scrollTo('about')} className="text-left">About</button>
            <button onClick={() => scrollTo('therapists')} className="text-left">Therapists</button>
            <button onClick={() => scrollTo('testimonials')} className="text-left">Stories</button>
            <button onClick={() => scrollTo('contact')} className="text-left">Contact</button>
            <button onClick={() => { onBook(); setOpen(false) }} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">Book a session</button>
          </div>
        </div>
      )}
    </header>
  )
}
