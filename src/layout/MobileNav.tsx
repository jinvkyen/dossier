/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type JSX } from "react";
import BentoCard from "../components/BentoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFile, faSwatchbook, faEnvelope, faCertificate, faImage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Footer from "../pages/Footer";
import Globe from "../designs/Globe";
import NotFound from "../pages/NotFound";

const container: Variants = {
  hidden: { opacity: 0, x: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 70, stiffness: 70 },
  },
};

export default function MobileNav() {
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
  // function to key map the BentoCard with the icons and descriptions
  const bentoCards: Array<{
    id: number;
    title: string;
    icon: JSX.Element;
    description: string;
    link?: string;
    onhover: string;
  }> = [
    {
      id: 1,
      title: "Home",
      icon: <FontAwesomeIcon icon={faHouse} className='text-xl text-white' />,
      description: "Working at the intersection of creative and digital design.",
      link: "/",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750362122/me_mgfgmc.jpg",
    },
    {
      id: 2,
      title: "Works",
      icon: <FontAwesomeIcon icon={faFile} className='text-xl text-white' />,
      description: "Several projects that I've worked on improving my skills.",
      link: "/works",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750359019/web-portfolio_tblfbw.png",
    },
    {
      id: 3,
      title: "Design",
      icon: <FontAwesomeIcon icon={faSwatchbook} className='text-xl text-white' />,
      description: "A collection of my design work, UI and web design.",
      link: "/designs",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/MacBook-_13_xyd6hf.png",
    },
    {
      id: 4,
      title: "Certifications",
      icon: <FontAwesomeIcon icon={faCertificate} className='text-xl text-white' />,
      description: "A collection of my certifications in various technical fields.",
      link: "/certifications",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750669205/certiport-databases_ojickj.png",
    },
    {
      id: 5,
      title: "Gallery",
      icon: <FontAwesomeIcon icon={faImage} className='text-xl text-white' />,
      description: "A curated glimpse into the way I see the world.",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/75ad88b0-4570-4559-b567-341726d6f210_huary4.jpg",
    },
    {
      id: 6,
      title: "Contact",
      icon: <FontAwesomeIcon icon={faEnvelope} className='text-xl text-white' />,
      description: "Have an idea or just want to say hi? Let's get connected!",
      link: "/contact",
      onhover: "https://cdn.forthepeoplecollective.org/1662551863428.jpg",
    },
  ];

  return (
    <>
      <header className='block md:hidden'>
        <motion.div
          className='bg-background overflow-y-auto no-scrollbar p-2'
          variants={container}
          initial='hidden'
          animate='show'>

          <div className='flex flex-col items-center my-20 text-white'>
            <span className='font-500 font-sf text-2xl text-center'>
              {formatTime(currentTime)} <br />
              Manila, The Philippines
            </span>
            <Footer />
            <div className='absolute bottom-0 w-full h-full z-0 pointer-events-none justify-center block'>
              <Globe />
            </div>
          </div>

          {/* Buttons of cards */}
          <div className='z-10 mt-4'>
            {bentoCards.map((card: any) => (
              <Link to={card.link} key={card.id} className='group no-underline'>
                <BentoCard className='bg-bgcards p-3 mt-2'>
                  <div className='flex items-center'>
                    {/* Icon with hover overlay image */}
                    <div className='relative group w-12 h-12 bg-bghover rounded-xl flex items-center justify-center mr-4 overflow-hidden'>
                      <div className='relative z-10 group-hover:opacity-0 transition duration-300'>{card.icon}</div>
                      <img
                        src={card.onhover}
                        alt={`${card.title} hover`}
                        className='absolute bottom-[-100%] left-0 w-full h-full object-cover group-hover:bottom-0 transition-all duration-500 ease-out'
                      />
                    </div>

                    {/* Text */}
                    <div className='flex-1 text-start mr-12 md:mr-5 lg:mr-8 leading-tight'>
                      <h1 className='text-white font-semibold text-base font-inter'>{card.title}</h1>
                      <p className='text-ptext font-sf text-sm leading-tight'>{card.description}</p>
                    </div>
                  </div>
                </BentoCard>
              </Link>
            ))}
          </div>
        </motion.div>
      </header>

      <div className='hidden md:block'>
        <NotFound />
      </div>
    </>
  );
}
