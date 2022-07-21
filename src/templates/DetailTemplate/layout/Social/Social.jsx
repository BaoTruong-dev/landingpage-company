import React from "react";
import gsap from 'gsap';
import { useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Social() {

	const tl=useRef();
	const {detailID}=useLocation();
	useEffect(()=>{
		gsap.timeline().from(".social-list".current,{x:"110vw", duration: 15, opacity: 0})

	},[detailID])
	return (
			<div className="social-list" >
				<a href="tel:+123456789" className="social-icon">
					<i class="fa fa-phone" ></i>
				</a>
				<a href="mailto:m.bluth@example.com" className="social-icon">
					<i class="fa fa-envelope" ></i>
				</a>
				<a href="https://www.facebook.com/daiquocvietcorp" className="social-icon">
					<i class="fab fa-facebook" ></i>
				</a>
			</div>
	);
}
