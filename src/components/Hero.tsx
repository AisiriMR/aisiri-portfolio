'use client'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  // Life in Frames
  { file: 'w1.jpeg',  label: 'Life in Frames',          caption: 'New chapter. Same energy.' },
  { file: 'w15.jpeg', label: 'Life in Frames',          caption: 'She graduated. The frame knew.' },
  { file: 'w16.jpeg', label: 'Life in Frames',          caption: 'Four years. One degree. Whole squad.' },
  { file: 'w9.jpeg',  label: 'Life in Frames',          caption: 'Walked the bridge. Didn\'t freeze.' },
  { file: 'w5.jpeg',  label: 'Life in Frames',          caption: 'New city. Same her.' },
  { file: 'w6.jpeg',  label: 'Life in Frames',          caption: 'She glows differently.' },
  // Beyond the Code
  { file: 'w14.jpeg', label: 'Beyond the Code',         caption: 'Bib #7107. She ran.' },
  { file: 'w13.jpeg', label: 'Beyond the Code',         caption: 'Gym girl era. No days off.' },
  { file: 'w11.jpeg', label: 'Beyond the Code',         caption: 'Strangers, surprises & magic. Best birthday — she turned 23.' },
  { file: 'w17.jpeg', label: 'Beyond the Code',         caption: '22kms in. Still had energy to pose.' },
  { file: 'w19.jpeg', label: 'Beyond the Code',         caption: 'Chased waterfalls. Worth every step.' },
  { file: 'w18.jpeg', label: 'Beyond the Code',         caption: 'She found the edge. Smiled anyway.' },
  { file: 'w20.jpeg', label: 'Beyond the Code',         caption: 'The ocean called. She answered.' },
  // Model Behind the Laptop
  { file: 'w10.jpeg', label: 'Model Behind the Laptop', caption: 'He was also cold.' },
  { file: 'w7.jpeg',  label: 'Model Behind the Laptop', caption: 'The kid in her never left.' },
  { file: 'w4.jpeg',  label: 'Model Behind the Laptop', caption: 'Times Square didn\'t disappoint.' },
  { file: 'w2.jpeg',  label: 'Model Behind the Laptop', caption: 'First NYC visit hit different with them.' },
  { file: 'w12.jpeg', label: 'Model Behind the Laptop', caption: 'Grad school hits different at sunset.' },
]

const labelColors: Record<string, string> = {
  'Life in Frames':          '#4f8ef7',
  'Beyond the Code':         '#a78bfa',
  'Model Behind the Laptop': '#f59e0b',
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
  }, [animating])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  // Auto-advance every 4s
  useEffect(() => {
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]
  const color = labelColors[slide.label]

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: text */}
          <div>
            <div className="mb-4">
              <span className="section-label">✦ Open to Summer 2026 Internship</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Hello, I'm<br />
              <span className="text-[#4f8ef7]">Aisiri.</span>
            </h1>

            <p className="text-[#8892a4] text-lg leading-relaxed mb-3 max-w-md">
              MS Computer Science student at Stevens Institute of Technology.
            </p>
            <p className="text-[#8892a4] text-base leading-relaxed mb-8 max-w-md">
              Building agentic AI systems, privacy-first LLM pipelines, and intelligent cloud applications that actually work in production.
            </p>

            <div className="flex gap-4 flex-wrap mb-12">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-[#4f8ef7] text-white font-semibold hover:bg-[#3d7ae8] transition-colors text-sm">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl border border-[#1e2d4a] text-[#8892a4] font-semibold hover:text-white hover:border-[#2a3f6a] transition-colors text-sm">
                Get in Touch
              </a>
            </div>

            <div className="flex gap-10">
              {[
                { val: '3.89', label: 'GPA' },
                { val: '5+',   label: 'Projects' },
                { val: '1',    label: 'Publication' },
                { val: '11mo', label: 'Internship' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.val}</div>
                  <div className="text-xs text-[#8892a4] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: carousel — exactly like danantha */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">

              {/* Photo */}
              <div
                className="relative rounded-2xl overflow-hidden border border-[#1e2d4a] bg-[#0f1a2e]"
                style={{ height: 480 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={slide.file}
                  src={`/${slide.file}`}
                  alt={slide.caption}
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                  style={{ opacity: animating ? 0 : 1 }}
                />

                {/* Bottom overlay — label + caption bottom-left, arrows bottom-right */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0f1e]/95 via-[#0a0f1e]/50 to-transparent px-5 pt-16 pb-5">
                  <div className="flex items-end justify-between gap-4">
                    {/* Label + Caption — bottom left, same color */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-1 font-mono"
                        style={{ color }}
                      >
                        {slide.label}
                      </div>
                      <p
                        className="text-sm font-semibold leading-snug"
                        style={{ color }}
                      >
                        {slide.caption}
                      </p>
                    </div>

                    {/* Prev / Next — bottom right */}
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full bg-[#0f1a2e]/80 border border-[#1e2d4a] flex items-center justify-center text-[#8892a4] hover:text-white hover:border-[#2a3f6a] transition-all"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <button
                        onClick={next}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a0f1e] hover:bg-[#e2e8f0] transition-all"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
