import { Outlet } from "react-router-dom";
import { useEffect,useState } from "react";
import Header from "./layout/Header/Header";
import Social from "./layout/Social/Social";
import AOS from 'aos';
export const DetailTemplate = (props) => {




  return (
    <>
    
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
    
    </>
  );
};
