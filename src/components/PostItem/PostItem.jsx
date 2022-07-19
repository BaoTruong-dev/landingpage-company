import React from "react";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"

export default function PostItem({data,id}) {


  useEffect(()=>{
    AOS.init({
      mirror:true,
      once: false,
      duration: 500,
    });
    AOS.refresh();
    document.querySelectorAll('img').forEach((img)=>{
      img.addEventListener("load",()=>{
        AOS.refresh();
      })
    });
  },[])

  return (
    <li  >
      <h2 data-aos="fade-up">
        {id+1}. {data.title}
      </h2>
      <p data-aos="fade-up">{data.content}</p>
      <img src={data.image} alt={id} data-aos="fade-in"/>
    </li>
  );
}
