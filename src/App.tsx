import Home from "./pages/Home";

import Preloader from "./components/preloder/Preloader";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Header from "./components/Header/Header";
import Logo from "./components/Header/Logo";
import Navbar from "./components/Header/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      {!loading && (
        <div className="flex flex-col h-svh w-full">
          <Header>
            <Logo />
            <Navbar />
          </Header>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
