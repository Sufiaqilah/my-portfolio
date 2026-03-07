import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-5xl w-full">
          <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Hello, I'm</p>
          <h1 className="text-5xl font-bold text-white mb-4">Sufi Aqilah Zuffri</h1>
          <p className="text-xl text-neutral-400 max-w-lg mb-8">
            IT Enthusiast from Brunei, I live and breathe everything about technology. Coding, hardware, databases, hacking, you name it. Currently leveling up my dev skills, one project at a time.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-white text-neutral-950 font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-neutral-700 text-neutral-300 font-semibold text-sm rounded-lg hover:border-neutral-500 hover:text-white transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
      <Blog />
    </main>
  );
}