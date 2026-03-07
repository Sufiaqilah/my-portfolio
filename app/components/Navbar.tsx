export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-950 border-b border-neutral-800 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-white text-lg">sufi.dev</span>
        <div className="flex gap-4 md:gap-8 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
        </div>
      </div>
    </nav>
  );
}