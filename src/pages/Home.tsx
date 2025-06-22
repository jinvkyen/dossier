import BigBentoCard from "../designs/BigBentoCard";
import { HandWaving } from "@phosphor-icons/react";
import IconCard from "../designs/IconCard";
import { ScrollVelocity } from "../features/ScrollVelocity";

export default function Home() {
  return (
    <div className='flex h-screen overflow-hidden text-white scroll-smooth'>
      <div className='min-h-screen w-screen overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <section className='flex flex-col lg:flex-row gap-2 h-auto lg:h-svh'>
          {/* Left Column (Moving Name + Intro Card) */}
          <div className='flex flex-col gap-2 lg:order-1 order-2 lg:w-[400px] flex-shrink-0'>
            {/* Moving Name */}
            <div className='h-full order-3 lg:order-1 flex-shrink'>
              <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
                <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[300px] sm:w-[400px] md:w-[400px] h-[100px] lg:w-full'>
                  <ScrollVelocity
                    texts={["jin`vk`yen — Ayen Tipon —"]}
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
                  <p className='text-balance text-ptext text-[clamp(0.2rem,3.5rem)]'>
                    A front-end developer geek with the dexterity to bring user interfaces and experiences to life. I'm
                    new to the dev industry, and support would be greatly appreciated as I pursue my journey as an
                    aspiring software developer.
                  </p>
                </div>
              </BigBentoCard>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className='w-full flex-1 order-3 lg:order-3 flex-grow'>
            <img
              src='https://res.cloudinary.com/diolcqc1f/image/upload/v1750362122/me_mgfgmc.jpg'
              className='w-full h-full rounded-xl border border-bgoutline object-cover'
              alt='Ayen Tipon'
            />
          </div>
        </section>

        {/* Middle and Bottom Sections */}
        <section className='flex flex-col gap-2 h-auto lg:h-full'>
          {/* Middle Section A */}
          <section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 h-auto lg:h-64'>
            <BigBentoCard className='p-4 lg:col-span-2 lg:row-span-2'>Middle Left</BigBentoCard>
            <BigBentoCard className='p-4 lg:row-span-2'>Middle Right</BigBentoCard>
          </section>

          {/* Middle Section B */}
          <section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 h-auto lg:h-64'>
            <BigBentoCard className='p-4 lg:row-span-2'>Middle Left</BigBentoCard>
            <BigBentoCard className='p-4 lg:col-span-2 lg:row-span-2'>Middle Right (2x height)</BigBentoCard>
          </section>

          {/* Bottom Section */}
          <BigBentoCard className='p-4 h-auto lg:h-40'>Bottom Full Width</BigBentoCard>
        </section>
      </div>
    </div>
  );
}

