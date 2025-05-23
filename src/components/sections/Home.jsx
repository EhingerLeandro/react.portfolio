import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-0 ">
        <RevealOnScroll>
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 p-2 bg-clip-text
          bg-gradient-to-r from-blue-500 to-cyan-400  leading-tight text-transparent">
              Hi, I'm Leandro López
          </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I am a frontend developer who likes to create nice and functional web applications.
              My goals are to build optimal and accessible interfaces that provide a great user experience.
          </p>
          <div>
            <a href="#projects" className="inline-block mx-1 bg-blue-500 text-white py-3 px-5 rounded
            font-medium transition-all duration-200 transform hover:-translate-y-0.5
            hover:shadow-[0_0_15px_rgba(60,130,245,0.4)]">
              View Projects
            </a>
            <a href="#contact" className="inline-block mx-1 border border-blue-500 text-blue-500 py-3 px-6 rounded 
            font-medium transition-all duration-200 transform hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(60,130,245,0.2)]">
              Contact Me
            </a>
          </div>
        </div> 
        </RevealOnScroll> 
    </section>
  ) 
}

export default Home