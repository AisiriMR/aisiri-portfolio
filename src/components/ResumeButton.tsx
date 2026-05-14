'use client'
import { useState } from 'react'

const resumes = [
  {
    title: 'AI / Gen AI Engineer',
    description: 'Focus on LLMs, RAG Pipelines & Agentic AI',
    file: '/AI_Engineer.pdf',
  },
  {
    title: 'ML Engineer',
    description: 'Focus on Deep Learning & ML Pipelines',
    file: '/ML_Engineer.pdf',
  },
]

export default function ResumeButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Resume Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4f8ef7] hover:bg-[#3d7ae8] text-white text-sm font-semibold transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
        Resume
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#0d1528] border border-[#1e2d4a] rounded-2xl p-8 w-full max-w-sm relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#4a5568] hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white text-center mb-2">Choose Resume Version</h3>
            <p className="text-[#8892a4] text-sm text-center mb-6">Select the resume that fits your role.</p>

            {/* Resume options */}
            <div className="space-y-3">
              {resumes.map((r) => (
                <a
                  key={r.title}
                  href={r.file}
                  download
                  className="flex items-center justify-between p-4 bg-[#111d35] border border-[#1e2d4a] rounded-xl hover:border-[#4f8ef7]/40 hover:bg-[#0f1a2e] transition-all group"
                >
                  <div>
                    <div className="text-white font-semibold text-sm group-hover:text-[#4f8ef7] transition-colors">
                      {r.title}
                    </div>
                    <div className="text-[#8892a4] text-xs mt-0.5">{r.description}</div>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8892a4" strokeWidth="2" className="group-hover:stroke-[#4f8ef7] transition-colors flex-shrink-0">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
