import { useState, useEffect } from "react";
import TimeDiv from "../features/layout/TimeDiv";
import BentoCard from "../features/layout/BentoCard";
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
        <div className='w-1/3 overflow-y-auto p-2 space-y-20'>
          <TimeDiv className='h-48'>
            <div className='flex flex-col justify-between w-full h-full'>
              <div>
                <div className='text-center text-2xl text-white my-12 font-500'>
                  {formatTime(currentTime)} <br />
                  Manila, Philippines
                </div>
              </div>
              <div className='w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 mx-auto'></div>
            </div>
          </TimeDiv>

          <div className='space-y-4'>
            <BentoCard className='bg-bgcards rounded-xl p-4'>Home</BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-4'>Works</BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-4'>Thoughts</BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-4'>Gallery</BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-4'>Contact</BentoCard>
            <BentoCard className='bg-bgcards rounded-xl p-4'>Call-to-action</BentoCard>
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
              <BentoCard className='rounded-xl p-4 col-span-2 row-span-2'>
                Middle Left
              </BentoCard>
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
