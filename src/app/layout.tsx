import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aisiri Rajashekar',
  description: 'AI/ML Engineer · MS CS @ Stevens Institute of Technology · Building agentic AI systems and privacy-first LLM pipelines.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  )
}
