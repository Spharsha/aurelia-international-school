export const images = {
  campus: "/images/Gemini_Generated_Image_b3w1f6b3w1f6b3w1.png",
  computer: "/images/Gemini_Generated_Image_bm6ji1bm6ji1bm6j.png",
  sports: "/images/Gemini_Generated_Image_d9412id9412id941.png",
  library: "/images/Gemini_Generated_Image_dj347wdj347wdj34.png",
  cafeteria: "/images/Gemini_Generated_Image_lh5crrlh5crrlh5c.png",
  art: "/images/Gemini_Generated_Image_tmqkkqtmqkkqtmqk.png",
  science: "/images/Gemini_Generated_Image_wod2f8wod2f8wod2.png",
  auditorium: "/images/Gemini_Generated_Image_ynu8gsynu8gsynu8.png",
};

export const facilities = [
  {
    id: "campus",
    title: "School Campus",
    tag: "Our environment",
    emoji: "🏫",
    image: images.campus,
    text: "A safe, green and welcoming campus where children love to come every morning.",
  },
  {
    id: "computer",
    title: "Computer Lab",
    tag: "Digital learning",
    emoji: "💻",
    image: images.computer,
    text: "Modern computers where students learn coding, typing and digital skills.",
  },
  {
    id: "sports",
    title: "Sports Ground",
    tag: "Sports and wellness",
    emoji: "⚽",
    image: images.sports,
    text: "Open space for cricket, football, athletics and everyday play.",
  },
  {
    id: "library",
    title: "School Library",
    tag: "Reading and research",
    emoji: "📚",
    image: images.library,
    text: "A calm corner with stories, reference books and quiet reading time.",
  },
  {
    id: "cafeteria",
    title: "Cafeteria",
    tag: "Campus life",
    emoji: "🍽️",
    image: images.cafeteria,
    text: "Fresh, hygienic meals in a friendly space where students share their day.",
  },
  {
    id: "art",
    title: "Art and Music Room",
    tag: "Creative expression",
    emoji: "🎨",
    image: images.art,
    text: "A colourful room for painting, music, dance and everything creative.",
  },
  {
    id: "science",
    title: "Science Laboratory",
    tag: "Experiment and discover",
    emoji: "🔬",
    image: images.science,
    text: "Hands-on experiments that turn questions into discoveries.",
  },
  {
    id: "auditorium",
    title: "Auditorium",
    tag: "Events and community",
    emoji: "🎭",
    image: images.auditorium,
    text: "A hall for annual day, assemblies, plays and celebrations.",
  },
];

export const classes = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

// Sample minimum age (in years) as on 31 March 2027
export const minAges = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const levels = [
  {
    id: "primary",
    label: "Primary",
    classes: "Nursery to Class 5",
    focus:
      "Joyful, activity-based learning that builds curiosity, language and confidence.",
    subjects: [
      "English",
      "Hindi and Marathi",
      "Mathematics",
      "Environmental Science",
      "Computer Basics",
      "Art and Craft",
    ],
    activities: [
      "Story time",
      "Show and tell",
      "Nature walks",
      "Music and rhythm",
    ],
    timing: "8:30 AM – 2:30 PM",
  },
  {
    id: "middle",
    label: "Middle School",
    classes: "Class 6 to Class 8",
    focus:
      "Concept-based learning that connects subjects and encourages questions and projects.",
    subjects: [
      "English",
      "Hindi and Marathi",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Science",
    ],
    activities: [
      "Science fair",
      "Debate club",
      "Robotics club",
      "Inter-house sports",
    ],
    timing: "8:15 AM – 3:00 PM",
  },
  {
    id: "secondary",
    label: "Secondary",
    classes: "Class 9 to Class 10",
    focus:
      "Focused board preparation with career guidance, labs and mentoring.",
    subjects: [
      "English",
      "Hindi or Marathi",
      "Mathematics",
      "Science",
      "Social Science",
      "Information Technology",
    ],
    activities: [
      "Career counselling",
      "Olympiad coaching",
      "Lab practicals",
      "Leadership programme",
    ],
    timing: "8:00 AM – 3:30 PM",
  },
];

