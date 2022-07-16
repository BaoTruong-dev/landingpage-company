import React from "react";
import image3 from "../../assets/img/Heading/3.png";
import house1 from "../../assets/img/House/3.png";
import { Link, Outlet } from "react-router-dom";

export default function House() {
	return (
		<>
			<div className="nav">
			<div className="navigation">
					<Link to="/detail/travel">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/education">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>

			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image3} alt="3" />
					<h1>Bất động sản</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>Bất động sản</h2>
								<p>
									DQV GROUP vinh dự là công ty cung cấp các giải pháp, thiết kế
									tự động hoá trong đó bao gồm các thiết bị: Giám sát điều khiển
									thiết bị thông minh trong khu vui chơi, các thiết bị máy game
									phục vụ người lớn trẻ nhỏ, hệ thống thiết bị cơ khí tự động
									cho khu game trải nghiệm thực, khu trải nghiệm, đấu trường và
									thiết bị cho robot.
									<br />
									Các dự án của DQV GROUP đều có vị trí đắc địa tại các tỉnh
									thành trọng điểm trên toàn quốc. Những khu vực có nhu cầu cao
									về nhà ở tại Hà Nội, Thành phố Hồ Chí Minh, các tỉnh thànhlớn,
									địa phương có tốc độ đô thị hoá cao và một số thành phố có
									nhiều tiềm năng về phát triển du lịch như Đà Nẵng, Khánh Hoà,
									Quảng Ninh, Bình Thuận.
								</p>
								<img src={house1} alt="3" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/education">
						<div className="footer-template">
							<div className="left">
								<div className="page">3/8</div>
								<div className="title-template">GIÁO DỤC</div>
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
