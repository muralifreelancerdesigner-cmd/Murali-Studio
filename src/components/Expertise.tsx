import ScrollReveal from './ScrollReveal';

export default function Expertise() {
  const services = [
    { title: "Design & Branding", skills: ["Brand Identity Development", "Concept Visualization", "Layout & Typography"] },
    { title: "Video Production", skills: ["Motion Graphics", "Cinematic Storytelling", "Video Compositing"] },
    { title: "App Development", skills: ["3D Visualization", "Interactive Applications", "Cross-Platform Deployment"] }
  ];

  return (
    <section id="services" className="py-32 bg-transparent relative">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-accent)] mb-4 font-bold">Expertise</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Focused services for ambitious brands.</h2>
        <p className="mx-auto max-w-2xl text-sm text-[var(--color-muted)] leading-relaxed font-medium">
          Strategy-led design and production that makes every project feel custom, premium and effortless.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 px-6 md:px-0 mx-auto max-w-6xl">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <div className="glass-card p-10 hover:border-[var(--color-accent)]/50 transition-all duration-500 group shadow-sm">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-500 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>

              <ul className="space-y-4">
                {service.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-3 text-[var(--color-muted)] text-sm font-medium transition-colors group-hover:text-white">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}