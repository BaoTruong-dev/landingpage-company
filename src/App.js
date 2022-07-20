import "./App.scss";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeMenu from "./pages/HomeMenu/HomeMenu";
import { DetailTemplate } from "./templates/DetailTemplate/DetailTemplate";
import About from "./pages/About/About";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<HomeMenu />} />
        <Route path="detail" element={<DetailTemplate />}>
          <Route path=":detailID" element={<DetailPage />} />
        </Route>
        <Route path="about" element={<About />}></Route>


        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
