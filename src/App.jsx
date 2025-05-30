import {useState} from "react";
import './App.css';
import "./index.css";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Home from "./components/sections/Home.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-1000 absolute 
            bg-black text-gray-100 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      </div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects/>
      <Contact/>
      <div className="relative bottom-0 left-0 w-full bg-gray-900 text-gray-400 text-center py-4">
        <p className="text-sm"> Created with TailwindCSS / © 2025 Leandro Dev</p>
      </div>
    </>
  )
}

export default App
