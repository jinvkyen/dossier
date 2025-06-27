import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import NavActive from "./NavActive";
// import MobileNav from "./MobileNav";

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
            {/* Mobile */}
            <NavActive/>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
