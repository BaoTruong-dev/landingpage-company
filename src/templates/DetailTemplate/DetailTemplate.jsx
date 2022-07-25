import { Outlet } from "react-router-dom";
import { useEffect,useState } from "react";
import Header from "./layout/Header/Header";
import Social from "./layout/Social/Social";
import AOS from 'aos';
import { useSelector } from "react-redux";
export const DetailTemplate = (props) => {

  const { data} =useSelector((store)=>store.posts);
 
  return (
    <>
   {data.length>0&&(
    <div className="container-detail">
 <div className="header-detail">
   <Header />
 </div>
 <div className="social">
   <Social />
 </div>
 <div className="outlet">
   <Outlet />
 </div>
</div>
   )}
 
    
    </>
  );
};
