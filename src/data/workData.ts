export type Work = {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  tech: string[];
  databases: string[];
  category: "Web App" | "Website";
  url: string | "";
};

export const works: Work[] = [
  {
    id: "1",
    title: "Open-Source Web Portfolio",
    description:
      "This open-source portfolio template, built with React.js and Tailwind CSS, is free for anyone to use and customize.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750359019/web-portfolio_tblfbw.png",
    year: 2025,
    tech: ["React", "JavaScript", "Tailwind"],
    databases: [],
    category: "Website",
    url: "https://open-web-portfolio.vercel.app/",
  },
  {
    id: "2",
    title: "Toqui Co.",
    description: "This is a personal pet hub and website project built with React.js, dedicated to my beloved pet.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744372269/toquico_bzro6k.png",
    year: 2025,
    tech: ["React", "JavaScript", "Tailwind"],
    databases: [],
    category: "Website",
    url: "https://toquico.vercel.app/",
  },
  {
    id: "3",
    title: "Responsive Hero Section",
    description:
      "This project showcases a responsive hero section made with HTML and Tailwind in a single-page design.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751184689/resp_n00bc2.png",
    year: 2025,
    tech: ["HTML", "Tailwind", "JavaScript"],
    databases: [],
    category: "Website",
    url: "https://jinvkyen.github.io/hero-section.github.io/",
  },
  {
    id: "4",
    title: "InTrack",
    description:
      "This website was created for a Java desktop application that helps students efficiently track their internship progress.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751000394/thumbnail-intrack_sarote.png",
    year: 2025,
    tech: ["Java", "React", "TypeScript", "Tailwind"],
    databases: ["SQLite"],
    category: "Web App",
    url: "https://intrackapp.vercel.app/",
  },
  {
    id: "5",
    title: "Research AIde",
    description:
      "This project is an AI Research Assistant module developed as an internal project. It is designed to assist with research through an API-driven approach.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750972705/r8d_ry54bt.png",
    year: 2025,
    tech: ["HTML", "Tailwind", "JavaScript"],
    databases: [],
    category: "Web App",
    url: "https://confused-alloy.onrender.com/",
  },
  {
    id: "6",
    title: "Envelope with Animation",
    description:
      "This project features a floating envelope with an interactive love card inside, as well as a music player. Keyframe animations provide smooth floating and rotation effects.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750750773/env-closed_cpzi54.png",
    year: 2025,
    tech: ["HTML", "CSS", "JavaScript"],
    databases: [],
    category: "Website",
    url: "https://valentines-envelope-animatio.onrender.com/",
  },
  {
    id: "7",
    title: "RPG Creature Search",
    description:
      "This project is a search engine for creatures from an RPG game, using freeCodeCamp's RPG Creature API.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751008275/08319022-941d-4055-8452-25d8c169e0e4.png",
    year: 2025,
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    databases: [],
    category: "Website",
    url: "https://github.com/jinvkyen/search-a-pokemon",
  },
  {
    id: "8",
    title: "Markdown Previewer",
    description:
      "This project is a simple markdown previewer made with JavaScript, demonstrating knowledge of the React framework.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751009595/markdown_v4nwti.png",
    year: 2025,
    tech: ["React", "CSS", "JavaScript"],
    databases: [],
    category: "Website",
    url: "https://markup-previewer.onrender.com/",
  },
  {
    id: "9",
    title: "Cunosati and Ayakkusu Merch Shop",
    description:
      "Cunosati is a product catalog management system designed for anime merchandise. It integrates with Ayakkusu Merch Shop.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751010995/ayakkusu_a3venj.png",
    year: 2024,
    tech: ["PHP", "Bootstrap", "REST API"],
    databases: ["MySQL"],
    category: "Web App",
    url: "https://github.com/jinvkyen/microservice-system-php",
  },
  {
    id: "10",
    title: "Tic-tac-toe: Arcane",
    description:
      "This game is a simple twist on the classic tic-tac-toe, reimagined with an arcane theme and confetti animation.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751011559/tic-tac-toe_pzws0b.png",
    year: 2025,
    tech: ["HTML", "CSS", "JavaScript"],
    databases: [],
    category: "Website",
    url: "https://jinvkyen.github.io/tic-tac-toe/",
  },
  {
    id: "11",
    title: "CoffeeBrews",
    description:
      "This is a coffee ordering management system that consists of two user-levels that can manage orders as an employee or order a coffee as a guest.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751013551/coffeebrews_bhhk5c.png",
    year: 2023,
    tech: ["Java"],
    databases: ["SQLite"],
    category: "Web App",
    url: "https://github.com/jinvkyen/coffee-menu-ordering-system-java",
  },
];
