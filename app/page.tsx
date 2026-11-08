import Header from "./components/Header";
import ImageSlideshow from "./components/ImageSlideshow";
import JournalSlideshow from "./components/JournalSlideshow";

const learningPaths = [
  {
    number: "01",
    age: "AGES 3–6",
    title: "Discover",
    description:
      "A joyful beginning where curiosity leads the way and every little discovery matters.",
    color: "bg-[#F2EAF8]",
    accent: "text-[#80549A]",
  },
  {
    number: "02",
    age: "AGES 7–11",
    title: "Explore",
    description:
      "Children connect ideas, experiment with possibilities and discover their strengths.",
    color: "bg-[#FFF0EB]",
    accent: "text-[#D96850]",
  },
  {
    number: "03",
    age: "AGES 12–18",
    title: "Become",
    description:
      "Independent thinking, meaningful challenges and confidence for the wider world.",
    color: "bg-[#EAF2ED]",
    accent: "text-[#527D65]",
  },
];

const facilities = [
  {
    number: "01",
    title: "School Campus",
    category: "OUR ENVIRONMENT",
    description:
      "A welcoming campus designed to inspire exploration, connection and everyday discovery.",
    image: "/images/Gemini_Generated_Image_b3w1f6b3w1f6b3w1.png",
    alt: "Aurelia school campus",
  },
  {
    number: "02",
    title: "Computer Lab",
    category: "DIGITAL LEARNING",
    description:
      "A space where students explore technology, digital skills and new possibilities.",
    image: "/images/Gemini_Generated_Image_bm6ji1bm6ji1bm6j.png",
    alt: "Modern school computer laboratory",
  },
  {
    number: "03",
    title: "Sports Ground",
    category: "SPORTS & WELLNESS",
    description:
      "Room to play, participate, build teamwork and discover the joy of movement.",
    image: "/images/Gemini_Generated_Image_d9412id9412id941.png",
    alt: "School sports ground",
  },
  {
    number: "04",
    title: "School Library",
    category: "READING & RESEARCH",
    description:
      "A calm and inspiring place for stories, independent thinking and imagination.",
    image: "/images/Gemini_Generated_Image_dj347wdj347wdj34.png",
    alt: "School library",
  },
  {
    number: "05",
    title: "Cafeteria",
    category: "CAMPUS LIFE",
    description:
      "A friendly dining space where students come together and share their day.",
    image: "/images/Gemini_Generated_Image_lh5crrlh5crrlh5c.png",
    alt: "School cafeteria",
  },
  {
    number: "06",
    title: "Art & Music Room",
    category: "CREATIVE EXPRESSION",
    description:
      "An imaginative space for creativity, artistic expression and musical discovery.",
    image: "/images/Gemini_Generated_Image_tmqkkqtmqkkqtmqk.png",
    alt: "School art and music room",
  },
  {
    number: "07",
    title: "Science Laboratory",
    category: "EXPERIMENT & DISCOVER",
    description:
      "A hands-on learning environment where questions become experiments and ideas grow.",
    image: "/images/Gemini_Generated_Image_wod2f8wod2f8wod2.png",
    alt: "School science laboratory",
  },
  {
    number: "08",
    title: "Auditorium",
    category: "EVENTS & COMMUNITY",
    description:
      "A place for performances, presentations, celebrations and shared experiences.",
    image: "/images/Gemini_Generated_Image_ynu8gsynu8gsynu8.png",
    alt: "School auditorium",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Header />

      {/* HERO */}
      <section
        id="home"
        className="relative bg-white px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-20"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] font-bold tracking-[0.24em] text-[#80549A]">
              AN INDEPENDENT LEARNING COMMUNITY
            </p>
            <p className="text-[10px] tracking-widest text-[#80549A]">
              HYDERABAD · INDIA
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#F07860]">
                A different way to grow.
              </p>

              <h1 className="max-w-3xl text-6xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#39254C] md:text-8xl lg:text-[108px]">
                Think
                <br />
                beyond
                <br />
                <span className="font-serif font-normal italic text-[#F07860]">
                  the ordinary.
                </span>
              </h1>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <a
                  href="#story"
                  className="inline-flex w-fit items-center gap-8 bg-[#39254C] px-7 py-5 text-[10px] font-bold tracking-[0.16em] text-white transition hover:bg-[#F07860]"
                >
                  DISCOVER AURELIA
                  <span className="text-lg">↗</span>
                </a>

                <p className="max-w-xs text-sm leading-6 text-[#75677C]">
                  A place where questions matter, ideas take shape and every
                  learner finds their own direction.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-[#F2EAF8] md:h-52 md:w-52" />

              <ImageSlideshow />

              <div className="absolute -bottom-5 left-0 max-w-[230px] bg-[#F07860] p-6 text-white md:-left-8">
                <p className="text-3xl font-serif italic">Curiosity</p>
                <p className="mt-2 text-[9px] tracking-[0.18em]">
                  IS WHERE EVERYTHING BEGINS
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-wrap items-center justify-between gap-5 border-t border-[#E9DFF0] pt-6">
            <p className="text-[10px] tracking-[0.2em] text-[#80549A]">
              LEARN WITH PURPOSE
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[#80549A]">
              GROW WITH CONFIDENCE
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[#80549A]">
              LIVE WITH CURIOSITY
            </p>
          </div>
        </div>
      </section>

      {/* OUR BELIEF */}
      <section
        id="story"
        className="bg-[#39254C] px-6 py-24 text-white md:px-12 md:py-36"
      >
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#F5A18D]">
              01 / OUR BELIEF
            </p>

            <p className="mt-8 max-w-xs text-sm leading-7 text-[#E0D5E7]">
              Education should open doors, not simply prepare students to pass
              through them.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              We believe every child has a different kind of{" "}
              <span className="font-serif italic text-[#F5A18D]">
                brilliance.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#E0D5E7]">
              At Aurelia, learning is imagined as a journey of discovery. We
              bring thoughtful teaching, creative exploration and a supportive
              community together to help young minds find their voice.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section id="learning" className="bg-white px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] tracking-[0.22em] text-[#F07860]">
                02 / THE LEARNING JOURNEY
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-tight text-[#39254C] md:text-7xl">
                Grow at your
                <br />
                <span className="font-serif font-normal italic text-[#F07860]">
                  own pace.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#75677C]">
              Every stage brings new questions, new experiences and new ways to
              understand the world.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {learningPaths.map((path) => (
              <article
                key={path.number}
                className={`${path.color} flex min-h-[340px] flex-col justify-between p-8 transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-xl md:p-10 animate-[fadeInUp_0.9s_ease-out_both]`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${path.accent}`}>
                    {path.number}
                  </span>

                  <span className="text-[9px] tracking-[0.15em] text-[#75677C]">
                    {path.age}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-5xl italic text-[#39254C]">
                    {path.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#75677C]">
                    {path.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS AND FACILITIES */}
      <section
        id="campus"
        className="bg-[#F2EAF8] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1300px]">
          <p className="text-[10px] tracking-[0.22em] text-[#80549A]">
            03 / BEYOND THE CLASSROOM
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="text-5xl font-semibold tracking-tight text-[#39254C] md:text-7xl">
              A campus full
              <br />
              of{" "}
              <span className="font-serif italic text-[#F07860]">
                possibilities.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#75677C]">
              Explore the spaces that make learning an experience. From science
              and technology to sports, creativity and community.
            </p>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <article key={facility.number} className="group">
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    loading="lazy"
                    className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-semibold tracking-widest text-[#39254C]">
                    {facility.number}
                  </span>
                </div>

                <p className="mt-5 text-[9px] font-semibold tracking-[0.17em] text-[#D96850]">
                  {facility.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#39254C]">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#75677C]">
                  {facility.description}
                </p>

                <div className="mt-5 h-px w-full bg-[#DCCCE6] transition duration-300 group-hover:bg-[#F07860]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section
        id="journal"
        className="bg-[#FFF7F3] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1300px]">
          <p className="text-[10px] tracking-[0.22em] text-[#D96850]">
            04 / NOTES FROM OUR WORLD
          </p>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-5xl font-semibold tracking-tight text-[#39254C] md:text-7xl">
              The school
              <br />
              <span className="font-serif italic text-[#F07860]">journal.</span>
            </h2>

            <p className="max-w-xs text-sm leading-7 text-[#75677C]">
              A glimpse into the ideas, creativity and everyday moments that
              make a learning community.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="group">
              <JournalSlideshow />

              <p className="mt-5 text-[9px] tracking-[0.18em] text-[#D96850]">
                LEARNING / DEMO STORY
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#39254C]">
                The power of asking better questions.
              </h3>
            </article>

            <article className="group">
              <JournalSlideshow />

              <p className="mt-5 text-[9px] tracking-[0.18em] text-[#D96850]">
                COMMUNITY / DEMO STORY
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#39254C]">
                Small moments that shape big ideas.
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section
        id="admissions"
        className="bg-[#F07860] px-6 py-24 text-white md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[10px] tracking-[0.25em]">
            YOUR NEXT CHAPTER STARTS HERE
          </p>

          <h2 className="mt-7 text-5xl font-semibold leading-tight tracking-tight md:text-8xl">
            Come curious.
            <br />
            Leave inspired.
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white">
            Discover a learning community built around curiosity, confidence and
            possibility.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-8 bg-[#39254C] px-8 py-5 text-[10px] font-bold tracking-[0.16em] transition hover:bg-white hover:text-[#39254C]"
          >
            EXPLORE ADMISSIONS
            <span className="text-lg">↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <section
        id="contact"
        className="bg-[#39254C] px-6 py-20 text-white md:px-12"
      >
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] tracking-[0.22em] text-[#F5A18D]">
                AURELIA INTERNATIONAL SCHOOL
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                Let curiosity
                <br />
                <span className="font-serif italic text-[#F5A18D]">
                  lead the way.
                </span>
              </h2>
            </div>

            <a
              href="#school-contact-details"
              className="w-fit border-b border-[#F5A18D] pb-3 text-xs tracking-widest text-white transition hover:text-[#F5A18D]"
            >
              CONTACT THE ADMISSIONS TEAM ↗
            </a>
          </div>

          <div
            id="school-contact-details"
            className="mt-16 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3"
          >
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#F5A18D]">
                OUR CAMPUS
              </p>
              <p className="mt-4 text-sm leading-7 text-white/80">
                Aurelia Learning Campus,
                <br />
                Hyderabad, Telangana, India.
                <br />
                <span className="text-xs text-white/50">
                  (Fictional Demo Address)
                </span>
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#F5A18D]">
                CALL OUR TEAM
              </p>
              <p className="mt-4 text-sm text-white/80">+91 00000 00000</p>
              <p className="mt-2 text-xs text-white/50">(Demo Number)</p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#F5A18D]">
                EMAIL US
              </p>
              <a
                href="mailto:admissions@aurelia-demo.example"
                className="mt-4 inline-block text-sm text-white/80 transition hover:text-[#F5A18D]"
              >
                admissions@aurelia-demo.example
              </a>
              <p className="mt-2 text-xs text-white/50">(Demo Email Address)</p>
            </div>
          </div>

          <div className="mt-16 border-t border-white/20 pt-6">
            <div className="flex flex-wrap justify-between gap-4 text-[9px] tracking-[0.15em] text-white/70">
              <span>© 2026 AURELIA INTERNATIONAL SCHOOL</span>
              <span>PORTFOLIO DEMONSTRATION · NOT A REAL SCHOOL</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
