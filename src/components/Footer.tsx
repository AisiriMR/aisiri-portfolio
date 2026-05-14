export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d4a] py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-white font-bold text-lg">AR.</span>
        <span className="text-xs text-[#4a5568]">© {new Date().getFullYear()} Aisiri Rajashekar. Built with ❤ & Code.</span>
        <div className="flex gap-5">
          {[
            { label: 'GitHub', href: 'https://github.com/AisiriMR' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aisirirajashekar-a74366252' },
            { label: 'Instagram', href: 'https://www.instagram.com/aisiri_rajashekar/' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener" className="text-xs text-[#4a5568] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
