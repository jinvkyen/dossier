import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import NotFound from "./pages/NotFound";
import MobileNav from "./layout/MobileNav";
import Design from "./pages/Design";
import Achievement from "./pages/Achievement";
import Gallery from "./pages/Gallery";
import At from "./designs/At";


export default function App() {

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='works' element={<Works />} />
        <Route path='designs' element={<Design />} />
        <Route path='achievements' element={<Achievement />} />
        <Route path='gallery' element={<Gallery />} />
      </Route>

      {/* Design Routes */}
      <Route path='/designs-@t' element={<At />} />

      {/* Menu bar */}
      <Route path='/menu' element={<MobileNav />} />
      {/* 404 page */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
