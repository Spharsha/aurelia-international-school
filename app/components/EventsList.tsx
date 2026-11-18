"use client";

import { useMemo, useState } from "react";
import { eventCategories, events, formatEventDay } from "../data";

const badge: Record<string, string> = {
  Academics: "bg-sky text-royal",
  Sports: "bg-leaf/15 text-leaf",
  Cultural: "bg-sun-soft text-royal-dark",
  Community: "bg-royal/10 text-royal-dark",
};

export default function EventsList() {
  const [category, setCategory] = useState("All");

  const groups = useMemo(() => {
    const filtered = events
      .filter((e) => category === "All" || e.category === category)
      .sort((a, b) => a.date.localeCompare(b.date));

    const map = new Map<string, typeof filtered>();
    for (const event of filtered) {
      const label = formatEventDay(event.date).monthLabel;
      map.set(label, [...(map.get(label) ?? []), event]);
    }
    return Array.from(map.entries());
  }, [category]);

  return (
    <>
      <div
        role="group"
        aria-label="Filter events"
        className="flex flex-wrap gap-2"
      >
        {eventCategories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold transition ${
              category === item
                ? "border-royal bg-royal text-white"
                : "border-line bg-white text-slate hover:border-royal"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-12" aria-live="polite">
        {groups.length === 0 && (
          <p className="rounded-2xl bg-sky p-6 text-sm text-slate">
            No events in this category.
          </p>
        )}

        {groups.map(([month, list]) => (
          <section key={month}>
            <h2 className="font-display text-2xl font-semibold text-royal">
              {month}
            </h2>
            <div className="mt-5 space-y-4">
              {list.map((event) => {
                const when = formatEventDay(event.date);
                return (
                  <article
                    key={event.id}
                    className="flex gap-5 rounded-3xl border border-line bg-white p-5 transition hover:border-sun hover:shadow-md sm:p-6"
                  >
                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-royal text-white">
                      <span className="font-display text-3xl font-semibold leading-none">
                        {when.day}
                      </span>
                      <span className="mt-1 text-xs font-bold tracking-widest text-sun">
                        {when.month.toUpperCase()}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold ${badge[event.category]}`}
                      >
                        {event.category}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-royal">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate">
                        {when.weekday} · {event.time} · {event.place}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink/80">
                        {event.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
