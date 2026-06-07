export default function Expertise() {
  const services = [
    { 
      title: "Design & Branding", 
      skills: ["Brand Identity Development", "Concept Visualization", "Layout & Typography"] 
    },
    { 
      title: "Video Production", 
      skills: ["Motion Graphics", "Cinematic Storytelling", "Video Compositing"] 
    },
    { 
      title: "App Development", 
      skills: ["3D Visualization", "Interactive Applications", "Cross-Platform Deployment"] 
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#F2F2F2]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-teal-700 mb-4 font-bold">Expertise</p>
        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
          Focused services for ambitious brands.
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-zinc-600 leading-relaxed font-medium">
          Strategy-led design and production that makes every project feel custom, premium and effortless.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 px-6 md:px-0 mx-auto max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 hover:border-teal-500/50 transition-all duration-500 group shadow-sm hover:shadow-xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-500">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">{service.title}</h3>
            </div>

            <ul className="space-y-4">
              {service.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-start gap-3 text-zinc-600 text-sm font-medium transition-colors group-hover:text-zinc-900">
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-teal-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}