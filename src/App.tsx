import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Works from "./pages/Works";


export default function App() {
  return (
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='works' element={<Works />} />
        </Route>
      </Routes>
  );
}
