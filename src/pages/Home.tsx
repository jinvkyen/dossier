/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type JSX } from "react";
import TimeDiv from "../features/layout/TimeDiv";
import BentoCard from "../features/layout/BentoCard";
import SpinningGlobe from "../components/SpinningGlobe";
import BigBentoCard from "../features/layout/BigBentoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFile, faSwatchbook, faImage, faEnvelope, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
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
  }> = [
    {
      id: 1,
      title: "Home",
      icon: <FontAwesomeIcon icon={faHouse} className='text-2xl' />,
      description: "Working at the intersection of creative and digital design.",
      link: "/home",
    },
    {
      id: 2,
      title: "Works",
      icon: <FontAwesomeIcon icon={faFile} className='text-2xl' />,
      description: "Several projects that I've worked on improving my skills.",
    },
    {
      id: 3,
      title: "Design",
      icon: <FontAwesomeIcon icon={faSwatchbook} className='text-2xl' />,
      description: "A collection of my design work, UI and web design.",
    },
    {
      id: 4,
      title: "Gallery",
      icon: <FontAwesomeIcon icon={faImage} className='text-2xl' />,
      description: "A collection of my favorite images and miscellaneous spontaneous finds.",
    },
    {
      id: 5,
      title: "Contact",
      icon: <FontAwesomeIcon icon={faEnvelope} className='text-2xl' />,
      description: "Have an idea or just want to say hi? Let's connect!",
    },
    {
      id: 6,
      title: "Certifications",
      icon: <FontAwesomeIcon icon={faCertificate} className='text-2xl' />,
      description: "A collection of my certifications and achievements in various technical fields.",
    },
  ];
  return (
    <>
      <div className='flex h-screen overflow-hidden text-white scroll-smooth'>
        {/* Left scrollable panel of the screen*/}
        <div className='w-1/3 overflow-y-auto p-2 space-y-20 no-scrollbar'>
          <TimeDiv className='relative h-48'>
            <div className='flex flex-col relative justify-between w-full h-full'>
              <div>
                <div className='text-center text-2xl text-white my-24 font-500'>
                  {formatTime(currentTime)} <br />
                  Manila, The Philippines
                </div>
              </div>
              {/* Spinning Globe */}
              <div className='absolute top-32 left-0 w-full h-full z-0 pointer-events-none justify-center flex'>
                <div className='mx-auto'>
                  <SpinningGlobe width={500} height={500} />
                </div>
              </div>
            </div>
          </TimeDiv>

          {/* Buttons of cards */}
          <div className='z-10'>
            {bentoCards.map((card: any) => (
              <Link to={card.link} key={card.id} className='no-underline'>
                <BentoCard className='bg-bgcards p-3 mb-2'>
                  <div className='flex items-start'>
                    <div className='w-12 h-12 bg-[#444444] rounded-xl flex items-center justify-center mr-4'>
                      {card.icon}
                    </div>
                    <div className='flex-1 text-start mr-12'>
                      <span className='text-white font-semibold leading-tight'>{card.title}</span>
                      <p className='text-ptext text-xs'>{card.description}</p>
                    </div>
                  </div>
                </BentoCard>
              </Link>
            ))}
          </div>
        </div>
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
