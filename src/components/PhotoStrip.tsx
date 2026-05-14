'use client'
import { useEffect, useRef } from 'react'

const categories = [
  {
    label: 'Life in Frames',
    color: '#4f8ef7',
    photos: [
      { file: 'w1.jpeg',  caption: 'New chapter. Same energy.' },
      { file: 'w15.jpeg', caption: 'She graduated. The frame knew.' },
      { file: 'w16.jpeg', caption: 'Four years. One degree. Whole squad.' },
      { file: 'w9.jpeg',  caption: 'Walked the bridge. Didn\'t freeze.' },
      { file: 'w5.jpeg',  caption: 'New city. Same her.' },
      { file: 'w6.jpeg',  caption: 'She glows differently.' },
    ],
  },
  {
    label: 'Beyond the Code',
    color: '#a78bfa',
    photos: [
      { file: 'w14.jpeg', caption: 'Bib #7107. She ran.' },
      { file: 'w13.jpeg', caption: 'Gym girl era. No days off.' },
      { file: 'w11.jpeg', caption: 'Strangers, surprises & pain. Best birthday — she turned 23.' },
      { file: 'w17.jpeg', caption: '22kms in. Still had energy to pose.' },
      { file: 'w19.jpeg', caption: 'Chased waterfalls. Worth every step.' },
      { file: 'w18.jpeg', caption: 'She found the edge. Smiled anyway.' },
      { file: 'w20.jpeg', caption: 'The ocean called. She answered.' },
    ],
  },
  {
    label: 'Model Behind the Laptop',
    color: '#f59e0b',
    photos: [
      { file: 'w10.jpeg', caption: 'He was also cold.' },
      { file: 'w7.jpeg',  caption: 'The kid in her never left.' },
      { file: 'w4.jpeg',  caption: 'Times Square didn\'t disappoint.' },
      { file: 'w2.jpeg',  caption: 'First NYC visit hit different with them.' },
      { file: 'w12.jpeg', caption: 'Grad school hits different at sunset.' },
    ],
  },
]

function AutoScrollStrip({ photos, color }: { photos: typeof categories[0]['photos'], color: string }) {
  const stripRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef<number>(0)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const CARD_W = 220 + 16 // width + gap
    const totalWidth = photos.length * CARD_W
    const speed = 0.5

    const tick = () => {
      posRef.current += speed
      if (posRef.current >= totalWidth) posRef.current = 0
      if (strip) strip.style.transform = `translateX(-${posRef.current}px)`
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [photos.length])

  // Duplicate photos for seamless loop
  const doubled = [...photos, ...photos]

  return (
    <div className="overflow-hidden">
      <div ref={stripRef} className="flex gap-4" style={{ width: 'max-content' }}>
        {doubled.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-2xl overflow-hidden border border-[#1e2d4a] bg-[#0f1a2e]"
            style={{ width: 220 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/${p.file}`}
              alt={p.caption}
              style={{ width: 220, height: 300, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
            <div className="p-3 border-t border-[#1e2d4a]">
              <p className="text-xs text-[#8892a4] leading-snug" style={{ minHeight: 36 }}>{p.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PhotoStrip() {
  return (
    <section id="frames" className="py-20">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="section-label mb-2">I said Cheese</p>
        <h2 className="text-3xl font-bold text-white">Life in Frames</h2>
      </div>

      <div className="space-y-14">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="max-w-6xl mx-auto px-6 mb-5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
              <span className="text-sm font-semibold" style={{ color: cat.color }}>{cat.label}</span>
            </div>
            <AutoScrollStrip photos={cat.photos} color={cat.color} />
          </div>
        ))}
      </div>
    </section>
  )
}
