export const myProjects = [
  {
    id: 1,
    title: "Secure AI Coding Challenge Generator",
    description:
      "An AI‑powered full‑stack web app that dynamically generates coding challenges and manages user sessions securely.",
    subDescription: [
      "Built a FastAPI backend with async endpoints for rapid challenge generation using the OpenAI API.",
      "Integrated Clerk for seamless authentication (OAuth, JWT, MFA) and role‑based access control.",
      "Developed a React frontend with Tailwind CSS for a clean, responsive UI and real‑time challenge rendering.",
      "Modeled and persisted challenge data in PostgreSQL via SQLAlchemy, ensuring reliable storage and retrieval.",
    ],
    href: "https://github.com/rockero241/Secure-AI-App-With-Auth",
    logo: "",
    image: "/assets/projects/secure-ai-app.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 3, name: "OpenAI", path: "/assets/logos/openai.svg" },
      { id: 4, name: "Clerk", path: "/assets/logos/clerk.svg" },
      { id: 5, name: "SQLAlchemy", path: "/assets/logos/sqlalchemy.svg" },
    ],
  },

  {
    id: 2,
    title: "Travel UI/UX Landing Page",
    description:
      "A visually rich, mobile‑responsive travel landing page built with Next.js and Tailwind CSS — designed as a front-end concept to demonstrate clean layout and modern design patterns.",
    subDescription: [
      "Recreated a travel-themed UI from a popular YouTube tutorial using modern tools like Next.js, Tailwind CSS, and TypeScript.",
      "Designed a responsive hero section, navigation bar, and structured layout to showcase various camp locations.",
      "Added sections for offline maps, adventure scheduling, AR tech highlights, and mobile app call-to-actions.",
      "Focused on pixel-perfect styling and layout consistency across mobile, tablet, and desktop viewports.",
    ],
    href: "https://github.com/rockero241/travel_app",
    logo: "",
    image: "/assets/projects/travel-ui-ux.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "TypeScript", path: "/assets/logos/typescript.svg" },
    ],
  },

  {
    id: 3,
    title: "AI Journal – Smart Journaling Companion",
    description:
      "A Flask‑based journaling app that provides instant, personalized AI feedback on your daily entries.",
    subDescription: [
      "Enabled daily entry logging with a distraction‑free, minimalist UI and mobile‑friendly design.",
      "Hooked into an AI feedback pipeline (sub‑4‑second response) to deliver tailored, emoji‑enhanced insights.",
      "Persisted entries in SQLite with migrations, enabling offline access and secure data storage.",
      "Refined AI tone to match user mood—venting, goal‑setting, or self‑reflection—avoiding generic advice.",
    ],
    href: "https://github.com/rockero241/journal_v01",
    logo: "",
    image: "/assets/projects/ai-journal.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "OpenAI", path: "/assets/logos/openai.svg" },
      { id: 4, name: "SQLite", path: "/assets/logos/sqlite.svg" },
    ],
  },
];
