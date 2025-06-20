/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type JSX } from "react";
import TimeDiv from "./TimeDiv";
import BentoCard from "./BentoCard";
import SpinningGlobe from "../../components/SpinningGlobe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFile, faSwatchbook, faImage, faEnvelope, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LeftSidePanel() {
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
      icon: <FontAwesomeIcon icon={faHouse} className='text-lg' />,
      description: "Working at the intersection of creative and digital design.",
      link: "/",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750362122/me_mgfgmc.jpg",
    },
    {
      id: 2,
      title: "Works",
      icon: <FontAwesomeIcon icon={faFile} className='text-lg' />,
      description: "Several projects that I've worked on improving my skills.",
      link: "/works",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/v1750359019/web-portfolio_tblfbw.png",
    },
    {
      id: 3,
      title: "Design",
      icon: <FontAwesomeIcon icon={faSwatchbook} className='text-lg' />,
      description: "A collection of my design work, UI and web design.",
      link: "/design",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/MacBook-_13_xyd6hf.png",
    },
    {
      id: 4,
      title: "Certifications",
      icon: <FontAwesomeIcon icon={faCertificate} className='text-lg' />,
      description: "A collection of my certifications in various technical fields.",
      link: "/certifications",
      onhover: "https://res.cloudinary.com/diolcqc1f/image/upload/v1744389969/fcc_slh118.png",
    },
    {
      id: 5,
      title: "Gallery",
      icon: <FontAwesomeIcon icon={faImage} className='text-lg' />,
      description: "A collection of my miscellaneous spontaneous finds.",
      link: "/gallery",
      onhover:
        "https://res.cloudinary.com/diolcqc1f/image/upload/v1750359065/75ad88b0-4570-4559-b567-341726d6f210_huary4.jpg",
    },
    {
      id: 6,
      title: "Contact",
      icon: <FontAwesomeIcon icon={faEnvelope} className='text-lg' />,
      description: "Have an idea or just want to say hi? Let's get connected!",
      link: "/contact",
      onhover: "https://cdn.forthepeoplecollective.org/1662551863428.jpg",
    },
  ];
  return (
    <div className='overflow-y-auto p-2 space-y-0 md:space-y-20 no-scrollbar'>
      <TimeDiv className='relative h-48'>
        <div className='flex flex-col relative justify-between w-full h-full'>
          <div>
            <div className='text-center text-2xl text-white my-24 font-500 '>
              {formatTime(currentTime)} <br />
              Manila, The Philippines
            </div>
          </div>
          {/* Spinning Globe */}
          <div className='absolute top-24 md:top-32 left-0 w-full h-full z-0 pointer-events-none justify-center flex'>
            <div className='mx-auto'>
              <SpinningGlobe width={500} height={500} />
            </div>
          </div>
        </div>
      </TimeDiv>

      {/* Buttons of cards */}
      <div className='z-10'>
        {bentoCards.map((card: any) => (
          <Link to={card.link} key={card.id} className='group no-underline'>
            <BentoCard className='bg-bgcards p-3 mb-2'>
              <div className='flex items-start'>
                {/* Icon with hover overlay image */}
                <div className='relative group w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4 overflow-hidden'>
                  <div className='relative z-10 group-hover:opacity-0 transition duration-300'>{card.icon}</div>
                  <img
                    src={card.onhover}
                    alt={`${card.title} hover`}
                    className='
                absolute bottom-[-100%] left-0 w-full h-full object-cover
                group-hover:bottom-0 transition-all duration-500 ease-out
              '
                  />
                </div>

                {/* Text */}
                <div className='flex-1 text-start md:mr-12'>
                  <span className='text-white font-semibold leading-tight'>{card.title}</span>
                  <p className='text-ptext text-xs'>{card.description}</p>
                </div>
              </div>
            </BentoCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
