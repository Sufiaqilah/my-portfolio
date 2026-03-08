"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <main className="bg-neutral-950">
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-5xl w-full">
          <p
            className={`text-neutral-500 text-sm mb-3 tracking-widest uppercase transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            Hello, I'm
          </p>
          <h1
            className={`text-5xl font-bold text-white mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "150ms" }}
          >
            Sufi Aqilah Zuffri
          </h1>
          <p
            className={`text-xl text-neutral-400 max-w-lg mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "300ms" }}
          >
            IT Enthusiast from Brunei, I live and breathe everything about technology. Coding, hardware, databases, hacking, you name it. Currently leveling up my dev skills, one project at a time.
          </p>
          <div
            className={`flex gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "450ms" }}
          >
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
      <Gallery />
      <Projects />
      <Contact />
      <Blog />
    </main>
  );
}