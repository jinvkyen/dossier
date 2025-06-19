import { useState, useEffect } from "react";
import TimeDiv from "../features/layout/TimeDiv";
import BentoCard from "../features/layout/BentoCard";
import SpinningGlobe from "../components/SpinningGlobe";
import BigBentoCard from "../features/layout/BigBentoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFile } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };
  return (
    <>
      <div className='flex h-screen overflow-hidden text-white'>
        {/* Left scrollable panel of the screen*/}
        <div className='w-1/3 overflow-y-auto p-2 space-y-20 no-scrollbar'>
          <TimeDiv className='relative h-48'>
            <div className='flex flex-col relative justify-between w-full h-full'>
              <div>
                <div className='text-center text-2xl text-white my-24 font-500'>
                  {formatTime(currentTime)} <br />
                  Manila, Philippines
                </div>
              </div>
              {/* Spinning Globe */}
              <div className='absolute top-32 left-0 w-full h-full z-0 pointer-events-none justify-center flex'>
                <div className='mx-auto'>
                  <SpinningGlobe width={500} height={500} />
                </div>
              </div>
            </div>
          </TimeDiv>

          <div className='space-y-2 z-10'>
            {/* Home */}
            <BentoCard className='bg-bgcards p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold leading-tight'>Home</div>
                  <div className='text-ptext text-xs'>Working at the intersection of creative and digital design.</div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <FontAwesomeIcon icon={faFile} />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold leading-tight'>Works</div>
                  <div className='text-ptext text-xs'>Several projects that I've worked on over the years.</div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'></div>
                <div className='flex-1'>
                  <div className='text-white font-semibold leading-tight'>Design</div>
                  <div className='text-ptext text-xs'>A collection of my design work, UI and web design.</div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'></div>
                <div className='flex-1'>
                  <div className='text-white font-semibold leading-tight'>Gallery</div>
                  <div className='text-ptext text-xs'>
                    A collection of my favorite images and miscellaneous spontaneous finds.
                  </div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'></div>
                <div className='flex-1'>
                  <div className='text-white font-semibold leading-tight'>Contact</div>
                  <div className='text-ptext text-xs'>Have an idea or just want to say hi? Let's connect!</div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold leading-tight'>Call-to-action</div>
                  <div className='text-ptext text-xs'>You can also find me here.</div>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
        {/* Right scrollable panel of the screen*/}
        <div className='w-full overflow-y-auto'>
          <div className='min-h-screen pt-2 pr-2 pb-2 grid gap-2 grid-rows-[auto_auto_auto]'>
            {/* Top Section */}
            <section className='grid grid-cols-2 gap-2 min-h-screen'>
              <div className='grid grid-rows-2 gap-2 h-full'>
                <BigBentoCard className='rounded-xl w-full h-full'>Top Left 1</BigBentoCard>
                <BigBentoCard className='rounded-xl w-full h-full'>Top Left 2</BigBentoCard>
              </div>
              <BigBentoCard className='rounded-xl w-full h-full'>Top Right (full height)</BigBentoCard>
            </section>

            {/* Middle Section */}
            <section className='grid grid-cols-3 gap-2 h-64'>
              <BigBentoCard className='rounded-xl p-4 col-span-2 row-span-2'>Middle Left</BigBentoCard>
              <BigBentoCard className='rounded-xl p-4 row-span-2'>Middle Right</BigBentoCard>
            </section>
            <section className='grid grid-cols-3 grid-rows-2 gap-2 h-64'>
              <BigBentoCard className='rounded-xl p-4 row-span-2'>Middle Left</BigBentoCard>
              <BigBentoCard className='rounded-xl p-4 row-span-2 col-start-2 col-span-2'>
                Middle Right (2x height)
              </BigBentoCard>
            </section>

            {/* Bottom Section */}
            <BigBentoCard className='rounded-xl p-4 h-40'>Bottom Full Width</BigBentoCard>
          </div>
        </div>
      </div>
    </>
  );
}
