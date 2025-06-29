export type Achievement = {
  id: number;
  title: string;
  image: string;
  year: number;
  skills: string[];
  issuer: string;
};

export const achieves: Achievement[] = [
  {
    id: 1,
    title: "IT Specialist - Databases",
    image:
      "https://images.credly.com/size/680x680/images/49a492cd-5f72-4c9d-aafa-06649e4853fb/MicrosoftTeams-image__5_.png",
    year: 2023,
    issuer: "Certiport",
    skills: [
      "Core Database Concepts",
      "Creating Database Objects",
      "Database Administration",
      "Data Manipulation",
      "Data Storage",
    ],
  },
  {
    id: 2,
    title: "Introduction to Data Science",
    image: "https://images.credly.com/size/680x680/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
    year: 2024,
    issuer: "Cisco",
    skills: ["Data Analysis", "Data Collection", "Data Validation"],
  },
  {
    id: 3,
    title: "Introduction to Cybersecurity",
    image: "https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    year: 2024,
    issuer: "Cisco",
    skills: [
      "Cyber Best Practices",
      "Cybersecurity",
      "Network Vulnerabilities",
      "Privacy And Data Confidentiality",
      "Threat Detection",
    ],
  },
  {
    id: 4,
    title: "Cyber Threat Management",
    image: "https://images.credly.com/size/680x680/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png",
    year: 2024,
    issuer: "Cisco",
    skills: [
      "Disaster Recovery",
      "Incident Response",
      "Penetration Testing",
      "Risk Assessment",
      "Risk Management",
      "Security Controls",
    ],
  },
  {
    id: 5,
    title: "Responsive Web Design",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751100593/fcc_desg64.png",
    year: 2025,
    issuer: "freeCodeCamp",
    skills: ["HTML", "CSS", "Web Responsiveness"],
  },
  {
    id: 6,
    title: "JavaScript Algorithms and Data Structures",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751100593/fcc_desg64.png",
    year: 2025,
    issuer: "freeCodeCamp",
    skills: ["HTML", "CSS", "JavaScript", "Data Structures", "Algorithms"],
  },
  {
    id: 7,
    title: "Front End Development Libraries",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751100593/fcc_desg64.png",
    year: 2025,
    issuer: "freeCodeCamp",
    skills: ["HTML", "CSS", "React", "JavaScript", "ECMAScript standard", "Babel"],
  },
  {
    id: 8,
    title: "SQL (Basic) Certificate",
    image:
      "//upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/960px-HackerRank_Icon-1000px.png",
    year: 2025,
    issuer: "HackerRank",
    skills: ["SQL", "Simple Queries", "Relationships", "Aggregators"],
  },
  {
    id: 9,
    title: "SQL (Intermediate) Certificate",
    image:
      "//upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/960px-HackerRank_Icon-1000px.png",
    year: 2025,
    issuer: "HackerRank",
    skills: ["SQL", "Complex Joins", "Unions", "Sub-Queries"],
  },
];
