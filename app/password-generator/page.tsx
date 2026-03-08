"use client";
import { useState, useCallback } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";
    if (uppercase) chars += upper;
    if (lowercase) chars += lower;
    if (numbers) chars += nums;
    if (symbols) chars += syms;

    if (!chars) return;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
    setCopied(false);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const copy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = () => {
    const active = [uppercase, lowercase, numbers, symbols].filter(Boolean).length;
    if (length < 8 || active < 2) return { label: "WEAK", color: "text-red-500" };
    if (length < 12 || active < 3) return { label: "MEDIUM", color: "text-yellow-500" };
    return { label: "STRONG", color: "text-green-500" };
  };

  const strength = getStrength();

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-6 pt-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8">
          <p className="text-green-500 font-mono text-sm mb-2">$ password-generator --secure</p>
          <h1 className="text-3xl font-bold text-white font-mono">Password Generator</h1>
          <p className="text-neutral-500 font-mono text-sm mt-1">Generate secure, random passwords instantly.</p>
        </div>

        {/* Password Output */}
        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 font-mono">
          <div className="flex items-center justify-between mb-2">
            <span className="text-neutral-500 text-xs">OUTPUT</span>
            <span className={`text-xs font-bold ${strength.color}`}>{strength.label}</span>
          </div>
          <p className="text-green-400 text-lg break-all min-h-[28px]">
            {password || <span className="text-neutral-600">click generate...</span>}
          </p>
        </div>

        {/* Length Slider */}
        <div className="mb-6">
          <div className="flex justify-between font-mono text-sm mb-2">
            <span className="text-neutral-400">LENGTH</span>
            <span className="text-green-500">{length}</span>
          </div>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>

        {/* Toggles */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { label: "UPPERCASE", value: uppercase, set: setUppercase },
            { label: "LOWERCASE", value: lowercase, set: setLowercase },
            { label: "NUMBERS", value: numbers, set: setNumbers },
            { label: "SYMBOLS", value: symbols, set: setSymbols },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => opt.set(!opt.value)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg border font-mono text-sm transition-colors ${
                opt.value
                  ? "border-green-500 bg-green-500/10 text-green-400"
                  : "border-neutral-700 bg-neutral-900 text-neutral-500"
              }`}
            >
              <span>{opt.label}</span>
              <span>{opt.value ? "ON" : "OFF"}</span>
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={generate}
            className="flex-1 py-3 bg-green-500 text-neutral-950 font-bold font-mono text-sm rounded-lg hover:bg-green-400 transition-colors"
          >
            GENERATE
          </button>
          <button
            onClick={copy}
            className={`px-6 py-3 border font-mono text-sm rounded-lg transition-colors ${
              copied
                ? "border-green-500 text-green-500"
                : "border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white"
            }`}
          >
            {copied ? "COPIED!" : "COPY"}
          </button>
        </div>
      </div>
    </main>
  );
}