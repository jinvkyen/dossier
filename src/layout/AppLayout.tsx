import { Outlet } from "react-router-dom";
// import Menu from "../components/Menu";
import MobileNav from "../components/MobileNav";

export default function AppLayout() {
  return (
    <>
      <div className='block lg:hidden'>
        <MobileNav />
      </div>

      <div className='bg-background flex max-h-screen w-full overflow-hidden text-white scroll-smooth font-inter'>
        <div className='md:flex hidden md:w-2/3 lg:w-1/2 xl:w-1/3 scroll-smooth'>
          {/* <Menu /> */}
        </div>

        {/* Right scrollable panel of the screen*/}
        <div className='block overflow-y-auto scroll-smooth'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
