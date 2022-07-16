import React from "react";
import image7 from "../../assets/img/Heading/7.png";
import medical from "../../assets/img/Medical/7.png";
import { Link, Outlet } from "react-router-dom";

export default function Medical() {
	return (
		<>
			<div className="nav">
			<div className="navigation">
					<Link to="/detail/industry">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/sell">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>

			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image7} alt="1" />
					<h1>Y TẾ</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>Y TẾ</h2>
								<p>
									DQV GROUP vinh dự là công ty cung cấp các giải pháp, thiết kế
									tự động hoá trong đó bao gồm các thiết bị: Giám sát điều khiển
									thiết bị thông minh trong khu vui chơi, các thiết bị máy game
									phục vụ người lớn trẻ nhỏ, hệ thống thiết bị cơ khí tự động
									cho khu game trải nghiệm thực, khu trải nghiệm, đấu trường và
									thiết bị cho robot.
								</p>
								<img src={medical} alt="7" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/sell">
						<div className="footer-template">
							<div className="left">
								<div className="page">7/8</div>
								<div className="title-template">BÁN LẺ</div>
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
