import React from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "../../assets/img/Heading/1.png";
import image2 from "../../assets/img/Heading/1_gray.png";

import { useState } from "react";
import { useEffect } from "react";
import PostItem from "../../components/PostItem/PostItem";
import image from "../../assets/img/imagetest.png";
import { useRef } from "react";
import gsap from 'gsap';
import { useDispatch, useSelector } from "react-redux";

export default function DetailPage() {
   
    
   
    const {data}=useSelector(store=>store.posts);

    const tl=useRef();
    const wraperRef=useRef();
    const navRef=useRef();
    const imageRef=useRef();
    const [reload,setReload]=useState();
    const dispatch=useDispatch();
    let dataPost=[];
    let {detailID}=useParams();
    console.log(detailID);
    let pathPrevious="";
    let pathNext="";
    let indexPage=null;


    useEffect(()=>{
      tl.current=gsap.timeline().from(wraperRef.current,{y:120, opacity:0, duration: 1,display: "none"}).from(imageRef.current,{opacity:0, duration:1},"-=2")
      const leftPage=gsap.timeline().from(".nav",{y:-7000, opacity:0, duration: 4},"-=0.5");
      leftPage.play();
    },[])

    if(data && detailID){
        for (let index = 0; index < data.length; index++) {
           if(data[index].id===detailID){
                dataPost=data[index];
                indexPage=index+1;
                if(index===0){
                  pathPrevious=data[data.length-1].id;
                } else{
                  pathPrevious=data[index-1].id;

                } 
                if(index===data.length-1){
                  pathNext=data[0].id;
                }else{
                  pathNext=data[index+1].id;
                }
           }
            
        }
    }

  return (
   
    <>

   <img src={image} alt="" className="nav-image" ref={imageRef}/>
   <div className="navigation">
          <Link to= {`/detail/${pathPrevious}`}  state={{ id: pathPrevious, data: data }}>
              <div className="back">
                <i class="fa fa-arrow-left"></i>
                <p>Back</p>
              </div>
            </Link>
            <Link to= {`/detail/${pathNext}`}  state={{ id: pathNext, data: data }}>
              <div className="next">
                <p>Next</p>
                <i class="fa fa-arrow-right"></i>
              </div>
            </Link>
          </div>
    <div className="nav" ref={navRef}>
     
        </div>
    <div className="wraper" ref={wraperRef}>
      <div className="heading">
        <img src={image1} alt="1"  className="heading-image"/>
        <img src={image2} alt="1"  className="heading-image-mobile"/>

        {  data && <h1>{data.name}</h1>}
      </div>
      <div className="section">
        <div className="item">
          <ul>
            {dataPost.posts &&
              dataPost.posts.map((item,index) => {
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
          {data &&  <div className="title-template">{data.name}</div>}
            <p className="continue">Lĩnh Vực Tiếp Theo</p>
          </div>
          <div className="right">
            <Link to= {`/detail/${pathNext}`}  >
              <i class="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  
  </>
  )
}
