import BigBentoCard from "../components/BigBentoCard";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useRef, useEffect, Suspense } from "react";
import ScrollVelocity from "../components/ScrollVelocity";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Socials from "../components/Socials";

const container: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 50, stiffness: 50 },
  },
};

const gallery = [
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1750359019/web-portfolio_tblfbw.png",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1750750547/civix_kqqexu.png",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1750750711/mockup-1_ohqniq.png",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1750750773/env-closed_cpzi54.png",
];

export default function Gallery() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const timeoutRef = useRef<number | null>(null);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + gallery.length) % gallery.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => paginate(1), 4000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };
  return (
    <motion.div
      className='bg-background flex overflow-hidden scroll-smooth relative'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[400px] sm:w-[430px] md:w-[500px] lg:w-full h-[80px] sm:h-[120px] lg:h-[120px]'>
            <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
              <ScrollVelocity
                texts={["Gallery —"]}
                velocity={70}
                className='font-inter text-[clamp(2rem,5vw,4rem)] leading-none'
              />
            </Suspense>
          </div>
        </BigBentoCard>
        <BigBentoCard
          className='h-full flex flex-col justify-between group overflow-hidden
              hover:bg-bgoutline transition-all duration-200 scroll-smooth snap-mandatory'>
          {/* Image: Carousel */}
          <div className='p-2 overflow-hidden'>
            <div className='relative w-full h-96 rounded-xl bg-background'>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={index}
                  src={gallery[index]}
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  transition={{ duration: 0.6 }}
                  className='absolute w-full h-full object-cover rounded-xl'
                />
              </AnimatePresence>
              <div className='absolute bottom-12 lg:bottom-3 left-1/2 transform -translate-x-1/2 bg-bgcards/40 p-3 rounded-full flex gap-2'>
                {gallery.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      i === index ? "bg-white" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>{" "}
            <div className='flex flex-row items-center justify-between'>
              <p className='text-pretty text-white text-[clamp(1rem,2vw,2.5rem)] my-2 font-inter font-bold'></p>
            </div>
          </div>
        </BigBentoCard>

        {/* Middle Section B */}
        <section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 lg:h-72'>
          <BigBentoCard className='flex items-center justify-center p-6 lg:row-span-2'>
            <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
              <Socials />
            </Suspense>
          </BigBentoCard>
          <BigBentoCard className='md:p-6 lg:col-span-2 lg:row-span-2 flex items-center justify-center overflow-hidden object-cover'>
            <div className='flex flex-col p-2 md:p-6 w-full'>
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
            </div>
          </BigBentoCard>
        </section>
      </div>
    </motion.div>
  );
}
