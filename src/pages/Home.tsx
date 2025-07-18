import BigBentoCard from "../components/BigBentoCard";
import { ArrowRightIcon, HandWaving } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { BiSolidLayout } from "react-icons/bi";
import { Suspense, lazy } from "react";

const container: Variants = {
  hidden: { opacity: 0, x: 5 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 100, stiffness: 100 },
  },
};

// Implementing lazy loading for components
const Testimonials = lazy(() => import("../components/Testimonials"));
const Carousel = lazy(() => import("../components/Carousel"));
const IconCard = lazy(() => import("../components/IconCard"));
const Socials = lazy(() => import("../components/Socials"));
const ScrollVelocity = lazy(() => import("../components/ScrollVelocity"));

export default function Home() {
  return (
    <motion.div className='flex overflow-hidden scroll-smooth' variants={container} initial='hidden' animate='show'>
      <div className='min-h-screen w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <section className='flex flex-col lg:flex-row gap-2 h-auto lg:h-[660px]'>
          {/* Right Column (Image) for Desktop View */}
          <div className='w-full hidden lg:flex lg:order-3 flex-1 flex-grow'>
            <img
              src='https://res.cloudinary.com/diolcqc1f/image/upload/v1750918545/self_ph9ugb.jpg'
              className='w-full h-full rounded-xl border border-bgoutline object-cover'
              alt="Author's Image"
              loading='lazy'
            />
          </div>

          {/* Left Column (Moving Name + Intro Card) */}
          <div className='flex flex-col gap-2 order-1 lg:order-1 lg:w-[450px] flex-shrink-0'>
            {/* Moving Name */}
            <div className='h-full hidden'>
              <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
                <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[400px] sm:w-[300px] md:w-[300px] h-[100px] lg:w-full'>
                  <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
                    <ScrollVelocity
                      texts={["`jinvkyen` — Ayen Tipon —"]}
                      velocity={70}
                      className='font-inter text-[clamp(2.5rem,4vw,3.5rem)] leading-none'
                    />
                  </Suspense>
                </div>
              </BigBentoCard>
            </div>

            {/* Intro Card */}
            <div className='w-full h-full order-2 lg:order-2 flex-shrink'>
              <BigBentoCard className='h-full flex justify-center items-center'>
                <div className='flex flex-col p-2 md:p-6 space-y-3'>
                  <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
                    <IconCard className='bg-bgoutline' icon={<HandWaving className='text-white text-2xl' />} />
                  </Suspense>
                  <p className='font-semibold'>
                    <span className='text-3xl'>Hi, I'm Ayen </span>
                  </p>
                  <p className='text-pretty text-ptext text-[clamp(0.2rem,3.5rem)] font-sf'>
                    A front-end geek with the dexterity to bring ui/ux to life. I'm new to the developer industry, and
                    your support would be greatly appreciated as I pursue my journey as an aspiring software engineer.
                  </p>
                </div>
              </BigBentoCard>
            </div>

            {/* Right Column (Image) for Mobile View */}
            <div className='w-full order-2 lg:hidden flex-1 flex-grow'>
              <img
                src='https://res.cloudinary.com/diolcqc1f/image/upload/v1750918545/self_ph9ugb.jpg'
                className='w-full h-full rounded-xl border border-bgoutline object-cover'
                alt="Author's Image"
                loading='lazy'
              />
            </div>

            {/* Moving Name */}
            <div className='h-full order-3 lg:order-1 flex-shrink'>
              <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
                <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[250px] sm:w-[430px] md:w-[430px] h-[150px] lg:w-full'>
                  <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
                    <ScrollVelocity
                      texts={["`jinvkyen` — Ayen Tipon —"]}
                      velocity={70}
                      className='font-inter text-[clamp(2.5rem,4vw,3.5rem)] leading-none'
                    />
                  </Suspense>
                </div>
              </BigBentoCard>
            </div>
          </div>
        </section>

        {/* Middle and Bottom Sections */}
        <section className='flex flex-col gap-2 h-auto lg:h-full'>
          {/* Middle Section A */}
          <section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 h-full lg:h-96'>
            <BigBentoCard className='lg:col-span-2 lg:row-span-2 flex items-center justify-center overflow-hidden'>
              <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
                <Carousel />
              </Suspense>
            </BigBentoCard>
            <BigBentoCard className='h-full flex justify-center items-center lg:row-span-2'>
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

          {/* Middle Section B */}
          <section className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:h-72'>
            <BigBentoCard className='flex items-center justify-center p-6 lg:row-span-2'>
              <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
                <Socials />
              </Suspense>
            </BigBentoCard>
            <BigBentoCard className='md:p-6 lg:col-span-2 lg:row-span-2 flex items-center justify-center overflow-hidden object-cover'>
              <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
                <Testimonials />
              </Suspense>
            </BigBentoCard>
          </section>

          {/* Bottom Section */}
          <BigBentoCard className='h-auto flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex flex-col p-2 md:p-6 space-y-3'>
              <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
                <IconCard className='bg-bgoutline' icon={<BiSolidLayout className='text-white text-2xl' />} />
              </Suspense>
              <p className='font-semibold'>
                <span className='text-3xl'>Make your own portfolio</span>
              </p>
              <p className='text-pretty text-ptext text-[clamp(0.2rem,3.5rem)] font-sf'>
                Want your own portfolio template? Simply fork the repository and update the data arrays to reflect your
                own projects, skills, and info.
              </p>
              <a href='https://github.com/jinvkyen/open-source-portfolio' className='flex items-center mt-2'>
                <Button className='bg-white'>
                  Documentation <ArrowRightIcon size={20} className='ml-1' />{" "}
                </Button>
              </a>
            </div>
            <div className='flex flex-col p-2 lg:p-6 space-y-2'>
              <img
                src='https://res.cloudinary.com/diolcqc1f/image/upload/v1750747731/thumbnail-portfolio_gjwam9.png'
                alt='Open Source Portfolio Thumbnail'
                className='p-6 rounded-xl w-[800px] h-auto bg-background'
                loading='lazy'
              />
            </div>
          </BigBentoCard>
        </section>
      </div>
    </motion.div>
  );
}
