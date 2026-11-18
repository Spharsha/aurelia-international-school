"use client";

import { useCallback, useEffect, useState } from "react";
import { facilities } from "../data";
import SoftImage from "./SoftImage";

export default function CampusGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % facilities.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + facilities.length) % facilities.length,
      ),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const current = active === null ? null : facilities[active];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View ${item.title}`}
            className="group overflow-hidden rounded-3xl border border-line bg-white text-left transition hover:-translate-y-1 hover:border-sun hover:shadow-lg"
          >
            <SoftImage
              src={item.image}
              alt={item.title}
              emoji={item.emoji}
              width={700}
              height={560}
              className="aspect-[5/4] w-full"
            />
            <div className="p-5">
              <p className="text-[10px] font-bold tracking-[0.2em] text-leaf">
                {item.tag.toUpperCase()}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold text-royal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate">{item.text}</p>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fade-in fixed inset-0 z-50 flex flex-col bg-royal-dark/95 text-white"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-sun">
              {(active ?? 0) + 1} / {facilities.length}
            </p>
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-royal-dark"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div
            className="flex min-h-0 flex-1 items-center justify-center gap-3 px-3 sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-xl transition hover:bg-white hover:text-royal-dark"
            >
              ‹
            </button>

            <img
              src={current.image}
              alt={current.title}
              className="max-h-full min-w-0 max-w-full rounded-2xl object-contain"
            />

            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-xl transition hover:bg-white hover:text-royal-dark"
            >
              ›
            </button>
          </div>

          <div
            className="px-5 py-5 text-center sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] text-sun">
              {current.tag.toUpperCase()}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-2 text-sm text-white/75">{current.text}</p>
          </div>
        </div>
      )}
    </>
  );
}
