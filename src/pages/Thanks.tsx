import { ArrowRightIcon } from "@phosphor-icons/react";
import Button from "../components/Button";
import BigBentoCard from "../components/BigBentoCard";
import { ScrollVelocity } from "../components/ScrollVelocity";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div className='flex h-screen overflow-hidden bg-background text-white scroll-smooth'>
      <div className='min-h-screen w-full overflow-y-auto p-8 grid place-items-center'>
        {/* Top Section */}
        <section className='flex flex-col lg:flex-row gap-2 h-auto'>
          {/* Left Column (Moving Name + Intro Card) */}
          <div className='flex flex-col gap-2 w-full flex-shrink-0'>
            {/* Moving Name */}
            <div className='h-full flex-shrink'>
              <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
                <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[250px] sm:w-[400px] md:w-[700px] h-[150px]'>
                  <ScrollVelocity
                    texts={["Thank You —"]}
                    velocity={70}
                    className='font-inter text-[clamp(2.5rem,4vw,3.5rem)] leading-none'
                  />
                </div>
              </BigBentoCard>
            </div>

            {/* Intro Card */}
            <div className='w-full h-full flex-shrink'>
              <BigBentoCard className='flex h-full w-full justify-center items-center'>
                <div className='flex flex-col p-6'>
                  <h1 className='text-lg font-semibold text-center'>Thanks for reaching out!</h1>
                  <p className='text-center text-ptext text-sm'>
                    Your message means a lot! Feel free to send another or head back to the start.
                  </p>
                  <div className='flex justify-center items-center mt-4'>
                    <Link to={"/"}>
                      <Button className='bg-white'>
                        Go Back Home <ArrowRightIcon size={20} className='ml-1' />
                      </Button>
                    </Link>
                  </div>
                </div>
              </BigBentoCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
