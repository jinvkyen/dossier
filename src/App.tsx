// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <div className="min-h-screen font-sf bg-background items-center justify-center">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
