/* eslint-disable @typescript-eslint/no-explicit-any */
import BigBentoCard from "../components/BigBentoCard";
import { designs } from "../data/designData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const container: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 50, stiffness: 50 },
  },
};

export default function Design() {
  return (
    <motion.div
      className='bg-background flex overflow-hidden snap-start'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/*Design: Mapped Cards */}
        <section className='grid grid-cols-1 gap-2 order-2 md:order-1'>
          {designs.map((ds: any) => (
            <BigBentoCard
              key={ds.id}
              className='h-full flex flex-col justify-between group overflow-hidden
              hover:bg-bgoutline transition-all duration-200 scroll-smooth snap-mandatory'>
              {/* Whole card is a link */}
              <Link to={ds.url} className='flex flex-col h-full'>
                {/* Top: Image content */}
                <div className='p-2 overflow-hidden'>
                  <span className='bg-background rounded-xl block'>
                    <img
                      src={ds.image}
                      loading='lazy'
                      alt={ds.title}
                      className='w-full aspect-video rounded-lg object-cover transition-transform duration-500 ease-in-out z-0'
                    />
                  </span>
                  <div className='flex flex-row items-center justify-between'>
                    <p className='text-pretty text-white text-[clamp(1rem,2vw,2.5rem)] my-2 font-inter font-bold'>
                      {ds.title}
                    </p>
                    <span
                      className='bg-zinc-500/50 border border-zinc-400 text-white text-base transition-all hidden
                                duration-300 ease-out lg:flex items-center justify-center font-semibold px-4 py-1 rounded-xl'>
                      View Case Study <FontAwesomeIcon icon={faArrowRight} className='ml-1' />
                    </span>
                  </div>
                </div>
              </Link>
            </BigBentoCard>
          ))}
        </section>
      </div>
    </motion.div>
  );
}
