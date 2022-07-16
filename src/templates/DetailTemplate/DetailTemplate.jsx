import { Outlet, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./layout/Header/Header";
import Social from "./layout/Social/Social";
export const DetailTemplate = (props) => {
	useEffect(() => {
        window.scrollTo(0,0)
    })

	return (
		<>
			<div className="header-detail">
				<Header />
			</div>
			<div className="social">
				<Social />
			</div>
			<div className="outlet">
				<Outlet />
			</div>
		</>
	);
};
