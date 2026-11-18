import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LevelTabs from "../components/LevelTabs";

export const metadata: Metadata = {
  title: "Academics | Vidyanjali International School (Demo)",
  description:
    "Primary, middle and secondary school programmes. Demo school website with sample content.",
};

const approach = [
  {
    emoji: "🧩",
    title: "Concept first",
    text: "We make sure children understand ideas, not just memorise answers.",
  },
  {
    emoji: "🛠️",
    title: "Hands-on projects",
    text: "Experiments, models and presentations bring lessons to life.",
  },
  {
    emoji: "📈",
    title: "Regular feedback",
    text: "Parents get clear updates, and teachers support each child's pace.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-xs font-bold tracking-[0.25em] text-leaf">
            ACADEMICS
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-royal sm:text-6xl">
            Learning that grows with your child
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate">
            Choose a stage to see subjects, activities and the school day. Our
            curriculum is CBSE-aligned (sample information for this demo).
          </p>

          <div className="mt-10">
            <LevelTabs />
          </div>
        </section>

        <section className="bg-sky px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-display text-4xl font-semibold text-royal sm:text-5xl">
              How we teach
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {approach.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 text-center"
                >
                  <span
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sun-soft text-2xl"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-royal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 text-center sm:px-8">
          <h2 className="font-display text-4xl font-semibold text-royal sm:text-5xl">
            Ready to join us?
          </h2>
          <Link
            href="/admissions"
            className="mt-8 inline-block rounded-full bg-royal px-9 py-4 text-sm font-bold text-white transition hover:bg-royal-dark"
          >
            Apply Now
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
