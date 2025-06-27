export type Design = {
  id: string;
  title: string;
  image: string;
  year: number;
  url: string | "";
};

export const designs: Design[] = [
  {
    id: "1",
    title: "@T",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750358845/MacBook-_13_xyd6hf.png",
    year: 2024,
    url: "/works",
  },
  {
    id: "2",
    title: "Civix",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750750547/civix_kqqexu.png",
    year: 2024,
    url: "/works",
  },
  {
    id: "3",
    title: "Heppi Valentine's",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744367841/MacBook_Pro_14__-_2_zf96vb.png",
    year: 2025,
    url: "/works",
  },
  {
    id: "4",
    title: "Toqui Co.",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751056161/toqs_header_hero_poyitt.png",
    year: 2025,
    url: "/works",
  },
  {
    id: "5",
    title: "Open Web Portfolio",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750747731/thumbnail-portfolio_gjwam9.png",
    year: 2025,
    url: "/works",
  },
];
