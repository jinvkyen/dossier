import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import NotFound from "./pages/NotFound";
import MobileNav from "./layout/MobileNav";
import Design from "./pages/Design";
import Achievement from "./pages/Achievement";
import Gallery from "./pages/Gallery";
import At from "./designs/At";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // List of paths that are skipped
  const skipLoaderPaths = ["/404", "/menu", "/thank-you", "/not-found"];

  const shouldSkipLoader = skipLoaderPaths.includes(location.pathname);

  useEffect(() => {
    if (!shouldSkipLoader) {
      const timeout = setTimeout(() => setLoading(false), 4000);
      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, [shouldSkipLoader]);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='works' element={<Works />} />
        <Route path='designs' element={<Design />} />
        <Route path='/designs-@t' element={<At />} />
        <Route path='achievements' element={<Achievement />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='/thank-you' element={<Thanks />} />
      <Route path='/menu' element={<MobileNav />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}