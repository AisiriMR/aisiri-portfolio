'use client'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aisirirajashekar-a74366252', color: '#0077b5', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'GitHub',   href: 'https://github.com/AisiriMR',                              color: '#e2e8f0', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  { label: 'LeetCode', href: 'https://leetcode.com/u/aisiri-rajashekar/',                color: '#ffa116', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg> },
  { label: 'Instagram',href: 'https://www.instagram.com/aisiri_rajashekar/',            color: '#e1306c', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { label: 'YouTube',  href: 'https://www.youtube.com/@aisirimr4690',                   color: '#ff0000', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
]

const hobbies = [
  { label: 'Run',        icon: '🏃‍♀️' },
  { label: 'Hike',       icon: '🥾' },
  { label: 'Travel',     icon: '✈️' },
  { label: 'Badminton',  icon: '🏸' },
  { label: 'Basketball', icon: '🏀' },
  { label: 'Gym',        icon: '🏋️‍♀️' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="divider mb-20" />
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">Get in Touch</p>
        <h2 className="text-3xl font-bold text-white mb-12">Ready to Build the Future?</h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-6 mb-6">
          {/* Identity card */}
          <div className="card p-6 flex items-start gap-5">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#a78bfa] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              AR
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <span className="text-white font-bold text-lg">Aisiri Rajashekar</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-pulse" />
                  Open to Work
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="mailto:arajashe@stevens.edu" className="flex items-center gap-3 p-3 bg-[#111d35] border border-[#1e2d4a] rounded-xl hover:border-[#4f8ef7]/40 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-[#4f8ef7]/10 flex items-center justify-center text-[#4f8ef7]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#4a5568] uppercase tracking-wider font-mono">Email Me</div>
                    <div className="text-xs text-[#8892a4] group-hover:text-[#4f8ef7] transition-colors">arajashe@stevens.edu</div>
                  </div>
                </a>
                <a href="tel:+15514173967" className="flex items-center gap-3 p-3 bg-[#111d35] border border-[#1e2d4a] rounded-xl hover:border-[#4f8ef7]/40 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center text-[#a78bfa]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#4a5568] uppercase tracking-wider font-mono">Call Me</div>
                    <div className="text-xs text-[#8892a4] group-hover:text-[#a78bfa] transition-colors">+1 (551) 417-3967</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Social buttons */}
          <div className="card p-4 flex flex-row md:flex-col justify-center gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                title={s.label}
                className="w-11 h-11 rounded-xl bg-[#111d35] border border-[#1e2d4a] flex items-center justify-center text-[#8892a4] hover:text-white transition-all hover:scale-105"
                style={{ ['--c' as string]: s.color }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = s.color; el.style.background = s.color + '22'; el.style.color = s.color }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = ''; el.style.background = ''; el.style.color = '' }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Beyond the Code */}
        <div className="card p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-400 text-sm">♥</span>
                <span className="text-xs text-red-400 font-mono uppercase tracking-widest font-bold">Beyond the Code</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Active Lifestyle & Hobbies</h3>
              <p className="text-[#8892a4] text-sm leading-relaxed max-w-lg">
                When I'm not behind the laptop, I'm usually out moving or exploring. Running and hiking/trekking are my favourite reset buttons. I'm a travel freak always hunting for the next new place — and when I'm not on the road, you'll find me on the badminton court, the basketball court, or at the gym. If you share any of these passions, I'd love to connect for a session or a chat!
              </p>
            </div>
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              {hobbies.map(h => (
                <div key={h.label} className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-xl bg-[#111d35] border border-[#1e2d4a] flex items-center justify-center text-xl hover:border-[#4f8ef7]/40 transition-colors">
                    {h.icon}
                  </div>
                  <span className="text-[10px] text-[#4a5568] uppercase tracking-wider font-mono">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
