"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/Gemini_Generated_Image_wod2f8wod2f8wod2.webp",
    alt: "Students exploring science and experiments",
  },
  {
    src: "/images/Gemini_Generated_Image_tmqkkqtmqkkqtmqk.webp",
    alt: "Creative art and music learning space",
  },
  {
    src: "/images/Gemini_Generated_Image_dj347wdj347wdj34.webp",
    alt: "Students reading in the school library",
  },
  {
    src: "/images/Gemini_Generated_Image_bm6ji1bm6ji1bm6j.webp",
    alt: "Students learning in the computer lab",
  },
];

export default function JournalSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[270px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 right-4 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setCurrent(index)}
            aria-label={`Show journal image ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? "w-7 bg-white" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
