import React, { useState } from "react";
import circle from "../../assets/img/About/Frame 44 1.png";
import logo from "../../assets/img/About/logo.png";
import { Link, Outlet } from "react-router-dom";
import about1 from "../../assets/img/About/1.png";
import about2 from "../../assets/img/About/2.png";
import about3 from "../../assets/img/About/3 (2).png";
import about4 from "../../assets/img/About/4.png";
import { info } from "../../constant/info";
export default function About() {
	const [state, setState] = useState(0);
	const handleTab = (e) => {
		let id = e.currentTarget.dataset.id;
		setState((id));
	};
	return (
		<div className="about">
			<div className="container">
				<div className="head">
					<div className="about-left">
						<Link to="/">
							<button>
								<i class="fa fa-times"></i> <span>Close</span>
							</button>
						</Link>
					</div>
					<div className="about-center">
						<Link
							rel="noopener noreferrer"
							to="/"
							className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
						>
							<img src={logo} alt="logo" />
							<p>Dai Quoc Viet Corp</p>
						</Link>
					</div>
					<div className="about-right">
						<div className="contact-list-2">
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
					</div>
				</div>
				<div className="about-us" >
					<div className="about-item" data-id='0' onClick={handleTab}>
						<img src={about1} alt="1" />
						<div className="num">01</div>
					</div>
					<div className="about-item" data-id='1' onClick={handleTab}>
						<img src={about2} alt="2" />
						<div className="num">02</div>
					</div>
					<div className="about-item" data-id='2' onClick={handleTab}>
						<img src={about3} alt="3" />
						<div className="num">03</div>
					</div>
					<div className="about-item" data-id='3' onClick={handleTab}>
						<img src={about4} alt="4" />
						<div className="num">04</div>
					</div>
				</div>
				<div className="about-content">
					<h2>{info[state].title}</h2>
					{info[state].content.map(e => {
						if (typeof (e[0]) == 'string') {
							return <p>{e}</p>;
						} else {
							return <p><span>{e.for}</span> {e.info}</p>;
						}
					})}
				</div>
			</div>
			<div className="circle">
				<img src={circle} alt="circle" />
			</div>
		</div>
	);
}
