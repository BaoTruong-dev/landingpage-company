import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import background from "../../assets/img/background.png";
import menu from "../../assets/img/menu.png";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home(props) {
	const { unityProvider } = useUnityContext({
		loaderUrl: "Build/BUILD.loader.js",
		dataUrl: "Build/BUILD.wasm",
		frameworkUrl: "Build/BUILD.framework.js",
		codeUrl: "Build/BUILD.wasm",
	  });
	const [isActive, setIsActive] = useState(false);
	const navigate = useNavigate();
	const handleActive = () => {
		setIsActive(true);
		setTimeout(() => {
			navigate('/menu');
		}, 600);
	};
	return (
		<div className="home">
			{/* <Unity unityProvider={unityProvider}  style={{width:"100%",height:"100vh"}}/>; */}
			<img src={background} alt="background" />
			<div className="header-home">
				<div className="header-menu">
					<div
						rel="noopener noreferrer"
						to="/"
						className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
					>
						<div className={`detail ${isActive ? 'active' : ''}`} onClick={handleActive} >
							<p>Lĩnh Vực </p>
							<div className="img"  >
								<img src={menu} alt="menu" />
							</div>
						</div>
					</div>
				</div>

				<div className="header-logo">
					<Link
						rel="noopener noreferrer"
						to="/"
						className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
					>
						<img src={logo} alt="logo" />
						<p>DaiQuocVietCorp</p>
					</Link>
				</div>
			</div>
			<div className="footer-home">
				<div className="contact">
					<div className="contact-list">
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
					<div className="contact-menu hover-menu">
						<i class="fa fa-phone phone-1"></i>
						<i class="fa fa-envelope "></i>
					</div>

				</div>
			</div>
		</div>
	);
}
