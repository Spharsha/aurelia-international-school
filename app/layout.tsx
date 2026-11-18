import type { Metadata, Viewport } from "next";
import { Fredoka, Mulish } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vidyanjali International School | A Place to Learn and Grow",
  description:
    "Discover Vidyanjali International School, its academic programmes, campus facilities, admissions and student activities.",
};

export const viewport: Viewport = {
  themeColor: "#1b3a9e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fredoka.variable} ${mulish.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
