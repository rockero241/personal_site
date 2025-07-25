export const myProjects = [
  {
    id: 1,
    title: "Secure Coding Challenge App",
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
      { id: 3, name: "OpenAI", path: "/assets/logos/openai.png" },
      { id: 4, name: "Clerk", path: "/assets/logos/clerk.png" },
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
    href: "https://lolivas.com/projects/travel-app/",
    logo: "",
    image: "/assets/projects/travel-ui-ux.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.png" },
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
      { id: 2, name: "Flask", path: "/assets/logos/flask.png" },
      { id: 3, name: "OpenAI", path: "/assets/logos/openai.png" },
      { id: 4, name: "SQLite", path: "/assets/logos/sqlite.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/l0livas/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/l0livas/",
    icon: "/assets/socials/instagram.svg",
  },
];

  export const experiences = [
  {
    title: "Full-Stack Software Engineering Intern",
    job: "AutoZone",
    date: "Jun 2025 – Present",
    contents: [
      "Developing a full-stack enterprise application using React, Java Spring Boot, and Oracle DBs.",
      "Deployed app infrastructure to Google Kubernetes Engine (GKE) with Docker containers and Kubernetes orchestration.",
      "Built and presented a business-aligned proof of concept (POC) to AutoZone leadership, demonstrating product-market fit and scalability.",
      "Integrated AI functionality by working with Google Agents and external APIs to augment user experience.",
      "Collaborating in Agile Scrum sprints with cross-functional teams; contributing to code reviews, planning, and testing.",
    ],
  },
  {
    title: "Data Structures TA",
    job: "Berea College",
    date: "May 2025 – Present",
    contents: [
      "Tutoring and mentoring students in C++ Data Structures, including linked lists, trees, and hash tables.",
      "Guiding students through algorithm design and Big-O analysis to boost understanding and LeetCode prep.",
      "Provided 1-on-1 support debugging recursive functions, search/sort algorithms, and space/time complexity problems.",
    ],
  },
  {
    title: "Lead Samsung Experience Consultant",
    job: "2020 Companies",
    date: "Feb 2024 – Aug 2024",
    contents: [
      "Led a team of consultants, achieving $500K+ in quarterly revenue through training, demos, and performance coaching.",
      "Oversaw cross-functional execution between Samsung and Best Buy, ensuring brand alignment and high-impact displays.",
      "Delivered product presentations and customer engagement that improved sales KPIs across the district.",
    ],
  },
  {
    title: "Regional Sales Representative",
    job: "ActionLink (Intel)",
    date: "Mar 2023 – Feb 2024",
    contents: [
      "Owned Intel’s product performance across a full territory, increasing sales by 250% through strategy and execution.",
      "Acted as the on-site Intel SME, training retail staff and handling customer inquiries for technical product decisions.",
      "Ranked among top-performing reps nationwide by consistently exceeding conversion and attach-rate goals.",
    ],
  },
];
