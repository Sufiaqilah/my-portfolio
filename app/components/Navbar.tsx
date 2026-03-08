"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-neutral-950 border-b border-neutral-800 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-white text-lg">sufi.dev</span>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            <a href="/bn-my-guide" className="hover:text-white transition-colors">Brunei to Malaysia Guide</a>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-4 flex flex-col gap-4 text-sm text-neutral-400">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Contact</a> 
          <a href="#blog" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Blog</a>
          <a href="/bn-my-guide" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Brunei to Malaysia Guide</a>
        </div>
      )}
    </nav>
  );
}