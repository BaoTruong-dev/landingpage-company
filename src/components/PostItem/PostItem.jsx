import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function PostItem({ data, id }) {
  AOS.init({ once: false, mirror: true });
  return (
    <li >
      <h2 data-aos="fade-up">
        {id + 1}. {data.title}
      </h2>
      <p data-aos="fade-up">{data.content}</p>
      <img src={data.image} alt={id} data-aos="image-fade-up-animation" data-aos-delay="200" data-aos-duration="600" />
    </li>
  );
}
