import BigBentoCard from "../components/BigBentoCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ScrollVelocity from "../components/ScrollVelocity";

const container: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 50, stiffness: 50 },
  },
};

export default function At() {
  return (
    <motion.div
      className='bg-background flex overflow-hidden snap-start'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section: moving title */}
        <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[400px] sm:w-[430px] md:w-[500px] lg:w-full h-[80px] sm:h-[120px] lg:h-[120px]'>
            <ScrollVelocity
              texts={["@T — @T —"]}
              velocity={70}
              className='font-inter text-[clamp(2rem,5vw,4rem)] leading-none'
            />
          </div>
        </BigBentoCard>
        {/*Design: Mapped Cards */}
        <section className='grid grid-cols-1 gap-2 order-2 md:order-1'>
          {/* Images : three(3) */}
          <BigBentoCard>
            Image
            Image
            Image
          </BigBentoCard>
        </section>
      </div>
    </motion.div>
  );
}
