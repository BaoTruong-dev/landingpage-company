import React,{useEffect,useRef} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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

export default function DetailPage() {
  let { detailID } = useParams();
  const { data } = useSelector((store) => store.posts);
  let dataPost = [];

  //useRef
  const tl = useRef();
  const wraperRef = useRef();
  const navRef = useRef();
  const imageRef = useRef();

  //page next,previous and index
  let pathPrevious = "";
  let pathNext = "";
  let indexPage = null;


  //animation loading into page
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(wraperRef.current, { y: 850, opacity: 0, duration: 3 }, "-=1")
      .from(navRef.current, { y: "-100vh", opacity: 0, duration: 1 }, "-=2")
      .from(imageRef.current, { opacity: 0, duration: 1 }, "-=0.8");
  }, []);



//get data from store redux with id = useParams react-router-dom v6
  if (data && detailID) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].id === detailID) {
        dataPost = data[index];
        indexPage = index + 1;
        if (index === 0) {
          pathPrevious = data[data.length - 1].id;
        } else {
          pathPrevious = data[index - 1].id;
        }
        if (index === data.length - 1) {
          pathNext = data[0].id;
        } else {
          pathNext = data[index + 1].id;
        }
      }
    }
  }

  //handle click next and previous page
  const handleClickNextPage = (pathNext) => {
    window.location.href = `/detail/${pathNext}`;
  };
  const handleClickPreviousPage = (pathPrevious) => {
    window.location.href = `/detail/${pathPrevious}`;
  };


  return (
    <>
      <img src={image} alt="" className="nav-image" ref={imageRef} />
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
          <img src={image1} alt="1" className="heading-image" />
          <img src={image2} alt="1" className="heading-image-mobile" />

          {dataPost && <h1>{dataPost.name}</h1>}
        </div>
        <div className="section">
          <div className="item">
            <ul>
              {dataPost.posts &&
                dataPost.posts.map((item, index) => {
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
              <div className="page">{indexPage}/8</div>
              {dataPost && (
                <div className="title-template">{dataPost.name}</div>
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
  );
}
