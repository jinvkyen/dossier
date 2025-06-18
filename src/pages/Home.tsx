import { useState, useEffect } from "react";
import TimeDiv from "../features/layout/TimeDiv";
import BentoCard from "../features/layout/BentoCard";
import { CompassTool, Image, SuitcaseIcon } from "@phosphor-icons/react";
import { HouseIcon, MailIcon } from "lucide-react";
import SpinningGlobe from "../components/ui/SpinningGlobe";
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
                <div className='text-center text-3xl text-white my-24 font-500'>
                  {formatTime(currentTime)} <br />
                  Manila, Philippines
                </div>
              </div>
              {/* Spinning Globe */}
              <div className='absolute top-32 left-0 w-full h-full z-0 pointer-events-none justify-center flex'>
                <div className='mx-auto'>
                  <SpinningGlobe width={400} height={400} />
                </div>
              </div>
            </div>
          </TimeDiv>

          <div className='space-y-2 z-10'>
            {/* Home */}
            <BentoCard className='bg-bgcards p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <HouseIcon className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold'>Home</div>
                  <div className='text-ptext text-sm leading-tight'>
                    Working at the intersection of creative and digital design.
                  </div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <SuitcaseIcon className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold'>Works</div>
                  <div className='text-ptext text-sm leading-tight'>
                    Several projects that I've worked on over the years.
                  </div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <CompassTool className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold'>Design</div>
                  <div className='text-ptext text-sm leading-tight'>
                    A collection of my design work, UI and web design.
                  </div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <Image className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold'>Gallery</div>
                  <div className='text-ptext text-sm leading-tight'>
                    A collection of my favorite images and miscellaneous spontaneous finds.
                  </div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <MailIcon className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold'>Contact</div>
                  <div className='text-ptext text-sm leading-tight'>
                    Have an idea or just want to say hi? Let's connect!
                  </div>
                </div>
              </div>
            </BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-3'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                  <CompassTool className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                  <div className='text-white font-semibold'>Call-to-action</div>
                  <div className='text-ptext text-sm leading-tight'>You can also find me here.</div>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
        {/* Right scrollable panel of the screen*/}
        <div className='w-full overflow-y-auto'>
          <div className='min-h-screen p-2 grid gap-2 grid-rows-[auto_auto_auto]'>
            {/* Top Section */}
            <section className='grid grid-cols-2 gap-2 min-h-screen'>
              <div className='grid grid-rows-2 gap-2 h-full'>
                <BentoCard className='rounded-xl w-full h-full'>Top Left 1</BentoCard>
                <BentoCard className='rounded-xl w-full h-full'>Top Left 2</BentoCard>
              </div>
              <BentoCard className='rounded-xl w-full h-full'>Top Right (full height)</BentoCard>
            </section>

            {/* Middle Section */}
            <section className='grid grid-cols-3 gap-2 h-64'>
              <BentoCard className='rounded-xl p-4 col-span-2 row-span-2'>Middle Left</BentoCard>
              <BentoCard className='rounded-xl p-4 row-span-2'>Middle Right</BentoCard>
            </section>
            <section className='grid grid-cols-3 grid-rows-2 gap-2 h-64'>
              <BentoCard className='rounded-xl p-4 row-span-2'>Middle Left</BentoCard>
              <BentoCard className='rounded-xl p-4 row-span-2 col-start-2 col-span-2'>
                Middle Right (2x height)
              </BentoCard>
            </section>

            {/* Bottom Section */}
            <BentoCard className='rounded-xl p-4 h-40'>Bottom Full Width</BentoCard>
          </div>
        </div>
      </div>
    </>
  );
}
