const projects = [
  {
    id: 'guardpass',
    name: 'GuardPass',
    category: 'Privacy AI',
    desc: 'A stateful privacy middleware that intercepts user prompts, detects and anonymizes PII before forwarding to an LLM, then restores original values in the response.',
    bullets: ['Token-mapped PII restoration across multi-turn conversations', 'Pluggable GPT-4o / GPT-4o-mini backends with clean schemas', 'Full-stack: Python backend + React frontend + audit dashboard'],
    tags: ['Python', 'React', 'GPT-4o', 'PII Detection', 'REST API'],
    github: 'https://github.com/AisiriMR/GuardPass',
    date: 'Apr 2026',
    icon: '🛡️',
  },
  {
    id: 'ai-web-app',
    name: 'AI-Powered Secure Web App',
    category: 'Cloud · AWS',
    desc: 'Production-ready, security-conscious web application on AWS combining AI capabilities with cloud-native architecture for scalability and resilience.',
    bullets: ['Deployed on AWS with fault-tolerant, scalable infrastructure', 'Secure authentication and session management', 'End-to-end from frontend to cloud deployment'],
    tags: ['AWS', 'Cloud Architecture', 'Security', 'AI'],
    github: 'https://github.com/AisiriMR/ai-powered-web-app',
    date: 'May 2026',
    icon: '☁️',
  },
  {
    id: 'video-summarization',
    name: 'Video Summarization Storyboard',
    category: 'Multi-Modal AI · Published',
    desc: 'End-to-end agentic pipeline orchestrating Gemini 1.5, DALL-E 3, and Midjourney as callable tools to generate visual storyboards from YouTube videos.',
    bullets: ['Published in IJCRT Vol. 12, Issue 6, June 2024', 'Orchestrated 3 AI APIs with structured schemas', 'Python ingestion for large-scale unstructured video datasets'],
    tags: ['Python', 'Gemini 1.5', 'DALL-E 3', 'Prompt Engineering'],
    github: 'https://github.com/AisiriMR/video-summarization-storyboard',
    date: 'Jun 2024',
    icon: '🎬',
    badge: 'Research Published',
  },
  {
    id: 'violence-detection',
    name: 'Violence Detection in Videos',
    category: 'Deep Learning · 94% Accuracy',
    desc: 'CNN-based classification model for real-time violence detection in video streams with systematic architecture tuning on large-scale datasets.',
    bullets: ['94% accuracy via systematic CNN architecture tuning', 'Full pipeline: ingestion → preprocessing → feature extraction → eval', 'Reproducible, documented workflows for scalable automation'],
    tags: ['TensorFlow', 'PyTorch', 'CNN', 'OpenCV', 'Python'],
    date: 'Mar 2024',
    icon: '👁️',
  },
  {
    id: 'railway',
    name: 'Railway Trespasser Detection',
    category: 'Real-Time ML · 96% Precision',
    desc: 'Real-time ML model for automated trespasser detection using terrain video streams, integrated into a production pipeline for automated action-taking.',
    bullets: ['96% precision on live terrain video streams', 'Production pipeline with automated alert system', 'End-to-end ML in safety-critical visual environments'],
    tags: ['Python', 'Deep Learning', 'Computer Vision', 'Real-Time ML'],
    date: '2024',
    icon: '🚆',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="divider mb-20" />
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">In Motion</p>
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-3xl font-bold text-white">Selected Work</h2>
          <a href="https://github.com/AisiriMR" target="_blank" rel="noopener" className="text-sm text-[#4f8ef7] hover:underline hidden md:block">
            All on GitHub →
          </a>
        </div>
        <p className="text-[#8892a4] text-sm mb-12">A collection of AI/ML engineering projects built for production.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.id} className="card p-6 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center text-xl">
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-[#4f8ef7] font-mono uppercase tracking-wider">{p.category}</div>
                    {'badge' in p && p.badge && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-[#a78bfa]">{p.badge}</span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-[#4a5568] font-mono">{p.date}</span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#4f8ef7] transition-colors">{p.name}</h3>
              <p className="text-[#8892a4] text-sm leading-relaxed mb-4">{p.desc}</p>

              <ul className="space-y-1 mb-5">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#8892a4]">
                    <span className="text-[#4f8ef7] mt-0.5 flex-shrink-0">–</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              {'github' in p && p.github && (
                <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-xs text-[#8892a4] hover:text-[#4f8ef7] transition-colors font-medium">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
