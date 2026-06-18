'use client';

export default function Timeline() {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Lead Visual Designer",
      company: "TriggerView Studios",
      link: "#"
    },
    {
      year: "2022 - 2024",
      role: "Senior Video Editor & Animator",
      company: "Creative Production House",
      link: "#"
    },
    {
      year: "2020 - 2022",
      role: "Junior Designer",
      company: "Digital Media Agency",
      link: ""
    }
  ];

  return (
    <section id="timeline" className="py-32 bg-transparent text-[var(--color-text)] relative">
      <div className="max-w-4xl mx-auto px-6">
        <span className="block text-center text-[10px] uppercase tracking-[0.45em] text-[var(--color-accent)] font-bold mb-3">
          History
        </span>
        <h2 className="text-4xl md:text-5xl text-center font-black tracking-tight text-white mb-24">
          Career Timeline
        </h2>
        
        {/* Continuous Linear Vertical Track */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Core Emerald Indicator Ring Node */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500/40 shadow-[0_0_12px_var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-all duration-300" />
              
              {/* Premium Card Structure */}
              <div className="glass-card p-8 transition-all duration-400">
                <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider block mb-2">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-[var(--color-muted)] text-sm font-medium">
                  {exp.company}
                </p>
                
                {exp.link && (
                  <a 
                    href={exp.link} 
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-400 hover:text-emerald-300 mt-5 uppercase tracking-widest transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    View Case Study
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
