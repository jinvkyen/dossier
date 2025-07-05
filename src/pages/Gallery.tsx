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
  hidden: { opacity: 0, x: 5 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 100, stiffness: 100 },
  },
};

const gallery = [
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g9_lypw41.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g8_zdornb.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g7_xvkdmx.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g10_uud7hy.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g12_dwzngw.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g13_m7jlsh.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g14_qbszwl.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g11_vserm6.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266630/g15_qpjp4c.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266654/g6_uuhgip.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266642/g5_qz1ztz.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266654/g4_duhoim.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266631/g3_xyz5ai.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266703/g16_rt7h3x.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266631/g2_eefyhz.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751266989/g17_dr7tqa.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751636519/e88c1610-41cc-47cd-b54b-2cf98077dc09.png",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751707822/kc_qiynip.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1751707822/scene_kkane5.jpg",
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
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[400px] sm:w-[430px] md:w-[500px] lg:w-full h-[100px] sm:h-[120px] lg:h-[120px]'>
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
              scroll-smooth'>
          {/* Image: Carousel */}
          <div className='p-2 overflow-hidden'>
            <div className='relative w-full h-[500px] lg:h-svh rounded-xl bg-background'>
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
                  className='absolute w-full h-full object-cover lg:object-contain rounded-xl'
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
                <span className='text-4xl'>Open to new work</span>
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
