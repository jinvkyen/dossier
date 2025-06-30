import BigBentoCard from "../components/BigBentoCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ScrollVelocity } from "../components/ScrollVelocity";
import IconCard from "../components/IconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FaEnvelopeOpen, FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react";
import Socials from "../components/Socials";

const container: Variants = {
  hidden: { opacity: 0, x: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 50, stiffness: 50 },
  },
};
export default function Contact() {
  // function for copy to clipboard emails
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("jayentt.work@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <motion.div
      className='bg-background flex overflow-hidden scroll-smooth relative'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section: moving title */}
        <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[400px] sm:w-[430px] md:w-[500px] lg:w-full h-[80px] sm:h-[120px] lg:h-[120px]'>
            <ScrollVelocity
              texts={["Get In Touch —"]}
              velocity={70}
              className='font-inter text-[clamp(2rem,5vw,4rem)] leading-none'
            />
          </div>
        </BigBentoCard>
        {/* Middle Section: 3 cards */}
        <div className='grid grid-cols-1 xl:grid-cols-3 grid-rows-1 gap-2'>
          {/* First Grid */}
          <BigBentoCard className='flex'>
            <div className='flex flex-col p-2 md:p-6 space-y-3 w-full'>
              <IconCard className='bg-bgoutline' icon={<FontAwesomeIcon icon={faLink} className='text-2xl' />} />
              <p className='font-semibold'>
                <span className='text-3xl'>Link Me</span>
              </p>
              <a href='https://ayenjtt.jobs180.com/' target='_blank' className='flex items-center mt-2'>
                <button className='backdrop-blur-sm rounded-2xl w-full h-10 text-black bg-white hover:bg-opacity-80 font-inter transition-all duration-300 ease-out flex items-center justify-center font-semibold'>
                  Go to Resume Link
                </button>
              </a>
            </div>
          </BigBentoCard>
          {/* Second Grid */}
          <BigBentoCard className='flex'>
            <div className='flex flex-col p-2 md:p-6 space-y-3 w-full'>
              <IconCard className='bg-bgoutline' icon={<FontAwesomeIcon icon={faPaperPlane} className='text-2xl' />} />
              <p className='font-semibold'>
                <span className='text-3xl'>Email Me</span>
              </p>
              <button
                onClick={handleCopy}
                className='backdrop-blur-sm rounded-2xl w-full h-10 text-white bg-bgoutline hover:bg-bghover border border-bgoutline font-inter transition-all duration-300 ease-out flex items-center justify-center font-semibold'>
                {copied ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>
          </BigBentoCard>
          <BigBentoCard className='flex'>
            <div className='flex flex-col p-2 md:p-6 space-y-3 w-full'>
              <IconCard className='bg-bgoutline' icon={<FaLinkedinIn className='text-2xl' />} />
              <p className='font-semibold'>
                <span className='text-3xl'>DM Me</span>
              </p>
              <a href='https://www.linkedin.com/in/ayenjtt/' target='_blank' className='flex items-center mt-2'>
                <button className='backdrop-blur-sm rounded-2xl w-full h-10 text-white bg-bgoutline hover:bg-bghover border border-bgoutline font-inter transition-all duration-300 ease-out flex items-center justify-center font-semibold'>
                  Go to LinkedIn
                </button>
              </a>
            </div>
          </BigBentoCard>
        </div>
        {/* Message form */}
        <BigBentoCard className='grid grid-rows-1'>
          <div className='flex flex-col p-2 md:p-6 space-y-3 w-full'>
            <form
              action='https://formsubmit.co/jayentt.work@gmail.com'
              method='POST'
              className='flex flex-col space-y-4'>
              {/* Hidden fields required by FormSubmit */}
              <input type='hidden' name='_subject' value='New message from your portfolio!' />
              <input type='hidden' name='_next' value='https://ayentipon.vercel.app/thank-you' />
              <input type='text' name='_honey' style={{ display: "none" }} />

              <IconCard className='bg-bgoutline' icon={<FaEnvelopeOpen className='text-2xl' />} />
              <p className='font-semibold text-3xl'>Or send a message directly!</p>

              <div className='flex w-full justify-between gap-2'>
                <input
                  className='input border border-bgoutline rounded-xl px-4 py-2 bg-white text-black placeholder-gray-400 w-1/2'
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                />
                <input
                  className='input border border-bgoutline rounded-xl px-4 py-2 bg-white text-black placeholder-gray-400 w-1/2'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>

              <textarea
                name='message'
                rows={10}
                className='area resize-none border border-bgoutline rounded-xl px-4 py-2 bg-white text-black placeholder-gray-400'
                placeholder='Message'
                required></textarea>

              <button
                type='submit'
                className='backdrop-blur-sm rounded-2xl w-full h-12 text-black bg-white hover:bg-opacity-80 border border-bgoutline font-inter transition-all duration-300 ease-out flex items-center justify-center font-semibold'>
                Send
              </button>
            </form>
          </div>
        </BigBentoCard>

        <BigBentoCard className="flex items-center justify-center py-8">
          <Socials />
        </BigBentoCard>
      </div>
    </motion.div>
  );
}
