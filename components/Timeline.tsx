// components/Timeline.tsx
export default function Timeline() {
  const experiences = [
    { year: "2025", role: "Graphic Designer & Video Editor", company: "Chettinad Hospital & Research Institute" },
    { year: "2022-2024", role: "Graphic Designer & Video Editor", company: "Teak Home" },
    { year: "2016-2022", role: "Video Editor & Designer", company: "Broadcast Media Channels" },
    { year: "2013-2016", role: "Application Developer", company: "Pamz3d Designs India Pvt Ltd" }
  ];

  return (
    <section className="py-32 bg-white text-zinc-900">
      <h2 className="text-3xl md:text-4xl text-center text-teal-800 mb-20 font-black tracking-widest uppercase">Career Timeline</h2>
      <div className="max-w-3xl mx-auto border-l-2 border-zinc-100 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-teal-600 shadow-sm" />
            <h3 className="text-xl font-black tracking-tight mb-1 text-zinc-900">{exp.role}</h3>
            <p className="text-teal-700 text-sm font-bold uppercase tracking-wider">{exp.year} — {exp.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}