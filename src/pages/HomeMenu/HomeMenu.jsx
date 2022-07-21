import { gsap } from 'gsap';
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
export default function HomeMenu() {
	const { data } = useSelector(store => store.service);
	// const [isClosed, setIsClosed] = useState(false);
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
		}, 2670);
	};
	const handleRedirect = (path) => {
		tl.current.reverse();
		setTimeout(() => {
			navigate(`${path}`);
		}, 2670);
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
							<div className={`menu-left`} onClick={() => handleRedirect('/')}>
								<div>
									<button>
										<i className="fa fa-times" ref={closeIconRef}></i> <span ref={closeRef}>Close</span>
									</button>
								</div>
							</div>
							<div className="menu-right">
								<div className="header-logo" ref={logoRef} onClick={() => handleRedirect('/about')}>
									<div
										rel="noopener noreferrer"
										to="/"
										className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
									>
										<div className="img" >
											<img src={logo} alt="logo" />
										</div>
										<p>DaiQuocVietCorp</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="list">
						<h2 className="title" ref={titleRef}>Lĩnh Vực</h2>
						<div className="list-content" ref={listContentRef}>
							{data?.map((e, index) => {
								return <ServiceItem type={index % 2 === 0 ? true : false} key={index} content={e.CategoryDescription} src={e.Image} name={e.CategoryName} id={e.CategoryID} onClick={() => redirect(e.CategoryID)} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
