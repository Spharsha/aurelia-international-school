"use client";

import { useEffect, useState } from "react";
import { images } from "../data";

const slides = [
  {
    src: images.campus,
    alt: "Vidyanjali school campus",
    caption: "Our green campus",
  },
  {
    src: images.computer,
    alt: "Students in the computer lab",
    caption: "Digital learning",
  },
  {
    src: images.sports,
    alt: "School sports ground",
    caption: "Play and sports",
  },
  { src: images.library, alt: "School library", caption: "Reading corner" },
  {
    src: images.science,
    alt: "Science laboratory",
    caption: "Hands-on science",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border-4 border-sun bg-gradient-to-br from-sky to-sun-soft shadow-xl">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1000}
            height={750}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
            aria-hidden={current !== index}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-royal-dark/80 to-transparent p-5">
          <p
            className="font-display text-lg font-medium text-white"
            aria-live="polite"
          >
            {slides[current].caption}
          </p>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={current === index}
                className={`h-3 rounded-full transition-all ${
                  current === index ? "w-8 bg-sun" : "w-3 bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-full bg-sun/60"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-royal/15"
      />
    </div>
  );
}
