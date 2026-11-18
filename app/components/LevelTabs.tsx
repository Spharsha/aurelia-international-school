"use client";

import Link from "next/link";
import { useState } from "react";
import { levels } from "../data";

export default function LevelTabs() {
  const [selected, setSelected] = useState(levels[0].id);
  const level = levels.find((l) => l.id === selected) ?? levels[0];

  return (
    <div>
      <div
        role="group"
        aria-label="Choose a school level"
        className="flex flex-wrap gap-3"
      >
        {levels.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected === item.id}
            onClick={() => setSelected(item.id)}
            className={`rounded-full border-2 px-6 py-3 text-sm font-bold transition ${
              selected === item.id
                ? "border-royal bg-royal text-white"
                : "border-line bg-white text-slate hover:border-royal"
            }`}
          >
            {item.label}
            <span className="ml-2 hidden text-xs font-semibold opacity-80 sm:inline">
              {item.classes}
            </span>
          </button>
        ))}
      </div>

      <div
        className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        aria-live="polite"
      >
        <div className="rounded-3xl bg-sky p-7 sm:p-9">
          <p className="text-xs font-bold tracking-[0.2em] text-leaf">
            {level.classes.toUpperCase()}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-royal sm:text-4xl">
            {level.label}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate">{level.focus}</p>

          <p className="mt-6 text-sm font-bold text-royal">
            Typical school day
          </p>
          <p className="mt-1 text-sm text-slate">{level.timing}</p>

          <Link
            href="/admissions"
            className="mt-8 inline-block rounded-full bg-royal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-royal-dark"
          >
            Apply for {level.label}
          </Link>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-line bg-white p-7">
            <h3 className="font-display text-xl font-semibold text-royal">
              Subjects
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {level.subjects.map((subject) => (
                <li
                  key={subject}
                  className="rounded-full bg-sun-soft px-4 py-2 text-sm font-semibold text-royal-dark"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-line bg-white p-7">
            <h3 className="font-display text-xl font-semibold text-royal">
              Beyond the books
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {level.activities.map((activity) => (
                <li key={activity} className="flex gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
