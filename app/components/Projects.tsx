const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and what tech was used to build it.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and what tech was used to build it.",
    tags: ["Python", "SQL", "Linux"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and what tech was used to build it.",
    tags: ["React", "Node.js", "API"],
    link: "#",
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