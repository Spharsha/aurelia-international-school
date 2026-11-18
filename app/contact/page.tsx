import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Vidyanjali International School (Demo)",
  description:
    "Contact the school office. Demo school website with sample content.",
};

const details = [
  {
    emoji: "📍",
    label: "CAMPUS",
    lines: ["Sample Address, Baner", "Pune, Maharashtra"],
  },
  {
    emoji: "🕘",
    label: "OFFICE HOURS",
    lines: ["Monday – Saturday", "9:00 AM – 4:00 PM"],
  },
  { emoji: "⏱️", label: "REPLY TIME", lines: ["Within one working day"] },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-leaf">
              CONTACT
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] text-royal sm:text-6xl">
              We would love to hear from you
            </h1>
            <p className="mt-5 max-w-md text-base leading-8 text-slate">
              Questions about admissions, fees or a campus visit? Send us a
              message.
            </p>

            <div className="mt-10 space-y-6">
              {details.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sun-soft text-xl"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-leaf">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6">
                      {item.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-slate">
              Address and timings on this demo are placeholders.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-line bg-white p-6 shadow-sm sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-royal">
              Send a message
            </h2>
            <p className="mb-8 mt-2 text-sm text-slate">
              Share your email or phone number, and a short message.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
