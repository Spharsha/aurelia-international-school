"use client";

import { useState } from "react";

const links = [
  { label: "OUR STORY", href: "#story" },
  { label: "LEARNING", href: "#learning" },
  { label: "CAMPUS", href: "#campus" },
  { label: "JOURNAL", href: "#journal" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#fffaf6]">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-12">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#39254c] text-xl text-white">
            A
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.18em] text-[#39254c]">
              AURELIA
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-[#987d9f]">
              INTERNATIONAL SCHOOL
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-semibold tracking-[0.16em] text-[#624e6e] transition hover:text-[#e87961]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#admissions"
          className="hidden bg-[#e87961] px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-white transition hover:bg-[#39254c] lg:block"
        >
          JOIN OUR COMMUNITY ↗
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-sm font-bold tracking-widest text-[#39254c] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE ×" : "MENU +"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#eadfea] bg-[#f5eff8] px-6 py-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[#e5d9e9] py-4 text-xs font-semibold tracking-widest text-[#39254c]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-block bg-[#e87961] px-6 py-4 text-xs font-bold tracking-widest text-white"
          >
            JOIN OUR COMMUNITY ↗
          </a>
        </nav>
      )}
    </header>
  );
}
