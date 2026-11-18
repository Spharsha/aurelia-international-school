import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import SoftImage from "./components/SoftImage";
import { events, facilities, formatEventDay } from "./data";

const reasons = [
  {
    emoji: "👩‍🏫",
    title: "Caring teachers",
    text: "Small groups and teachers who know every child by name.",
  },
  {
    emoji: "🛡️",
    title: "Safe campus",
    text: "A secure, green campus with CCTV, trained staff and safe transport.",
  },
  {
    emoji: "🎯",
    title: "Learning by doing",
    text: "Activities, projects and experiments that make lessons stick.",
  },
  {
    emoji: "🏏",
    title: "Sports and arts",
    text: "Cricket, football, music, dance and art for every child.",
  },
];

const levelCards = [
  {
    title: "Primary",
    sub: "Nursery to Class 5",
    text: "Joyful, activity-based learning.",
    color: "bg-sky",
  },
  {
    title: "Middle School",
    sub: "Class 6 to 8",
    text: "Concepts, projects and clubs.",
    color: "bg-sun-soft",
  },
  {
    title: "Secondary",
    sub: "Class 9 to 10",
    text: "Board preparation with guidance.",
    color: "bg-white",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-sky to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-2 md:pb-24 md:pt-16">
            <div>
              <p className="inline-flex rounded-full bg-sun px-4 py-2 text-xs font-bold text-royal-dark">
                🎓 Admissions open · 2027–28
              </p>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-royal sm:text-6xl lg:text-7xl">
                A happy place to <span className="text-leaf">learn</span> and{" "}
                <span className="text-sun [text-shadow:0_2px_0_#1b3a9e]">
                  grow.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate">
                Vidyanjali International School in Pune brings caring teachers,
                a safe campus and joyful learning together, from Nursery to
                Class 10.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="rounded-full bg-royal px-8 py-4 text-center text-sm font-bold text-white shadow-md transition hover:bg-royal-dark"
                >
                  Apply Now
                </Link>
                <Link
                  href="/campus"
                  className="rounded-full border-2 border-royal px-8 py-4 text-center text-sm font-bold text-royal transition hover:bg-royal hover:text-white"
                >
                  Explore Campus
                </Link>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2 text-xs font-bold text-royal-dark">
                <li className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Nursery – Class 10
                </li>
                <li className="rounded-full bg-white px-4 py-2 shadow-sm">
                  CBSE-aligned (sample)
                </li>
                <li className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Pune, Maharashtra
                </li>
              </ul>
            </div>

            <HeroSlider />
          </div>
        </section>

        {/* Why */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
          <p className="text-center text-xs font-bold tracking-[0.25em] text-leaf">
            WHY VIDYANJALI
          </p>
          <h2 className="mt-3 text-center font-display text-4xl font-semibold text-royal sm:text-5xl">
            Where every child shines
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-3xl border-2 border-line bg-white p-7 text-center transition hover:-translate-y-1 hover:border-sun hover:shadow-lg"
              >
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-sun-soft text-3xl mx-auto"
                  aria-hidden="true"
                >
                  {reason.emoji}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-royal">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Levels */}
        <section className="bg-royal text-white">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block h-10 w-full text-white sm:h-16"
            aria-hidden="true"
          >
            <path
              d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>

          <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8">
            <p className="text-xs font-bold tracking-[0.25em] text-sun">
              LEARNING JOURNEY
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              Three stages, one big family
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {levelCards.map((level) => (
                <Link
                  key={level.title}
                  href="/academics"
                  className={`${level.color} rounded-3xl p-8 text-ink transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-slate">
                    {level.sub.toUpperCase()}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-royal">
                    {level.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate">
                    {level.text}
                  </p>
                  <span className="mt-6 inline-block text-sm font-bold text-royal">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Campus */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-leaf">
                OUR CAMPUS
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-royal sm:text-5xl">
                A campus full of possibilities
              </h2>
            </div>
            <Link
              href="/campus"
              className="text-sm font-bold text-royal underline underline-offset-4"
            >
              See all facilities →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href="/campus"
                className="group overflow-hidden rounded-3xl border-2 border-line bg-white transition hover:-translate-y-1 hover:border-sun hover:shadow-lg"
              >
                <SoftImage
                  src={item.image}
                  alt={item.title}
                  emoji={item.emoji}
                  width={600}
                  height={480}
                  className="aspect-[5/4] w-full"
                />
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-royal">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate">{item.tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="bg-sun-soft px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] text-royal">
                  COMING UP
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-royal sm:text-5xl">
                  Upcoming events
                </h2>
              </div>
              <Link
                href="/events"
                className="text-sm font-bold text-royal underline underline-offset-4"
              >
                Full calendar →
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {events.slice(0, 3).map((event) => {
                const when = formatEventDay(event.date);
                return (
                  <article
                    key={event.id}
                    className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-royal text-white">
                      <span className="font-display text-2xl font-semibold leading-none">
                        {when.day}
                      </span>
                      <span className="mt-1 text-[10px] font-bold tracking-widest text-sun">
                        {when.month.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-royal">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate">
                        {event.time} · {event.place}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Admission CTA */}
        <section className="px-5 py-16 text-center sm:px-8 md:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight text-royal sm:text-5xl">
            Come curious. Leave inspired.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-slate">
            Apply online in three easy steps. It takes about five minutes.
          </p>
          <Link
            href="/admissions"
            className="mt-8 inline-block rounded-full bg-sun px-10 py-4 text-sm font-bold text-royal-dark shadow-md transition hover:brightness-95"
          >
            Start Your Application
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
