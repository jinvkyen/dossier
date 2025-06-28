/* eslint-disable @typescript-eslint/no-explicit-any */
import BigBentoCard from "../components/BigBentoCard";
import { achieves } from "../data/achievesData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ScrollVelocity from "../designs/ScrollVelocity";
import { Suspense } from "react";

const container: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 50, stiffness: 50 },
  },
};

export default function Achievement() {
  return (
    <motion.div className='bg-background flex overflow-hidden' variants={container} initial='hidden' animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <BigBentoCard className='h-full flex lg:overflow-hidden justify-center items-center'>
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[300px] sm:w-[430px] md:w-[430px] h-[100px] lg:h-[100px] lg:w-full'>
            <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
              <ScrollVelocity
                texts={["achievements —"]}
                velocity={70}
                className='font-inter text-[clamp(2.5rem,4vw,3.5rem)] leading-none'
              />
            </Suspense>
          </div>
        </BigBentoCard>
        <BigBentoCard>
          {/*Achievements: Mapped Cards */}
          <section className='grid grid-cols-2 gap-2 p-4 order-2 md:order-1 overflow-hidden'>
            {achieves.map((ach: any) => (
              <div
                key={ach.id}
                className='hover:outline-dashed hover:outline-white hover:bg-bgoutline
               transition-all duration-200 rounded-xl hover:-rotate-2 py-2'>
                {/* Top: Image content */}
                <div className='flex flex-col lg:flex-row items-center lg:justify-between overflow-hidden'>
                  <img
                    src={ach.image}
                    loading='lazy'
                    alt={ach.title}
                    className='h-32 w-h-32 aspect-square object-cover
                  transition-transform duration-500 ease-in-out z-0 p-2'
                  />
                  <div className='flex flex-col lg:py-6 w-full'>
                    <p className='text-pretty text-center lg:text-start text-white text-sm lg:text-lg font-inter font-bold leading-tight'>
                      {ach.title}
                    </p>
                    <p className='text-pretty text-center lg:text-start text-ptext text-xs lg:text-sm lg:mb-2'>
                      {ach.issuer} in {ach.year}
                    </p>
                    <div className='flex-wrap items-center gap-1 font-sf hidden xl:flex'>
                      {[...(ach.skills || [])].map((tag, index) => (
                        <span
                          key={index}
                          className='flex items-center gap-1 px-2 py-1 border border-ptext text-[10px] lg:text-xs text-ptext rounded-full'>
                          <span>{tag.trim()}</span>
                          <span>{ach[tag.trim()] || ""}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </BigBentoCard>
      </div>
    </motion.div>
  );
}
