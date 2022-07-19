import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../../assets/img/logo.png";
import gsap from "gsap";


export default function Header() {

	const tl=useRef();
	const menuLeftRef=useRef();
	const closeIconRef=useRef();
	const logoRef=useRef();
	const navigate=useNavigate();
	useEffect(()=>{
		tl.current=gsap.timeline().from(menuLeftRef.current,{
			opacity:0, y:40, duration: 0.75, delay:1
		},"-=0.5").from(closeIconRef.current,{
			opacity:0, rotate: "-360", duration: 1, x:-50,
		},"-=0.2").from(logoRef.current, { y: 40, duration: 1, opacity: 0 }, '-=1.5');
	},[])

	const handleClose=()=>{

		const rightPage=gsap.timeline().to(".wraper",{y:120, duration:1 ,opacity:0});
		const leftPage=gsap.timeline().to(".nav",{y:-6000, opacity:0, duration: 3},"-=0.5");
		const imageNav=gsap.timeline().to(".nav-image",{opacity:0,duration:1});
		const socialList=gsap.timeline().to(".social-list",{opacity:0,x:"105%", duration: 1.5});
		rightPage.play();
		leftPage.play();
		imageNav.play();
		socialList.play();

		tl.current.reverse();
		setTimeout(() => {
			navigate('/');
		}, 1800);
	}
  return (
    <div className='header-template'>
      					<div className="header-menu">
						<div className="menu-left" ref={menuLeftRef}  onClick={handleClose}>
				
								<button>
									<i class="fa fa-times" ref={closeIconRef}></i> <span>Close</span>
								</button>
						
						</div>
						<div className="menu-right" onClick={handleClose}>
							<div className="header-logo" ref={logoRef}>
							
									<img src={logo} alt="logo"  />
									<p>DaiQuocVietCorp</p>
						
							</div>
						</div>
					</div>

    </div>
  )
}
