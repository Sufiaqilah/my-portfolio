"use client";
import { useState, useEffect } from "react";

const cities = [
  { name: "Brunei", timezone: "Asia/Brunei" },
  { name: "Kuala Lumpur", timezone: "Asia/Kuala_Lumpur" },
  { name: "Singapore", timezone: "Asia/Singapore" },
  { name: "Melbourne", timezone: "Australia/Melbourne" },
  { name: "Jeddah", timezone: "Asia/Riyadh" },
];

function Clock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return <span className="text-white font-mono text-lg">{time}</span>;
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-neutral-500 text-sm mb-6 tracking-widest uppercase">World Clock</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {cities.map((city) => (
            <div key={city.name} className="flex flex-col gap-1">
              <span className="text-neutral-500 text-xs">{city.name}</span>
              <Clock timezone={city.timezone} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-neutral-600 text-sm">
            <span>© 2026 Sufi Aqilah Zuffri</span>
            <div className="flex gap-4">
                <a href="https://github.com/Sufiaqilah" target="_blank" className="hover:text-neutral-300 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/sufi-aqilah/" target="_blank" className="hover:text-neutral-300 transition-colors">LinkedIn</a>
            </div>
        </div>
      </div>
    </footer>
  );
}