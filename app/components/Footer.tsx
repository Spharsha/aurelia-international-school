import Link from "next/link";

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-sun hover:text-sun";

export default function Footer() {
  return (
    <footer className="bg-royal-dark px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-semibold">Vidyanjali</p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.25em] text-sun">
              INTERNATIONAL SCHOOL · PUNE
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              A happy, caring school where every child learns with curiosity
              and grows with confidence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-sun">EXPLORE</h3>
            <div className="flex flex-col gap-3 text-sm text-white/75">
              <Link href="/about" className="transition hover:text-white">About</Link>
              <Link href="/academics" className="transition hover:text-white">Academics</Link>
              <Link href="/admissions" className="transition hover:text-white">Admissions</Link>
              <Link href="/campus" className="transition hover:text-white">Campus</Link>
              <Link href="/events" className="transition hover:text-white">Events</Link>
              <Link href="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-sun">FOLLOW</h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className={socialClass}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.8v8h3.1z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={socialClass}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={socialClass}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <path d="M10 9l5 3-5 3z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-white/55 md:flex-row">
          <p>© 2026 Vidyanjali International School. All rights reserved.</p>
          <p className="text-sun">Demo website · Sample content · Not a real school</p>
        </div>
      </div>
    </footer>
  );
}