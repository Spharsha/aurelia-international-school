import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CampusGallery from "../components/CampusGallery";

export const metadata: Metadata = {
  title: "Campus | Vidyanjali International School (Demo)",
  description:
    "Classrooms, labs, library, sports ground and more. Demo school website with sample content.",
};

export default function CampusPage() {
  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-xs font-bold tracking-[0.25em] text-leaf">
            OUR CAMPUS
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-royal sm:text-6xl">
            Spaces made for learning and play
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate">
            Tap any photo to see it bigger. Use the arrows to browse all eight
            facilities.
          </p>

          <div className="mt-10">
            <CampusGallery />
          </div>
        </section>

        <section className="bg-sun px-5 py-14 text-center text-royal-dark sm:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            See it in person
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base">
            Book a campus tour and meet our teachers.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-royal px-9 py-4 text-sm font-bold text-white transition hover:bg-royal-dark"
          >
            Plan a visit
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
