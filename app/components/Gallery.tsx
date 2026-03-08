"use client";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const photos = [
  { src: "2q_lzo9zv", alt: "Custom PC Build", caption: "One of the custom PCs built for a customer in my own personal time" },
  { src: "3q_xi55qr", alt: "Best Sale Award", caption: "Awarded best sale of the month by Dell and Netcom" },
  { src: "4q_antrn8", alt: "PC Parts", caption: "Showcasing the PC parts before being built for a customer" },
  { src: "5q_nelyxe", alt: "Wood PLC Exhibition", caption: "Representing Wood PLC at the Climate Change & Energy Exhibition 2022" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<null | typeof photos[0]>(null);

  return (
    <section id="gallery" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Gallery</p>
        <h2 className="text-3xl font-bold text-white mb-12">Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.src} className="flex flex-col gap-2 cursor-pointer" onClick={() => setSelected(photo)}>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <CldImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed text-center">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center px-6"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-3xl aspect-square">
            <CldImage
              src={selected.src}
              alt={selected.alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-neutral-300 text-sm mt-4 text-center">{selected.caption}</p>
          <button className="mt-6 px-4 py-2 border border-neutral-600 text-neutral-400 text-sm rounded-lg hover:text-white hover:border-neutral-400 transition-colors">
            Close
          </button>
        </div>
      )}
    </section>
  );
}