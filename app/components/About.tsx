export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Python", "SQL", "Linux", "Networking", "Hardware",
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl font-bold text-white mb-6">A little bit about who I am</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            I'm Sufi Aqilah, an IT professional based in Brunei with a passion for all things tech — from writing code and managing databases to fixing hardware and exploring cybersecurity.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            When I'm not in front of a screen, you'll find me at the gym or gaming — a hobby I've had since I was 10. Currently on a mission to level up my programming skills and build cool things on the web.
          </p>
        </div>
        <div>
          <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-neutral-900 border border-neutral-700 text-neutral-300 text-sm rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}