export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Get In Touch</p>
          <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-neutral-400 leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hi? Feel free to drop me a message!
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-neutral-950 font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}