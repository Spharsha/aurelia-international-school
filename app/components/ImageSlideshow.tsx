"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/Gemini_Generated_Image_b3w1f6b3w1f6b3w1.webp",
    alt: "Vidyanjali school campus",
  },
  {
    src: "/images/Gemini_Generated_Image_bm6ji1bm6ji1bm6j.webp",
    alt: "Students learning technology",
  },
  {
    src: "/images/Gemini_Generated_Image_d9412id9412id941.webp",
    alt: "School sports ground",
  },
  {
    src: "/images/Gemini_Generated_Image_dj347wdj347wdj34.webp",
    alt: "School library",
  },
  {
    src: "/images/Gemini_Generated_Image_wod2f8wod2f8wod2.webp",
    alt: "Science laboratory",
  },
];

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-t-[48%] rounded-b-[8px] md:h-[600px]">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setCurrent(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? "w-7 bg-white" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
