const skills = [
  {
    label: 'Agentic AI & LLMs',
    items: ['Agentic AI Systems', 'LLM Orchestration', 'Function Calling', 'Prompt Engineering', 'MCP Tool Servers', 'RAG Pipelines', 'NLP'],
  },
  {
    label: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Django', 'Flask', 'Java', 'C++'],
  },
  {
    label: 'ML & Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'YOLO', 'Pandas', 'NumPy'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Microsoft Fabric', 'CI/CD'],
  },
  {
    label: 'API & Integration',
    items: ['REST API Design', 'HTTP Integrations', 'Auth Flows', 'Rate Limiting', 'Retry/Backoff', 'Web Scraping'],
  },
  {
    label: 'Data & Storage',
    items: ['MySQL', 'MongoDB', 'Data Pipelines', 'Feature Engineering', 'Data Extraction'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="divider mb-20" />
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">My Stack</p>
        <h2 className="text-3xl font-bold text-white mb-12">Technical Arsenal</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(cat => (
            <div key={cat.label} className="card p-6">
              <h3 className="text-sm font-semibold text-[#4f8ef7] mb-4 font-mono">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-[#111d35] border border-[#1e2d4a] text-[#8892a4] hover:text-white hover:border-[#2a3f6a] transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
