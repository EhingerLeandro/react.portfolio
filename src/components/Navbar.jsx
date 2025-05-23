import React from 'react';
import {useEffect} from "react";

const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgb(10, 10, 10)]
    border-white/10 border-b-1 shadow-large">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-10">
                <a href="#home" className="font-mono text-2xl font-bold text-white">
                   {" "}Leandro <span className="text-blue-400">Dev </span> {" "}
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                onClick={()=>setMenuOpen(prev => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 
                    hover:text-white transition-colors">
                        {" "}Home{" "}
                    </a>
                    <a href="#about" className="text-gray-300 
                    hover:text-white transition-colors">
                        {" "}About{" "}
                    </a>
                    <a href="#contact" className="text-gray-300 
                    hover:text-white transition-colors">
                        {" "}Contact{" "}
                    </a>
                    <a href="#projects" className="text-gray-300 
                    hover:text-white transition-colors">
                        {" "}Projects{" "}
                    </a>
                </div>
            </div>
        </div>
    </nav >
  )
}

export default Navbar;