export default function SignTranslatePage() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-16">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Tool</p>
        <h1 className="text-3xl font-bold text-white mb-2">Sign Language Translator</h1>
        <p className="text-neutral-400 text-sm mb-8">
          Powered by <a href="https://sign.mt" target="_blank" className="text-neutral-300 hover:text-white underline transition-colors">sign.mt</a> which is a Real-time sign language translation.
        </p>
        <div className="w-full rounded-xl overflow-hidden border border-neutral-800" style={{ height: "80vh" }}>
          <iframe
            src="https://sign.mt/?lang=en"
            className="w-full h-full"
            allow="camera; microphone"
            title="Sign Language Translator"
          />
        </div>
      </div>
    </main>
  );
}