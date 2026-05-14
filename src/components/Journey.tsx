const stops = [
  {
    period: '2020 – 2024',
    org: 'R V College of Engineering',
    role: 'Bachelor of Engineering — Computer Science',
    location: 'Bengaluru, India',
    detail: 'Built a strong foundation in programming, data structures, algorithms, and web development. Graduated with a 7.15/10 GPA. Led cultural organizations and published research.',
    bullets: [
      'GPA: 7.15 / 10',
      'Head of Kannada Sangha — led cultural chapter of 100+ members',
      'Cultural Activity Team Secretary (2023–24) — hosted and organized events',
      'Published research in IJCRT Vol. 12, Issue 6 (2024)',
    ],
    tags: ['Python', 'Java', 'C++', 'Data Structures', 'Web Dev'],
    current: false,
    emoji: '🎓',
    isFlight: false,
  },
  {
    period: 'Jun 2024 – Apr 2025',
    org: 'KodNest',
    role: 'Software Developer Intern',
    location: 'Bengaluru, India',
    detail: 'Engineered production-grade HTTP API integrations and end-to-end ML pipelines. Built deep learning models for video classification and anomaly detection.',
    bullets: [
      'Fault-tolerant API pipelines with retry/backoff logic',
      'Deep learning models: PyTorch, TensorFlow, Keras',
      'Full ML lifecycle: ingestion → training → deployment',
    ],
    tags: ['Python', 'PyTorch', 'TensorFlow', 'REST APIs'],
    current: false,
    emoji: '💻',
    isFlight: false,
  },
  {
    period: 'Sep 2025',
    org: 'The Big Move ✈️',
    role: 'Bengaluru → New Jersey, USA',
    location: '',
    detail: 'Two bags. One dream. Zero hesitation.',
    bullets: [],
    tags: [],
    current: false,
    emoji: '✈️',
    isFlight: true,
  },
  {
    period: 'Sep 2025 – Present',
    org: 'Stevens Institute of Technology',
    role: 'M.S. Computer Science',
    location: 'Hoboken, New Jersey, USA',
    detail: 'Specializing in machine learning, cloud computing, and advanced algorithms. Building agentic AI systems and privacy-first LLM tools.',
    bullets: [
      'GPA: 3.89 / 4.0',
      'Coursework: Machine Learning, Artificial Intelligence, Cloud Computing (AWS), Advanced Algorithms, Agile Methods for Software Development, Cybersecurity',
      'Attended SPY Hackathon — first international hackathon experience',
    ],
    tags: ['Agentic AI', 'LLMs', 'AWS', 'ML', 'Artificial Intelligence'],
    current: true,
    emoji: '🏛️',
    isFlight: false,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-6">
      <div className="divider mb-20" />
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">My Professional Road Map</p>
        <h2 className="text-3xl font-bold text-white mb-16">My Journey</h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1e2d4a] hidden md:block" />

          <div className="space-y-10">
            {stops.map((s, i) => (
              <div key={i} className="relative md:pl-20">
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl hidden md:flex ${s.current ? 'bg-[#4f8ef7]/20 border border-[#4f8ef7]/40' : 'bg-[#0f1a2e] border border-[#1e2d4a]'}`}>
                  {s.emoji}
                </div>

                {s.isFlight ? (
                  <div className="flex items-center gap-4 py-4">
                    <div className="text-2xl md:hidden">{s.emoji}</div>
                    <div>
                      <div className="text-[#4f8ef7] font-semibold">{s.org}</div>
                      <div className="text-[#8892a4] text-sm">{s.detail}</div>
                    </div>
                  </div>
                ) : (
                  <div className="card p-6">
                    {s.current && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 dot-pulse" />
                        <span className="text-xs text-green-400 font-medium">Currently Here</span>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <div className="text-xs text-[#4f8ef7] font-mono mb-1">{s.period}</div>
                        <h3 className="text-lg font-bold text-white">{s.org}</h3>
                        <div className="text-[#8892a4] text-sm font-medium">{s.role}</div>
                        {s.location && <div className="text-[#4a5568] text-xs mt-0.5">{s.location}</div>}
                      </div>
                    </div>
                    <p className="text-[#8892a4] text-sm leading-relaxed mb-4">{s.detail}</p>
                    <ul className="space-y-1.5 mb-4">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#8892a4]">
                          <span className="text-[#4f8ef7] mt-0.5 flex-shrink-0">–</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {s.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
