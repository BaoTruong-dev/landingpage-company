import React from "react";
import gsap from 'gsap';
import { useRef } from "react";
import { useEffect } from "react";

export default function Social() {

	const tl=useRef();
	const socialListRef=useRef();

	useEffect(()=>{
		tl.current=gsap.timeline().from(socialListRef.current,{x:"105%", duration: 2, opacity: 0})

	},[])
	return (
			<div className="social-list" ref={socialListRef}>
				<a href="tel:+123456789">
					<i class="fa fa-phone"></i>
				</a>
				<a href="mailto:m.bluth@example.com">
					<i class="fa fa-envelope"></i>
				</a>
				<a href="https://www.facebook.com/daiquocvietcorp">
					<i class="fab fa-facebook"></i>
				</a>
			</div>
	);
}
