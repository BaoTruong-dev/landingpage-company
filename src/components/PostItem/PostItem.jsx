import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function PostItem({data,id}) {


  useEffect(()=>{
    AOS.init({
      mirror:true,
      once: false,
      duration: 1200,
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
      {data.Title&&<h2 data-aos="fade-up">
        {id + 1}. {data.Title}
      </h2>}
      <p data-aos="fade-up">{data.ContentDescription}</p>

      <img src={data.Image} alt={id} data-aos="fade-up"/>

   
    </li>
  );
}
