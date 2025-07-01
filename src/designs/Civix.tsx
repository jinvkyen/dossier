import BigBentoCard from "../components/BigBentoCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ScrollVelocity from "../components/ScrollVelocity";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import Button from "../components/Button";

const container: Variants = {
  hidden: { opacity: 0, x: 5 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 100, stiffness: 100 },
  },
};

type Civix = {
  id: string;
  title: string;
  image: string;
  url: string | "";
  subimages: string[];
};

const cvx: Civix[] = [
  {
    id: "1",
    title: "@T",
    image: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750358845/MacBook-_13_xyd6hf.png",
    url: "/designs-@t",
    subimages: [
      "https://res.cloudinary.com/diolcqc1f/image/upload/v1751386187/4d149269-44ce-41eb-a2a6-5b8b65d8bbac.png",
      "https://res.cloudinary.com/diolcqc1f/image/upload/v1751385946/9f55a185-730f-4074-bdb9-36adf3c7fd6f.png",
      "https://res.cloudinary.com/diolcqc1f/image/upload/v1751385912/c16ed689-134b-466a-bfc7-6c4eeb7775c9.png",
      "https://res.cloudinary.com/diolcqc1f/image/upload/v1751385804/civix_dziegt.png",
    ],
  },
];

export default function Civix() {
  return (
    <motion.div
      className='bg-background flex overflow-hidden snap-start'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section: moving title */}
        <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[400px] sm:w-[430px] md:w-[500px] lg:w-full h-[80px] sm:h-[120px] lg:h-[120px]'>
            <ScrollVelocity
              texts={["@T — @T —"]}
              velocity={70}
              className='font-inter text-[clamp(2rem,5vw,4rem)] leading-none'
            />
          </div>
        </BigBentoCard>
        <main className='grid grid-cols-1 gap-2'>
          {/*Design contents: Mapped Cards */}
          <section className='grid grid-cols-1 gap-2 order-2'>
            {cvx.map((ds) =>
              ds.subimages.map((img, index) => (
                <BigBentoCard
                  key={`${ds.id}-${index}`}
                  className='h-full flex flex-col justify-between group overflow-hidden
                        hover:bg-bgoutline transition-all duration-200 scroll-smooth snap-mandatory'>
                  <div className='overflow-hidden'>
                    <span className='bg-background rounded-xl block'>
                      <img
                        src={img}
                        loading='lazy'
                        alt={`${ds.title} image ${index + 1}`}
                        className='w-full aspect-video rounded-lg object-contain transition-transform duration-500 ease-in-out z-0'
                      />
                    </span>
                  </div>
                </BigBentoCard>
              ))
            )}
          </section>
          {/* Card : open to new work */}
          <BigBentoCard className='flex flex-col p-2 md:p-6 w-full order-3'>
            <div className='w-12 h-12 bg-bgoutline rounded-xl flex items-center justify-center'>
              <div className='relative h-12 w-12'>
                <span className='absolute inset-0 rounded-full bg-green-400 opacity-30 animate-radar'></span>
                <span className='absolute inset-0 m-auto h-3 w-3 bg-green-500 rounded-full z-10'></span>
              </div>
            </div>
            <p className='font-semibold mt-2'>
              <span className='text-4xl'>Open to work</span>
            </p>
            <p className='text-pretty text-ptext text-base my-2 font-sf'>Have a project or opportunity in mind?</p>
            <Link to={"/contact"} className='flex items-center mt-2'>
              <Button className='bg-white'>
                Contact me <ArrowRightIcon size={20} className='ml-1' />{" "}
              </Button>
            </Link>
          </BigBentoCard>
        </main>
          <Link to={"/designs"}>
            <button
              className='w-full order-4 bg-bgoutline border border-zinc-400 text-white text-base transition-all block
                                        duration-300 ease-out font-semibold px-4 py-1 rounded-xl hover:bg-bghover'>
              <span className='flex items-center justify-center'>
                <span className='flex'>Back to all designs</span> <FontAwesomeIcon icon={faArrowUp} className='ml-1' />
              </span>
            </button>
          </Link>
      </div>
    </motion.div>
  );
}
