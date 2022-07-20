import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useSelector } from "react-redux";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useRef } from "react";
export default function HomeMenu() {
	const { data } = useSelector(store => store.service);
	const [isClosed, setIsClosed] = useState(false);
	const navigate = useNavigate();
	const overlayRef = useRef();
	const closeIconRef = useRef();
	const closeRef = useRef();
	const logoRef = useRef();
	const tl = useRef();
	const redirect = (path) => {
		setTimeout(() => {
			navigate(`/detail/${path}`);
		}, 3000);
	};

	useEffect(() => {
		tl.current = gsap.timeline().from(overlayRef.current, { scaleY: 0, duration: 1.5, opacity: 0 }).from(closeIconRef.current,
			{
				opacity: 0, rotation: "-360", duration: 1,
			},

			"-=.5"
		).from(closeRef.current, { y: 20, duration: 1.5, opacity: 0, color: '#ffae0c' }, "-=.5").from(logoRef.current, { y: 20, duration: 1, opacity: 0 }, '-=1');
		;
	}, []);
	const handleClosed = () => {
		// navigate('/');
		// console.log('click');

		tl.current.reverse();
		setTimeout(() => {
			navigate('/');
		}, 3000);
	};
	return (
		<>
			<div className="home-menu" >
				<div className="container" ref={overlayRef}>
					<div className={`header`}>
						<div className="header-menu">
							<div className={`menu-left ${isClosed}`} onClick={handleClosed}>
								<div>
									<button>
										<i class="fa fa-times" ref={closeIconRef}></i> <span ref={closeRef}>Close</span>
									</button>
								</div>
							</div>
							<div className="menu-right">
								<div className="header-logo" ref={logoRef}>
									<Link
										rel="noopener noreferrer"
										to="/"
										className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
									>
										<div className="img" >
											<img src={logo} alt="logo" />
										</div>
										<p>DaiQuocVietCorp</p>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="list">
						<h2 className="title">Lĩnh Vực</h2>
				
						<div className="list-content">
							{data.length > 0 && data?.map(e => {
								return <ServiceItem key={e.id} content={e.content} src={e.img} name={e.service} id={e.id} onClick={() => redirect(e.path)} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
