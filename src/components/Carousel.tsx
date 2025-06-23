import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1750358845/MacBook-_13_xyd6hf.png",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1750359065/75ad88b0-4570-4559-b567-341726d6f210_huary4.jpg",
  "https://res.cloudinary.com/diolcqc1f/image/upload/v1744367841/MacBook_Pro_14__-_2_zf96vb.png",
];

export default function Carousel() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const timeoutRef = useRef<number | null>(null);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + images.length) % images.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => paginate(1), 4000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className='relative w-full h-72 rounded-xl bg-background cursor-pointer'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.6 }}
          className='absolute w-full h-full object-cover'
        />
      </AnimatePresence>
      <div className='absolute bottom-12 lg:bottom-3 left-1/2 transform -translate-x-1/2 bg-bgcards/40 p-3 rounded-full flex gap-2'>
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
