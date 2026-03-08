const projects = [
  {
    title: "Rotex Solution (Final Year Project Politeknik)",
    description: "A web-based system for renewing driving licenses and vehicle licenses in Brunei, inspired by TransportBN. Built with group as a final year project at Politeknik Brunei.",
    tags: ["Laravel", "PHP", "JavaScript", "CSS", "MySQL"],
    link: "https://github.com/Sufiaqilah/rtxsltn",
  },
  {
  title: "Emergency Exit Plan for IBTE Jefri Bolkiah IT Campus (Final Year Project)",
  description: "A produced video guide for building evacuation procedures during a fire emergency at IBTE Jefri Bolkiah. Involved full production planning, scripting, filming and editing.",
  tags: ["Adobe Premiere Pro", "Video Production", "Planning"],
  link: "#",
},
    {
    title: "Brunei to Malaysia Travel Guide",
    description: "A step-by-step guide for Bruneians travelling to Malaysia by car, covering VMS, EES and MdAC registration processes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "/bn-my-guide",
    },
    {
  title: "Password Generator",
  description: "A secure password generator with customizable options — length, uppercase, lowercase, numbers and symbols. Built with a dark hacker terminal aesthetic.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  link: "/password-generator",
},
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Work</p>
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a key={project.title} href={project.link} className="group p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
              <h3 className="text-white font-semibold mb-2 group-hover:text-neutral-200">{project.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}