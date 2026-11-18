import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SoftImage from "../components/SoftImage";
import { images } from "../data";

export const metadata: Metadata = {
  title: "About | Vidyanjali International School (Demo)",
  description:
    "Our story, values and principal's message. Demo school website with sample content.",
};

const values = [
  {
    emoji: "💛",
    title: "Kindness",
    text: "We teach children to care for others and for the world around them.",
  },
  {
    emoji: "🔍",
    title: "Curiosity",
    text: "Questions are always welcome. They are where learning begins.",
  },
  {
    emoji: "💪",
    title: "Courage",
    text: "We encourage children to try, to fall, and to try again.",
  },
  {
    emoji: "🤝",
    title: "Respect",
    text: "Every child, teacher and family is treated with respect.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gradient-to-b from-sky to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-leaf">
                ABOUT US
              </p>
              <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] text-royal sm:text-6xl">
                A school with heart
              </h1>
              <p className="mt-6 text-base leading-8 text-slate">
                Vidyanjali International School was founded on one simple
                belief: children learn best when they feel happy, safe and
                understood. Our teachers combine strong academics with play,
                art, sport and kindness.
              </p>
              <p className="mt-4 text-base leading-8 text-slate">
                Located in Pune, we welcome families from all backgrounds and
                help every child discover what makes them special.
              </p>
            </div>

            <div className="group">
              <SoftImage
                src={images.campus}
                alt="The Vidyanjali campus"
                emoji="🏫"
                width={1000}
                height={800}
                className="aspect-[5/4] w-full rounded-[2.5rem] border-4 border-sun"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20">
          <div className="rounded-3xl bg-royal p-8 text-white sm:p-10">
            <p className="text-xs font-bold tracking-[0.25em] text-sun">
              OUR MISSION
            </p>
            <p className="mt-4 font-display text-2xl font-medium leading-snug sm:text-3xl">
              To give every child a joyful start, strong foundations and the
              confidence to chase their dreams.
            </p>
          </div>
          <div className="rounded-3xl bg-sun p-8 text-royal-dark sm:p-10">
            <p className="text-xs font-bold tracking-[0.25em]">OUR VISION</p>
            <p className="mt-4 font-display text-2xl font-medium leading-snug sm:text-3xl">
              Kind, curious and capable young people who make a positive
              difference in their communities.
            </p>
          </div>
        </section>

        <section className="bg-sky px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-display text-4xl font-semibold text-royal sm:text-5xl">
              Our values
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl bg-white p-7 text-center"
                >
                  <span
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sun-soft text-2xl"
                    aria-hidden="true"
                  >
                    {value.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-royal">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
          <div className="rounded-3xl border-2 border-line bg-white p-8 sm:p-12">
            <p className="text-xs font-bold tracking-[0.25em] text-leaf">
              PRINCIPAL&apos;S MESSAGE
            </p>
            <p className="mt-5 font-display text-2xl font-medium leading-relaxed text-royal sm:text-3xl">
              &ldquo;When a child feels happy and safe, learning follows
              naturally. Our job is to protect that joy and help it grow into
              lifelong curiosity.&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-royal font-display text-lg font-semibold text-white">
                AD
              </span>
              <div>
                <p className="font-bold">Mrs. Anjali Deshmukh</p>
                <p className="text-sm text-slate">Principal (sample profile)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-royal px-5 py-14 text-center text-white sm:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Visit us and see for yourself
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sun px-9 py-4 text-sm font-bold text-royal-dark transition hover:brightness-95"
          >
            Plan a campus visit
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
