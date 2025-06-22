import { ScrollVelocity } from "../features/ScrollVelocity";
import BigBentoCard from "../designs/BigBentoCard";
import { ArrowRightIcon, HandWaving } from "@phosphor-icons/react";
import IconCard from "../designs/IconCard";
import Carousel from "../features/Carousel";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const container: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 50, stiffness: 100 },
  },
};

export default function Home() {
  return (
    <motion.div
      className='flex h-screen overflow-hidden scroll-smooth'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='min-h-screen w-screen overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <section className='flex flex-col lg:flex-row gap-2 h-auto lg:h-svh'>
          {/* Right Column (Image) */}
          <div className='w-full order-2 lg:order-3 flex-1 flex-grow'>
            <img
              src='https://res.cloudinary.com/diolcqc1f/image/upload/v1750362122/me_mgfgmc.jpg'
              className='w-full h-full rounded-xl border border-bgoutline object-cover'
              alt='Ayen Tipon'
            />
          </div>

          {/* Left Column (Moving Name + Intro Card) */}
          <div className='flex flex-col gap-2 order-1 lg:order-1 lg:w-[400px] flex-shrink-0'>
            {/* Moving Name */}
            <div className='h-full order-3 lg:order-1 flex-shrink'>
              <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
                <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[300px] sm:w-[400px] md:w-[400px] h-[100px] lg:w-full'>
                  <ScrollVelocity
                    texts={["jinvkyen — Ayen Tipon —"]}
                    velocity={70}
                    className='font-inter text-[clamp(2.5rem,4vw,3.5rem)] leading-none'
                  />
                </div>
              </BigBentoCard>
            </div>

            {/* Intro Card */}
            <div className='w-full h-full order-2 lg:order-2 flex-shrink'>
              <BigBentoCard className='h-full flex justify-center items-center'>
                <div className='flex flex-col p-6 space-y-2'>
                  <IconCard icon={<HandWaving className='text-white text-2xl' />} />
                  <p className='font-semibold'>
                    <span className='text-3xl'>Hi, I'm Ayen </span>
                  </p>
                  <p className='text-pretty text-ptext text-[clamp(0.2rem,3.5rem)]'>
                    A front-end geek with the dexterity to bring ui/ux to life. I'm new to the dev industry, and support
                    would be greatly appreciated as I pursue my journey as an aspiring software developer.
                  </p>
                </div>
              </BigBentoCard>
            </div>
          </div>
        </section>

        {/* Middle and Bottom Sections */}
        <section className='flex flex-col gap-2 h-auto lg:h-full'>
          {/* Middle Section A */}
          <section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 h-full lg:h-72'>
            <BigBentoCard className='lg:col-span-2 lg:row-span-2 flex items-center justify-center overflow-hidden'>
              <Carousel />
            </BigBentoCard>
            <BigBentoCard className='h-full flex justify-center items-center lg:row-span-2'>
              <div className='flex flex-col p-6 w-full'>
                <div className='w-12 h-12 bg-bgoutline rounded-xl flex items-center justify-center'>
                  <div className='relative h-12 w-12'>
                    <span className='absolute inset-0 rounded-full bg-green-400 opacity-25 animate-radar'></span>
                    <span className='absolute inset-0 m-auto h-3 w-3 bg-green-500 rounded-full z-10'></span>
                  </div>
                </div>
                <p className='font-semibold mt-2'>
                  <span className='text-3xl'>Open to work</span>
                </p>
                <p className='text-pretty text-ptext text-base my-2'>
                  Have a project or opportunity in mind?
                </p>
                <Link to={"/contact"} className="text-sm flex items-center mt-2">
                  <Button>Contact me <ArrowRightIcon size={20} className="ml-1"/> </Button>
                </Link>
              </div>
            </BigBentoCard>
          </section>

          {/* Middle Section B */}
          <section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 lg:h-72'>
            <BigBentoCard className='p-4 lg:row-span-2'>Middle Left</BigBentoCard>
            <BigBentoCard className='p-4 lg:col-span-2 lg:row-span-2'>Middle Right (2x height)</BigBentoCard>
          </section>

          {/* Bottom Section */}
          <BigBentoCard className='p-4 h-auto lg:h-60'>Bottom Full Width</BigBentoCard>
        </section>
      </div>
    </motion.div>
  );
}
