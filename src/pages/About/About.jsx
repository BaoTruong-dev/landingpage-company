import React, { useEffect, useRef, useState } from "react";
import circle from "../../assets/img/About/Frame 44 1.png";
import logo from "../../assets/img/About/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import about1 from "../../assets/img/About/1.png";
import about2 from "../../assets/img/About/2.png";
import about3 from "../../assets/img/About/3 (2).png";
import about4 from "../../assets/img/About/4.png";
import { info } from "../../constant/info";
import { gsap } from "gsap";
export default function About() {
	const [state, setState] = useState(0);
	const navigate = useNavigate();
	const tl = useRef();
	const aboutRef = useRef();
	const iconList = useRef();
	const q = gsap.utils.selector(iconList);
	const q1 = gsap.utils.selector(aboutRef);
	const closeRef = useRef();
	const closeIconRef = useRef();
	const overlayRef = useRef();
	const logoRef = useRef();
	const contentRef = useRef();
	const circleRef = useRef();
	const handleTab = (e) => {
		let id = e.currentTarget.dataset.id;
		setState((id));
	};
	const handleClose = () => {
		tl.current.reverse();
		setTimeout(() => {
			navigate('/');
		}, 3500);
	};
	useEffect(() => {
		tl.current = gsap.timeline().from(overlayRef.current, { scaleY: 0, duration: 1.2, opacity: 0, background: 'black' }).from(closeIconRef.current,
			{
				opacity: 0, rotation: "-360", duration: 1,
			}, "-=.5"
		).from(closeRef.current, { y: 10, duration: .8, opacity: 0, color: '#ffae0c' }, "-=.5").from(logoRef.current, { y: 30, duration: 1, opacity: 0 }, '-=1').from(q('.icon'), 1, { x: 30, opacity: 0, stagger: .3 }, "-=.5").from(q1('.about-item'), 1, { y: 30, opacity: 0, stagger: 0.3 }, "-=1.5").from(contentRef.current, 1, { y: 30, opacity: 0 }, "-=1.5").from(circleRef.current, 1, { scale: 0 }, "-=1");
	}, []);
	return (
		<div className="about" ref={overlayRef}>
			<div className="container">
				<div className="head">
					<div className="about-left" onClick={handleClose}>
						<div>
							<button>
								<i class="fa fa-times" ref={closeIconRef}></i> <span ref={closeRef}>Close</span>
							</button>
						</div>
					</div>
					<div className="about-center" ref={logoRef}>
						<div
							className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
							<img src={logo} alt="logo" />
							<p>Dai Quoc Viet Corp</p>
						</div>
					</div>
					<div className="about-right">
						<div className="contact-list-2" ref={iconList}>
							<a href="tel:+123456789" className="icon">
								<i className="fa fa-phone"></i>
							</a>
							<a href="mailto:m.bluth@example.com" className="icon">
								<i className="fa fa-envelope"></i>
							</a>
							<a href="https://www.facebook.com/daiquocvietcorp" className="icon">
								<i className="fab fa-facebook"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="about-us" ref={aboutRef}>
					<div className={`about-item ${state == 0 ? 'active' : null}`} data-id='0' onClick={handleTab}>
						<img src={about1} alt="1" />
						<div className="num">01</div>
					</div>
					<div className={`about-item ${state == 1 ? 'active' : null}`} data-id='1' onClick={handleTab}>
						<img src={about2} alt="2" />
						<div className="num">02</div>
					</div>
					<div className={`about-item ${state == 2 ? 'active' : null}`} data-id='2' onClick={handleTab}>
						<img src={about3} alt="3" />
						<div className="num">03</div>
					</div>
					<div className={`about-item ${state == 3 ? 'active' : null}`} data-id='3' onClick={handleTab}>
						<img src={about4} alt="4" />
						<div className="num">04</div>
					</div>
				</div>
				<div className="about-content" ref={contentRef}>
					<h2>{info[state].title}</h2>
					{info[state].content.map((e, index) => {
						if (typeof (e[0]) == 'string') {
							return <p key={index}>{e}</p>;
						} else {
							return <p key={index}><span>{e.for}</span> {e.info}</p>;
						}
					})}
				</div>
			</div>
			<div className="circle" ref={circleRef}>
				<img src={circle} alt="circle" />
			</div>
		</div >
	);
}
