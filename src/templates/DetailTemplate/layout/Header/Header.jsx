import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/img/logo.png";
import gsap from "gsap";


export default function Header() {


	//useRef, animation with gsap
	const tl=useRef();
	const menuLeftRef=useRef();
	const closeIconRef=useRef();
	const logoRef=useRef();


	const navigate=useNavigate();


	//animation when loading into page
	useEffect(()=>{
		tl.current=gsap.timeline().from(menuLeftRef.current,{
			opacity:0, y:40, duration: 0.75, delay:1
		},"-=0.5").from(closeIconRef.current,{
			opacity:0, rotate: "-360", duration: 1, x:-50,
		},"-=0.2").from(logoRef.current, { y: 40, duration: 1, opacity: 0 }, '-=1.5');
	},[])


	// animation when close page
	const handleClose=()=>{
		gsap.timeline().to(".wraper",{y:120, duration:1 ,opacity:0});
		gsap.timeline().to(".nav",{y:"-100vh", opacity:0, duration: 2.5},"-=0.5");
		gsap.timeline().to(".nav-image",{opacity:0,duration:1});
		gsap.timeline().to(".social-list",{opacity:0,x:"105%", duration: 1.5});
		gsap.timeline().to(".navigation",{opacity:0});
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
