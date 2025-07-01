export type Design = {
  id: string;
  title: string;
  image: string;
  tag: string;
  url: string | "";
};

export const designs: Design[] = [
  {
    id: "1",
    title: "@T",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750358845/MacBook-_13_xyd6hf.png",
    tag: "2024",
    url: "/designs-@t",
  },
  {
    id: "2",
    title: "Civix",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1751386145/762044e5-1bbe-4e9c-b5f0-dfcb132d5e85.png",
    tag: "2024",
    url: "/designs-civix",
  },
];
