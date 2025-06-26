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
    name: "Mr. Peanutbutter",
    title: "Actor @ Hollywoo",
    avatar: "https://i.redd.it/9zh3d7rrh7sb1.jpg",
  },
  {
    id: 2,
    quote:
      "It gets easier. Every day it gets a little easier. But you gotta do it every day — that’s the hard part. But it does get easier.",
    name: "Jogging Baboon",
    title: "Jogger @ Street",
    avatar: "https://miro.medium.com/v2/resize:fit:2880/1*WpIfVAWubr4otygEo0arvg.jpeg",
  },
  {
    id: 3,
    quote:
      "You do the hokey-pokey and you turn yourself around. \"You turn yourself around\", that's what it's all about.",
    name: "Todd Chavez",
    title: "Head of daycare @ VIM",
    avatar: "https://i.pinimg.com/736x/65/10/d4/6510d42ebfd5aaed769a0ad84c6c1412.jpg",
  },
  {
    id: 4,
    quote:
      "That's the thing. I don't think I believe in deep down. I kind of think all you are is just the that you do.",
    name: "Diane Nguyen",
    title: "Writer @ Huston Texas",
    avatar: "https://i.pinimg.com/736x/ef/fb/44/effb4439756be1b0a089408c0e65961c.jpg",
  },
  {
    id: 5,
    quote:
      "You know, it's funny. When you look at someone through rose colored glasses, all the red flags just look like flags.",
    name: "Wanda Pierce",
    title: "Former Head of Programming @ MBN",
    avatar: "https://i.pinimg.com/736x/68/ec/a6/68eca6dc97649849707d325a41240cb3.jpg",
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
                <div className='text-ptext text-xs'>{currentTestimonial.title}</div>
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
