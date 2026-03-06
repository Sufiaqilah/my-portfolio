"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xbdzjddw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500"
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Your Message"
            required
            className="bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-neutral-950 font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-colors"
          >
            {status === "sent" ? "Message Sent! ✓" : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}