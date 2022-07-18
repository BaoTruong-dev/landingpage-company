import "./App.scss";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import HomeMenu from "./pages/HomeMenu/HomeMenu";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import Travel from "./pages/Travel/Travel";
import Sell from "./pages/Sell/Sell";
import Medical from "./pages/Medical/Medical";
import Industry from "./pages/Industry/Industry";
import House from "./pages/House/House";
import Education from "./pages/Education/Education";
import Technology from "./pages/Technology/Technology";
import { DetailTemplate } from "./templates/DetailTemplate/DetailTemplate";
import About from "./pages/About/About";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
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
