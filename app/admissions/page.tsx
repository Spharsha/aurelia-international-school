import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdmissionForm from "../components/AdmissionForm";
import { admissionFaqs } from "../data";

export const metadata: Metadata = {
  title: "Admissions | Vidyanjali International School (Demo)",
  description:
    "Apply online for Nursery to Class 10 in three easy steps. Demo school website with sample content.",
};

const admissionSteps = [
  {
    number: "1",
    title: "Apply online",
    text: "Fill the three-step form. It takes about five minutes.",
  },
  {
    number: "2",
    title: "Meet and greet",
    text: "We invite you and your child for a friendly interaction.",
  },
  {
    number: "3",
    title: "Confirm admission",
    text: "Complete the documents and fees to secure your seat.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gradient-to-b from-sky to-white">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
            <p className="text-xs font-bold tracking-[0.25em] text-leaf">
              ADMISSIONS 2027–28
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] text-royal sm:text-6xl">
              Start your child&apos;s journey
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate">
              Admissions are open from Nursery to Class 10. Send your
              application online, and our team will contact you.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border-2 border-line bg-white p-6 shadow-sm sm:p-10">
            <AdmissionForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl bg-royal p-7 text-white">
              <h2 className="font-display text-2xl font-semibold">
                How admission works
              </h2>
              <ol className="mt-5 space-y-5">
                {admissionSteps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun font-display font-semibold text-royal-dark">
                      {step.number}
                    </span>
                    <span>
                      <span className="block font-bold">{step.title}</span>
                      <span className="text-sm text-white/75">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-royal">
                Common questions
              </h2>
              <div className="mt-4 space-y-3">
                {admissionFaqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border-2 border-line bg-white p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span
                        aria-hidden="true"
                        className="text-xl text-royal group-open:hidden"
                      >
                        +
                      </span>
                      <span
                        aria-hidden="true"
                        className="hidden text-xl text-royal group-open:inline"
                      >
                        −
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}
