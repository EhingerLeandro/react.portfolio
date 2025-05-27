import React from 'react';
import RevealOnScroll from './RevealOnScroll';

import jscript from "../../assets/icons/jscript.png";
import typescript from "../../assets/icons/typescript.png";
import css from "../../assets/icons/css.png";
import html from "../../assets/icons/html.png";
import firebase from "../../assets/icons/firebase.png";
import mysql from "../../assets/icons/mysql.png";
import mongodb from "../../assets/icons/mongodb.webp";
import express from "../../assets/icons/express.png";
import node from "../../assets/icons/nodejs.png";
import tail from "../../assets/icons/tailwindcss.png";
import bootstrap from "../../assets/icons/bootstrap.jpg";
import react from "../../assets/icons/react.webp";
import zustand from "../../assets/icons/zustand.png";
import vite from "../../assets/icons/vite.jpg";
import git from "../../assets/icons/git.png";
import github from "../../assets/icons/github.png";
import npm from "../../assets/icons/npm.png";
import wordpress from "../../assets/icons/wordpress.png";


const About = () => {
    const proficientSkills = [ 
        {tech:"React", icon: react},
        {tech:"JScript", icon: jscript}, 
        {tech:"HTML",icon: html}, 
        {tech:"CSS", icon: css}, 
    ];

    const middleSkills=[
        {tech:"Bootstrap", icon: bootstrap},
        {tech:"Tailwind", icon: tail},
        {tech:"Zustand", icon: zustand}, 
        {tech:"Wordpress", icon: wordpress},
        {tech:"Firebase", icon: firebase},
        {tech:"Vite", icon: vite}
    ]

    const basicSkills=[
        {tech: "TypeScript", icon: typescript},
        {tech:"Node.js", icon: node},
        {tech:"Express", icon: express},
        {tech:"MongoDB", icon: mongodb},
        {tech:"MySQL", icon: mysql},
    ]

    const otherSkills=[
        {tech:"Git", icon: git},
        {tech:"Github", icon: github},
        {tech:"npm", icon: npm},
    ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold my-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <img src="https://avatars.githubusercontent.com/u/96314095?v=4" className="w-32 h-32 rounded-full mb-6 mx-auto grayscale-25" alt="Leandro Dev" />
            <div className="rounded-xl p-8 border-white/10 border transition-all
            hover:-translate-y-1">
                <p className="text-gray-400 mb-6">
                    I'm dedicated Front-end developer with proficient skills in HTML, CSS, JavaScript and React.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Proficient Level in</h3>
                        <div className="flex flex-wrap gap-2">
                            { proficientSkills.map((item, index)=>(
                                <span  key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:-translate-y-0.5 transition-all
                                hover:shadow-[0_2px_8px_rgba(60,130,245,0.2)]">
                                    {item.tech}
                                    <img src={item.icon} alt={item.tech} className="inline-block ml-2 w-4 h-4 rounded" />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Intermediate skills</h3>
                        <div className="flex flex-wrap gap-2">
                            { middleSkills.map((item, index)=>(
                                <span  key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:-translate-y-0.5 transition-all
                                hover:shadow-[0_2px_8px_rgba(60,130,245,0.2)]">
                                    {item.tech}
                                    <img src={item.icon} alt={item.tech} className="inline-block ml-2 w-4 h-4 rounded" />
                                </span>
                            ))}
                        </div>
                    </div>
                     <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Basic skills</h3>
                        <div className="flex flex-wrap gap-2">
                            { basicSkills.map((item, index)=>(
                                <span  key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:-translate-y-0.5 transition-all
                                hover:shadow-[0_2px_8px_rgba(60,130,245,0.2)]">
                                    {item.tech}
                                    <img src={item.icon} alt={item.tech} className="inline-block ml-2 w-4 h-4 rounded" />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Aditional knowledge</h3>
                        <div className="flex flex-wrap gap-2">
                            { otherSkills.map((item, index)=>(
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:-translate-y-0.5 transition-all
                                hover:shadow-[0_2px_8px_rgba(60,130,245,0.2)]">
                                    {item.tech}
                                    <img src={item.icon} alt={item.tech} className="inline-block ml-2 w-4 h-4 rounded" />
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
                                <li className="list-disc list-inside text-gray-400 mb-4 space-y-2 text-sm">
                                    <strong>CoderHouse Frontend Bootcamp 2023</strong>
                                </li>
                                 <li className="list-disc list-inside text-gray-400 mb-4 space-y-2 text-sm">
                                    <strong>Web Developer Diploma Mintic 2022</strong>
                                </li>
                                <li className="list-disc list-inside text-gray-400 mb-4 space-y-2 text-sm">
                                    <strong>Jamestown English Center B2 Level</strong>
                                </li>
                            </ul>
                </div>
                 <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-9">&#x1f4cc; Work Experience</h3>
                            <ul>
                                <li className="list-disc list-inside text-gray-400 mb-4 space-y-2 text-sm">
                                    I don't have work experience as a developer, but my intention is to become
                                    part of a team where I can put into practice everything I have learned.
                                </li>
                                <li className="list-disc list-inside text-gray-400 mb-4 space-y-2 text-sm"> 
                                    I worked as a bilingual agent in a company called Teleperformance in 2023.
                                </li>
                                 <li className="list-disc list-inside text-gray-400 mb-4 space-y-2 text-sm"> 
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