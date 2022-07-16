import React from "react";
import image8 from "../../assets/img/Heading/8.png";
import sell from "../../assets/img/Sell/8.png";
import { Link, Outlet } from "react-router-dom";

export default function Sell() {
	return (
		<>
			<div className="nav">
			<div className="navigation">
					<Link to="/detail/medical">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/technology">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>

			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image8} alt="8" />
					<h1>BÁN LẺ</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>BÁN LẺ</h2>
								<p>
									Hệ thống bán lẻ DQV GROUP hoạt động với mục tiêu trở thành
									điểm mua sắm đáng tin cậy và trải nghiệm thú vị về những sản
									phẩm công nghệ.
								</p>
								<img src={sell} alt="8" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/technology">
						<div className="footer-template">
							<div className="left">
								<div className="page">8/8</div>
								<div className="title-template">CÔNG NGHỆ</div>
								<p className="continue">Lĩnh Vực Tiếp Theo</p>
							</div>
							<div className="right">
								<i class="fa fa-arrow-right"></i>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
