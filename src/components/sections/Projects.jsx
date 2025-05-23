import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex justify-center items-center py-20">
       <RevealOnScroll>
       <div className="max-w-3xl mx-auto px-4">
            <h2  className="text-3xl font-bold my-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className='rounded-xl p-8 border-white/10 border rounded transition-all
                hover:-translate-y-1 gap-2'>
                    <h3 className="text-xl font-bold mb-4">Weather App</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        This is a weather app that consumes an API to fetch data about the climate 
                        conditions from different capital cities.
                    </p>
                    {["React", "CSS", "Vite", "Geocity API" ].map((tech, index)=>(
                        <span className="bg-blue-500/10 text-blue-500 mb-1  mr-1 py-1 px-3 rounded-full text-sm 
                        transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(60,130,245,0.1)] inline-block" 
                        key={index}>
                            {tech}
                        </span>
                    ))} 
                    <div className="mt-4">
                        <a href="https://react-weather-api-tan.vercel.app" target="_blank"
                        className="text-blue-400 hover:text-blue-300 transition-colors">
                            View Project &#8594; 
                        </a>
                    </div>
                </div>
                <div className='rounded-xl p-8 border-white/10 border rounded transition-all
                hover:-translate-y-1 gap-2'>
                    <h3 className="text-xl font-bold mb-4">Questionary App</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Here we have a quiz app, where the player must try to find the right answer between
                        4 posible options.
                    
                    </p>
                    {["React", "MaterialUI", "Vite", "TypeScript",  "Confetti", "Zustand" ].map((tech, index)=>(
                        <span className="bg-blue-500/10 text-blue-500 mb-1 mr-1 py-1 px-3 rounded-full text-sm 
                        transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(60,130,245,0.1)] inline-block"  
                        key={index}>
                            {tech}
                        </span>
                    ))} 
                    <div className="mt-4">
                        <a href="https://react-zustand-quiz.vercel.app" target="_blank"
                        className="text-blue-400 hover:text-blue-300 transition-colors">
                            View Project &#8594; 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects