import BigBentoCard from "../features/layout/BigBentoCard";
import LeftSidePanel from "../features/layout/LeftSidePanel";

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
                  <BigBentoCard className='w-full h-full'>Top Left 1</BigBentoCard>
                </div>
                <div className='h-full w-[400px]'>
                  <BigBentoCard className='w-full h-full'>Top Left 2</BigBentoCard>
                </div>
              </div>

              {/* Right: fills the rest */}
              <div className='flex-1'>
                <BigBentoCard className='w-full h-full'>Top Right (full height)</BigBentoCard>
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
