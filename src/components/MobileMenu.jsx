import React from 'react'

const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgb(10,10,10,0.8)] flex flex-col
        items-center justify-content transition-all duration-300 ease-in-out z-100
        ${menuOpen ? 
            "h-screen opacity-100 pointer-events-auto": 
            "h-0 opacity-0 pointer-events-none"}`
    }>
        <button onClick={()=>setMenuOpen(false)} 
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursos-pointer"
        aria-label="Close menu">
            &times;
        </button>
        <a onClick={()=>setMenuOpen(false)} href="#home" className={`text-2xl font-semibold
          text-white mt-10 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {" "}Home{" "}
        </a>
        <a onClick={()=>setMenuOpen(false)} href="#about" className={`text-2xl font-semibold
          text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {" "}About{" "}
        </a>
        <a onClick={()=>setMenuOpen(false)} href="#contact" className={`text-2xl font-semibold
          text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {" "}Contact{" "}
        </a>
        <a onClick={()=>setMenuOpen(false)} href="#projects" className={`text-2xl font-semibold
          text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {" "}Projects{" "}
        </a>
    </div>
  )
}

export default MobileMenu