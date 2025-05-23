import React from 'react';
import {useRef, useEffect} from "react";

//This a wrapper component that envolves the children and adds a class to it.
const RevealOnScroll = ({children}) => {

  const refer = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          refer.current.classList.add("visible");
        }
      }, {treeshold: 0.2, rootMargin: "0px 0px -50px 0px"}
    );
    if(refer.current) observer.observe(refer.current);
    return ()=> observer.disconnect();
  },[])

  return (
    <div ref={refer} className="reveal">
      {children}
    </div>
  )
}

export default RevealOnScroll