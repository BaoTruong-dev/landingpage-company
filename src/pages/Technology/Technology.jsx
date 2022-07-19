import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/img/Heading/1.png";
import { useState } from "react";
import { useEffect } from "react";
import PostItem from "../../components/PostItem/PostItem";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/img/imagetest.png";

export default function Technology() {
  AOS.init({ once: false, mirror: true });
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/pages?id=congnghe")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data[0]);
      });
  }, []);

  if (data) {
    console.log(data.name);
  }
  return (
    <>
      <img src={image} alt="" className="nav-image" />

      <div className="wraper">
        <div className="heading">
          <img src={image1} alt="1" data-aos="fade-up" />
          <h1 data-aos="fade-up">Công Nghệ</h1>
        </div>
        <div className="section">
          <div className="item">
            <ul>
              {data &&
                data.posts.map((item, index) => {
                  return (
                    <PostItem data={item} key={index} id={index}></PostItem>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="footer-detail">
          <div className="footer-template">
            <div className="left" data-aos="slide-left">
              <div className="page">1/8</div>
              <div className="title-template">DU LỊCH - VUI CHƠI GIẢI TRÍ</div>
              <p className="continue">Lĩnh Vực Tiếp Theo</p>
            </div>
            <div className="right">
              <Link to="/detail/travel">
                <i class="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
