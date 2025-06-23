import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "You have reached the end of your membership at Benjamin-Franklin-Quotes.com",
    name: "Name 1",
    title: "Occupation @ Company",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg",
  },
  {
    id: 2,
    quote: "You have reached the end of your membership at Benjamin-Franklin-Quotes.com",
    name: "Name 2",
    title: "Occupation @ Company",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg",
  },
  {
    id: 3,
    quote: "You have reached the end of your membership at Benjamin-Franklin-Quotes.com",
    name: "Name 3",
    title: "Occupation @ Company",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg",
  },
  {
    id: 4,
    quote: "You have reached the end of your membership at Benjamin-Franklin-Quotes.com",
    name: "Name 4",
    title: "Occupation @ Company",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg",
  },
  {
    id: 5,
    quote: "You have reached the end of your membership at Benjamin-Franklin-Quotes.com",
    name: "Name 5",
    title: "Occupation @ Company",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    // resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    // resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className='flex items-center justify-center p-2'>
      <div className='relative max-w-xl'>
        {/* will display the main testimonials */}
        <div className='text-white'>
          <blockquote className='text-xl md:text-2xl font-bold leading-relaxed mb-8'>
            "{currentTestimonial.quote}"
          </blockquote>

          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className='w-12 h-12 rounded-xl border border-1 border-bgoutline object-cover'
              />
              <div>
                <div className='font-semibold text-lg'>{currentTestimonial.name}</div>
                <div className='text-ptext text-sm'>{currentTestimonial.title}</div>
              </div>
            </div>
            {/* Navigation buttons */}
            <div className='flex justify-end items-center space-x-2'>
              <button
                onClick={goToPrevious}
                className='p-2 rounded-full bg-background hover:bg-bghover transition-colors duration-200'
                aria-label='Previous testimonial'>
                <ChevronLeft className='w-5 h-5' />
              </button>
              <button
                onClick={goToNext}
                className='p-2 rounded-full bg-background hover:bg-bghover transition-colors duration-200'
                aria-label='Next testimonial'>
                <ChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
