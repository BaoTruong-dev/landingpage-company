import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import React, { useEffect } from "react";

import "aos/dist/aos.css";
import About from "./pages/About/About";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";
import HomeMenu from "./pages/HomeMenu/HomeMenu";
import House from "./pages/House/House";
import Industry from "./pages/Industry/Industry";
import Medical from "./pages/Medical/Medical";
import Sell from "./pages/Sell/Sell";
import Technology from "./pages/Technology/Technology";
import Travel from "./pages/Travel/Travel";
import { DetailTemplate } from "./templates/DetailTemplate/DetailTemplate";
function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/menu" element={<HomeMenu />} />
				<Route path="detail" element={<DetailTemplate />}>
					<Route path="technology" element={<Technology />} ></Route>
					<Route path="ecommerce" element={<Ecommerce />} ></Route>
					<Route path="travel" element={<Travel />} ></Route>
					<Route path="sell" element={<Sell />} ></Route>
					<Route path="medical" element={<Medical />} ></Route>
					<Route path="industry" element={<Industry />} ></Route>
					<Route path="house" element={<House />} ></Route>
					<Route path="education" element={<Education />} ></Route>
				</Route>
				<Route path="about" element={<About />} ></Route>

				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
