import BigBentoCard from "../features/layout/BigBentoCard";
import LeftSidePanel from "../features/layout/LeftSidePanel";
import ASCIIText from "../features/ASCIIText";
import { HandWaving } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <div className='flex h-screen overflow-hidden text-white scroll-smooth'>
        {/* Left scrollable panel of the screen*/}
        <LeftSidePanel />

        {/* Right scrollable panel of the screen*/}
        <div className='w-full overflow-y-auto scroll-smooth'>
          <div className='min-h-screen pt-2 pr-2 pb-4 grid gap-2'>
            {/* Top Section with square + fill */}
            <section className='flex gap-2 h-svh'>
              {/* Left: vertical stack of two squares */}
              <div className='flex flex-col gap-2'>
                <div className='h-full w-[400px]'>
                  <BigBentoCard className='w-full h-full'>
                    <ASCIIText enableWaves={true} asciiFontSize={3} textFontSize={25} textColor='#ffffff' />
                  </BigBentoCard>
                </div>
                <div className='h-full w-[400px]'>
                  <BigBentoCard className='w-full h-full'>
                    <div className='flex flex-col p-12 space-y-2'>
                      <div className='w-12 h-12 bg-bgoutline rounded-xl flex items-center justify-center mr-4'>
                        <HandWaving size={25} className='text-white' />
                      </div>
                      <p className='font-semibold'>
                        <span className='text-3xl'>Hello, I'm Ayen </span>
                        <span className='text-md'>(jinvkyen)</span>
                      </p>
                      <p className='text-md text-ptext leading-snug'>
                        A front-end developer geek with the dexterity to bring user interfaces and experiences to life.
                        I'm new to the dev industry, and support would be greatly appreciated as I pursue my journey as
                        an aspiring software developer.
                      </p>
                    </div>
                  </BigBentoCard>
                </div>
              </div>

              {/* Right: fills the rest */}
              <div className='flex-1'>
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
      </div>
    </>
  );
}
