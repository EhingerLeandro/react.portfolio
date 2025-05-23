import React from 'react';
import {useState} from "react";
import RevealOnScroll from "./RevealOnScroll.jsx";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Slide } from 'react-toastify';

const Contact = () => {

  const [formData, setFormData] = useState({
    name:"",
    emai:"",
    message:""
  });

  const SERVICE = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC = import.meta.env.VITE_PUBLIC_KEY;

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE, TEMPLATE, e.target, PUBLIC)
    .then((result)=>{

      toast.success('Message sent successfully!');
      setFormData({
        name:"",
        email:"",
        message:""
      })
      console.log(result);

    })
    .catch((error)=>{
      toast.error('Something went wrong, please try again later.');
      console.log(error);
    })
}


  return (
    <section id="contact" className="min-h-screen flex items-center justify-center 
    py-20">
      <RevealOnScroll>
        <div > 
          <h2 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent
          text-3xl font-bold mb-8 text-center">
            Get In Touch
          </h2>
          <form className="space-y-6 md:w-lg" onSubmit={handleSubmit} >
            <div className="relative">
              <input type="text" id="name" name="name" required className="w-full bg-white/5 
              border border-white/10 rounded px-4 py-1 text-white transition 
               focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
               placeholder="Name" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}/>
            </div>
            <div className="relative">
              <input type="email" id="email" name="email" required className="w-full bg-white/5 
              border border-white/10 rounded px-4 py-1 text-white transition 
               focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
               placeholder="Email" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})}/>
            </div>
             <div className="relative">
              <textarea id="message" name="message" rows={4} required className="w-full bg-white/5 
              border border-white/10 rounded px-4 py-1 text-white transition 
               focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
               placeholder="Your message..." value={formData.message} onChange={e=>setFormData({...formData, message:e.target.value})}/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium 
            transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(60,130,245,0.4)]">
              Send Message
            </button>
            <ToastContainer
              position="bottom-center"
              autoClose={4000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Slide}
              />
          </form>
        </div>
      </RevealOnScroll>
    </section >
  )
}

export default Contact