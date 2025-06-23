import BigBentoCard from "../components/BigBentoCard";
import ASCIIText from "../features/ASCIIText";
import { HandWaving } from "@phosphor-icons/react";
import IconCard from "../components/IconCard";

export default function Works() {
  return (
    <>
      <div className='flex h-screen overflow-hidden text-white scroll-smooth'>
        <div className='min-h-screen w-full overflow-y-auto pt-2 pr-2 pb-4 grid gap-2'>
          {/* Top Section with square + fill */}
          <section className='flex gap-2 h-svh'>
            {/* Left: vertical stack of two squares */}
            <div className='flex flex-col gap-2'>
              <div className='h-full w-[400px] order-1'>
                <BigBentoCard className='w-full h-full flex items-center justify-center overflow-hidden vignette'>
                  <ASCIIText enableWaves={true} asciiFontSize={5} textFontSize={30} textColor='#ffffff' />
                </BigBentoCard>
              </div>
              <div className='h-full w-[400px] order-3'>
                <BigBentoCard className='w-full h-full'>
                  <div className='flex flex-col mt-12 p-6 space-y-2'>
                    <IconCard icon={<HandWaving className='text-white text-2xl' />} />
                    <p className='font-semibold'>
                      <span className='text-3xl'>Hi, I'm Ayen </span>
                    </p>
                    <p className='text-md text-ptext'>
                      A front-end developer geek with the dexterity to bring user interfaces and experiences to life.
                      I'm new to the dev industry, and support would be greatly appreciated as I pursue my journey as an
                      aspiring software developer.
                    </p>
                  </div>
                </BigBentoCard>
              </div>
            </div>

            {/* Right: image of my face */}
            <div className='flex-1 order-2'>
              <img
                src='https://res.cloudinary.com/diolcqc1f/image/upload/v1750362122/me_mgfgmc.jpg'
                className='w-full h-full rounded-xl border border-bgoutline object-cover'></img>
            </div>
          </section>

          {/* Middle Section */}
          <section className='grid grid-cols-3 gap-2 h-64'>
            <BigBentoCard className='p-4 col-span-2 row-span-2'>Middle Left</BigBentoCard>
            <BigBentoCard className='p-4 row-span-2'>Middle Right</BigBentoCard>
          </section>
          <section className='grid grid-cols-3 grid-rows-2 gap-2 h-64'>
            <BigBentoCard className='p-4 row-span-2'>Middle Left</BigBentoCard>
            <BigBentoCard className='p-4 row-span-2 col-start-2 col-span-2'>Middle Right (2x height)</BigBentoCard>
          </section>

          {/* Bottom Section */}
          <BigBentoCard className='p-4 h-40'>Bottom Full Width</BigBentoCard>
        </div>
      </div>
    </>
  );
}
