import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";

//components
import PostItem from "../../components/PostItem/PostItem";

//image
import image1 from "../../assets/img/Heading/1.png";
import image2 from "../../assets/img/Heading/1_gray.png";
import imageNextPageFooter from "../../assets/img/icon/nextPageFooter.svg";
import imageNextPage from "../../assets/img/icon/nextPage.svg";
import imagePreviousPage from "../../assets/img/icon/previousPage.svg";
import image from "../../assets/img/imagetest.png";
import { useState } from "react";

export default function DetailPage() {
  let { detailID } = useParams();
  const { data } = useSelector((store) => store.posts);
  let dataPost = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //useRef
  const tl = useRef();
  const wraperRef = useRef();
  const navRef = useRef();
  const imageRef = useRef();
  const tl1 = useRef();
  //page next,previous and index
  let pathPrevious = detailID * 1 - 1;
  let pathNext = detailID * 1 + 1;
  let indexPage = null;
  //animation loading into page

  useEffect(() => {
   
    detailID = detailID * 1;

    if (dataPost.CategoryID === detailID) {

      setTimeout(() => {
       gsap.timeline().to("#root", { opacity: 1 });

       gsap.timeline().from(wraperRef.current, { y: 450, opacity: 0, duration: 2 });
       gsap.timeline().from(navRef.current, { y: "-100vh", opacity: 0, duration: 1 });
       gsap.timeline().from(imageRef.current, { opacity: 0, duration: 0.5});

      }, 600);
    }
  }, [detailID]);




  useEffect(() => {
    window.scrollTo(0, 0);

  });
  // console.log(dataPost);
  //get data from store redux with id = useParams react-router-dom v6

  
    if (data && detailID) {
      detailID = detailID * 1;
      for (let index = 0; index < data.length; index++) {
        if (data[index].CategoryID == detailID) {
          dataPost = data[index];
          indexPage = index + 1;
  
          if (index === 0) {
            pathPrevious = data[data.length - 1].CategoryID;
          } else {
            pathPrevious = data[index - 1].CategoryID;
          }
          if (index === data.length - 1) {
            pathNext = data[0].CategoryID;
          } else {
            pathNext = data[index + 1].CategoryID;
          }
        }
      }
    }



  //handle click next and previous page
  const handleClickNextPage = (pathNext) => {
			gsap.timeline().to("#root", { opacity: 0, duration: 0 });

    navigate(`/detail/${pathNext}`);
  };
  const handleClickPreviousPage = (pathPrevious) => {
			gsap.timeline().to("#root", { opacity: 0, duration: 0 });

    navigate(`/detail/${pathPrevious}`);
  };

  return (
    <>
      {dataPost && (
        <>
          <img
            src={dataPost.Model3D}
            alt=""
            className="nav-image"
            ref={imageRef}
          />
          <div className="navigation">
            <div
              className="back"
              onClick={() => {
                handleClickPreviousPage(pathPrevious);
              }}
            >
              <img src={imagePreviousPage} alt="" />
              <p>Back</p>
            </div>

            <div
              className="next"
              onClick={() => {
                handleClickNextPage(pathNext);
              }}
            >
              <p>Next</p>
              <img src={imageNextPage} alt="" />
            </div>
          </div>
          <div className="nav" ref={navRef}>
            {" "}
          </div>
          <div className="temp-overlay"></div>
          <div className="wraper" ref={wraperRef}>
            <div className="heading">
              {dataPost.Icon && (
                <img src={dataPost.Icon} alt="1" className="heading-image" />
              )}
              <img src={image2} alt="1" className="heading-image-mobile" />

              {dataPost && <h1>{dataPost.CategoryName}</h1>}
            </div>
            <div className="section">
              <div className="item">
                <ul>
                  {dataPost.Contents &&
                    dataPost.Contents.map((item, index) => {
                      return (
                        <PostItem data={item} key={index} id={index}></PostItem>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="footer-detail">
              <div className="footer-template">
                <div className="left">
                  <div className="page">{dataPost.CategoryID}/8</div>
                  {dataPost && (
                    <div className="title-template">
                      {dataPost.CategoryName}
                    </div>
                  )}
                  <p className="continue">Lĩnh Vực Tiếp Theo</p>
                </div>
                <div className="right">
                  <div onClick={() => handleClickNextPage(pathNext)}>
                    <img src={imageNextPageFooter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
