import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
    const frontSkills = [ 
    "Javascript", 
    "HTML", 
    "CSS", 
    "Tailwind", 
    "Bootstrap", 
    "React",
    "Zustand", 
    "Vite", ];

    const otherSkills=[
        "Git", 
        "Github", 
        "npm",
    ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold my-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border transition-all
            hover:-translate-y-1">
                <p className="text-gray-400 mb-6">
                    I'm dedicated Front-end developer with proficient skills in HTML, CSS, JavaScript and React.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            { frontSkills.map((tech, index)=>(
                                <span  key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:-translate-y-0.5 transition-all
                                hover:shadow-[0_2px_8px_rgba(60,130,245,0.2)]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Aditional Knowledge</h3>
                        <div className="flex flex-wrap gap-2">
                            { otherSkills.map((tech, index)=>(
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:-translate-y-0.5 transition-all
                                hover:shadow-[0_2px_8px_rgba(60,130,245,0.2)]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-9">&#x1f4dc; Education</h3>
                            <ul>
                                <li className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                                    <strong>CoderHouse Frontend Bootcamp (2023)</strong>
                                </li>
                                 <li className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                                    <strong>Web Developement from Mintic (2022)</strong>
                                </li>
                            </ul>
                </div>
                 <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-9">&#x1f4cc; Work Experience</h3>
                            <ul>
                                <li className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                                    I don't have work experience as a developer, but my intention is to become
                                    part of a team where I can put into practice everything I have learned.
                                </li>
                                <li className="list-disc list-inside text-gray-400 mb-4 space-y-2"> 
                                    I worked as a bilingual agent in a company called Teleperformance in 2023.
                                </li>
                                 <li className="list-disc list-inside text-gray-400 mb-4 space-y-2"> 
                                    Also I've been working in a familiar business for 5 years, and I want to change
                                    my career path.
                                </li>
                            </ul>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About