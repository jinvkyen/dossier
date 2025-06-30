import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Globe from "./Globe";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white'>
      {/* Globe with centered logo */}
      <div className='relative mb-8'>
        <Globe />
        <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-radar'>
          <img
            src='https://res.cloudinary.com/diolcqc1f/image/upload/v1751017527/todd-bw_mchspg.png'
            alt='logo'
            className='w-16 h-auto'
          />
          <h1 className='mt-2 text-sm font-medium tracking-wide font-inter'>jinvkyen</h1>
        </div>
      </div>
      {/* Loading Bar */}
      <div className='w-52 h-1 bg-white/20 rounded-full overflow-hidden'>
        <motion.div
          className='h-full bg-white'
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        />
      </div>
      {/* Percentage Text */}
      <h1 className='mt-2 text-xs font-medium tracking-wide font-sf '>Loading {progress}%</h1>
    </div>
  );
};

export default Loader;