export type SchoolEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: "Academics" | "Sports" | "Cultural" | "Community";
  place: string;
  text: string;
};

export const events: SchoolEvent[] = [
  {
    id: "science-fair",
    title: "Science Fair",
    date: "2026-11-28",
    time: "10:00 AM",
    category: "Academics",
    place: "Science Laboratory",
    text: "Students from Class 4 to 10 present working models and experiments.",
  },
  {
    id: "football",
    title: "Inter-house Football",
    date: "2026-12-05",
    time: "9:00 AM",
    category: "Sports",
    place: "Sports Ground",
    text: "The four houses compete for the winter football trophy.",
  },
  {
    id: "annual-day",
    title: "Annual Day",
    date: "2026-12-19",
    time: "5:00 PM",
    category: "Cultural",
    place: "Auditorium",
    text: "Music, dance and drama performances by students of every class.",
  },
  {
    id: "olympiad",
    title: "Maths Olympiad",
    date: "2027-01-10",
    time: "10:30 AM",
    category: "Academics",
    place: "Classrooms",
    text: "A friendly mathematics contest for Classes 3 to 10.",
  },
  {
    id: "republic-day",
    title: "Republic Day Celebration",
    date: "2027-01-26",
    time: "8:30 AM",
    category: "Community",
    place: "Main Ground",
    text: "Flag hoisting, march past and patriotic songs with parents invited.",
  },
  {
    id: "open-house",
    title: "Admissions Open House",
    date: "2027-02-13",
    time: "11:00 AM",
    category: "Community",
    place: "Campus",
    text: "Meet our teachers, tour the campus and ask your questions.",
  },
  {
    id: "sports-day",
    title: "Annual Sports Day",
    date: "2027-03-06",
    time: "8:00 AM",
    category: "Sports",
    place: "Sports Ground",
    text: "Races, relays and team games for every age group.",
  },
  {
    id: "art-fest",
    title: "Art and Music Fest",
    date: "2027-03-20",
    time: "4:00 PM",
    category: "Cultural",
    place: "Art and Music Room",
    text: "An exhibition of student art with live music performances.",
  },
];

export const eventCategories = [
  "All",
  "Academics",
  "Sports",
  "Cultural",
  "Community",
];

export function formatEventDay(date: string) {
  const d = new Date(`${date}T00:00:00`);
  return {
    day: d.toLocaleDateString("en-IN", { day: "numeric" }),
    month: d.toLocaleDateString("en-IN", { month: "short" }),
    weekday: d.toLocaleDateString("en-IN", { weekday: "long" }),
    monthLabel: d.toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    }),
  };
}

export const admissionFaqs = [
  {
    q: "When do admissions open?",
    a: "Admissions for the next academic year open in the winter. You can send your application online at any time.",
  },
  {
    q: "What documents are needed?",
    a: "Birth certificate, previous school report card (for Class 1 and above), Aadhaar copy and two passport photos. We will remind you after your application.",
  },
  {
    q: "Is there an entrance test?",
    a: "For Nursery to Class 2 we hold a friendly interaction. From Class 3 onwards there is a short, simple assessment.",
  },
  {
    q: "How can I visit the campus?",
    a: "Please send an enquiry, or come to our Admissions Open House. Our team will arrange a campus tour.",
  },
  {
    q: "Which boards do you follow?",
    a: "Our curriculum is CBSE-aligned (sample information for this demo).",
  },
];

export function classify(value: string): "email" | "phone" | null {
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "email";
  const digits = v.replace(/[\s\-()+]/g, "");
  if (/^(91)?[6-9]\d{9}$/.test(digits)) return "phone";
  return null;
}
