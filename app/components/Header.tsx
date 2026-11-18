"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal ring-4 ring-sun">
        <span className="font-display text-xl font-semibold text-white">V</span>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-xl font-semibold text-royal">
          Vidyanjali
        </span>
        <span className="block text-[9px] font-bold tracking-[0.2em] text-slate">
          INTERNATIONAL SCHOOL · PUNE
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-sun px-4 py-2 text-center text-xs font-bold text-royal-dark sm:text-sm">
        🎓 Admissions open for 2027–28 ·{" "}
        <Link href="/admissions" className="underline underline-offset-2">
          Apply now
        </Link>
      </div>

      <div className="border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <Link
            href="/"
            aria-label="Vidyanjali home"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-sky text-royal"
                      : "text-slate hover:bg-sky hover:text-royal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/admissions"
              className="rounded-full bg-royal px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-royal-dark"
            >
              Apply Now
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="school-menu"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="school-menu"
          aria-label="Mobile"
          className="fade-in max-h-[calc(100vh-7rem)] overflow-y-auto border-b border-line bg-white px-4 pb-6 pt-2 shadow-xl xl:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line py-4 text-base font-bold ${
                pathname === link.href ? "text-royal" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
