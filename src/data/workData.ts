export type Work = {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  languages: string[];
  category: "web app" | "website";
  url: string | "";
};

export const works: Work[] = [
  {
    id: "1",
    title: "Open-Source Web Portfolio",
    description:
      "This is an open source portfolio template built with React.js and Tailwind CSS is free for anyone to use and customize.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750747731/thumbnail-portfolio_gjwam9.png",
    year: 2025,
    languages: ["React ", "JavaScript", "Tailwind"],
    category: "website",
    url: "https://open-web-portfolio.vercel.app/",
  },
  {
    id: "2",
    title: "Toqui Co.",
    description: "This a pet hub and website personal project with React.js framework dedicated to my beloved pet.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744372269/toquico_bzro6k.png",
    year: 2025,
    languages: ["React ", "JavaScript", "Tailwind"],
    category: "web app",
    url: "https://toquico.vercel.app/",
  },
  {
    id: "3",
    title: "Responsive Hero Section",
    description: "This project displays a responsive hero section made with HTML and Tailwind in one page design.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750972830/resp_lzsylp.png",
    year: 2025,
    languages: ["HTML ", "Tailwind"],
    category: "website",
    url: "https://jinvkyen.github.io/hero-section.github.io/",
  },
  {
    id: "4",
    title: "InTrack",
    description:
      "This website is made for a Java desktop application that helps students efficiently track their internship progress.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751000394/thumbnail-intrack_sarote.png",
    year: 2025,
    languages: ["Java "],
    category: "web app",
    url: "https://intrackapp.vercel.app/",
  },
  {
    id: "5",
    title: "Research AIde",
    description:
      "This project is an AI Research Assistant module developed as an internal project. It is designed to assist in research through an API-driven approach.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750972705/r8d_ry54bt.png",
    year: 2025,
    languages: ["React ", "C#"],
    category: "web app",
    url: "https://confused-alloy.onrender.com/",
  },
  {
    id: "6",
    title: "Responsive Envelope with Animation",
    description:
      "This project features a floating envelope with an interactive love card inside, along with a music player. The animation makes use of keyframe animations for smooth floating and rotation effects.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750750773/env-closed_cpzi54.png",
    year: 2025,
    languages: ["HTML ", "CSS", "JavaScript"],
    category: "web app",
    url: "https://valentines-envelope-animatio.onrender.com/",
  },
];
