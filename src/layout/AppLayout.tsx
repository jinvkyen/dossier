import { Link, Outlet } from "react-router-dom";
import Menu from "./Menu";
import NavActive from "./NavActive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function AppLayout() {
  return (
    <>
      <div className='bg-background flex max-h-screen w-full overflow-hidden text-white scroll-smooth font-inter'>
        <div className='md:block hidden md:w-2/3 lg:w-1/2 xl:w-1/3 scroll-smooth'>
          {/* Desktop */}
          <Menu />
        </div>

        <div className='bg-background block overflow-y-auto scroll-smooth'>
          <div className='block md:hidden md:w-2/3 lg:w-1/2 xl:w-1/3 scroll-smooth'>
            <div className='fixed z-10 bottom-96 right-0'>
              <Link to={"/menu"}>
                <button
                  className='animate-bounce text-center text-base bg-bgcards text-ptext border border-bghover flex items-center justify-center
           rounded-full px-2 py-1 font-sf hover:bg-bghover hover:text-white transition-colors duration-500 cursor-pointer'>
                  Back to menu <FontAwesomeIcon icon={faArrowUp} className='pl-1' />
                </button>
              </Link>
            </div>
            {/* Mobile */}
            <NavActive />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
