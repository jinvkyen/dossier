import BigBentoCard from "../features/layout/BigBentoCard";
import LeftSidePanel from "../features/layout/LeftSidePanel";

export default function Home() {
  return (
    <>
      <div className='flex h-screen overflow-hidden text-white scroll-smooth'>
        {/* Left scrollable panel of the screen*/}
        <LeftSidePanel/>
        {/* Right scrollable panel of the screen*/}
        <div className='w-full overflow-y-auto scroll-smooth'>
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
