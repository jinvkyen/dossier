export type Design = {
  id: string;
  title: string;
  image: string;
  year: number;
  url: string | "";
  subimages: string[],
};

export const designs: Design[] = [
  {
    id: "1",
    title: "@T",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750358845/MacBook-_13_xyd6hf.png",
    year: 2024,
    url: "/designs-@t",
    subimages: [],
  },

];
