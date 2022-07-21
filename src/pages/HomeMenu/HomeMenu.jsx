import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import { API } from '../../constant/api';
export default function HomeMenu() {
	const { data } = useSelector(store => store.service);
	console.log(data);
	const [isClosed, setIsClosed] = useState(false);
	const navigate = useNavigate();
	const overlayRef = useRef();
	const closeIconRef = useRef();
	const closeRef = useRef();
	const logoRef = useRef();
	const titleRef = useRef();
	const tl = useRef();
	const listContentRef = useRef();
	const redirect = (path) => {



		tl.current.reverse();
		setTimeout(() => {
			gsap.timeline().to("#root", { opacity: 0, duration: 0 });

			navigate(`/detail/${path}`);
		}, 2600);
	};

	const handleClosed = () => {
		tl.current.reverse();
		setTimeout(() => {
			navigate('/');
		}, 2700);
	};
	useEffect(() => {
		tl.current = gsap.timeline().from(overlayRef.current, { scaleY: 0, duration: 1.2, opacity: 0 }).from(closeIconRef.current,
			{
				y: 10, opacity: 0, rotation: "-360", duration: 1, color: '#ffae0c',
			}, "-=.5"
		).from(closeRef.current, { y: 10, duration: .5, opacity: 0, color: '#ffae0c' }, "-=.5").from(logoRef.current, { scale: '0', duration: 1.5, opacity: 0 }, '-=1').from(titleRef.current, { y: 20, opacity: 0, duration: 1 }, "-=.5").from(
			listContentRef.current, .5,
			{ y: 30, opacity: 0 },
			"-=.5"
		);
	}, []);
	return (
		<>
			<div className="home-menu" >
				<div className="container" ref={overlayRef}>
					<div className='header'>
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

						<h2 className="title" ref={titleRef}>Lĩnh Vực</h2>
						<div className="list-content" ref={listContentRef}>
							{data?.map((e, index) => {
								return <ServiceItem type={index % 2 == 0 ? true : false} key={index} content={e.CategoryDescription} src={`${API}/${e.Image}`} name={e.CategoryName} id={e.CategoryID} onClick={() => redirect(e.CategoryID)} />;

							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
	}