import React from "react";
import image5 from "../../assets/img/Heading/5.png";
import ecom1 from "../../assets/img/Ecommerce/5a.png";
import ecom2 from "../../assets/img/Ecommerce/5b.png";
import ecom3 from "../../assets/img/Ecommerce/5c.png";
import ecom4 from "../../assets/img/Ecommerce/5d.png";
import { Link, Outlet } from "react-router-dom";

export default function Ecommerce() {
	return (
		<>
			<div className="nav">
			<div className="navigation">
					<Link to="/detail/education">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/industry">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>

			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image5} alt="5" />
					<h1>THƯƠNG MẠI ĐIỆN TỬ</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>THƯƠNG MẠI ĐIỆN TỬ</h2>
								<p>
									Trang thương mại điện tử thuộc hệ thống của tập đoàn đi vào
									giải quyết các nhu cầu trí tuệ mang tính sáng tạo của khách
									hàng bằng những cách tiếp cận độc đáo, mô hình mới và khác
									biệt so với thương mại điện tử truyền thống.
								</p>
								<img src={ecom1} alt="5a" />
							</li>
							<li>
								<p>
									Khách hàng hoặc người dùng có thể tham khảo, mua sắm tất cả
									các sản phẩm sáng tạo, ấn phẩm thiết kế, sản phẩm quay dựng mà
									mình yêu thích một cách thuận tiện, dễ dàng và nhanh chóng.
									Thêm vào đó, người dùng có thể thanh toán bằng nhiều hình thức
									khác nhau hết sức đa dạng như: Tiền mặt, ví điện tử, thẻ
									Mastercard, xu tích lũy được niêm yết.
								</p>
								<img src={ecom2} alt="5b" />
							</li>
							<li>
								<p>
									Điểm sáng đặc biệt nhất trong cách vận hành thị trường trực
									tuyến này của tập đoàn chính là việc áp dụng tiền điện tử vào
									trong quá trình giao dịch ở khâu thanh toán, người dùng hoặc
									khách hàng có thể sử dụng chính tài khoản tiền điện tử của
									mình để chi trả cho những sản phẩm trên sàn, thuộc hệ thống
									quản lý của DQV GROUP. Ngoài ra, khách hàng cũng sẽ có quyền
									đặt hàng trong các nhóm sản phẩm sáng tạo trên hệ thống sàn
									theo yêu cầu mà mình mong muốn, bộ phận quản lý sàn sẽ cập
									nhật thông tin, trao đổi, tư vấn và thực hiện theo đúng thỏa
									thuận.
								</p>
								<img src={ecom3} alt="5c" />
							</li>
							<li>
								<p>
									Những sản phẩm sáng tạo được DQV GROUP cho vào hệ thống sàn
									bao gồm: Kho ảnh, hình ảnh chủ đề, thiết kế phông chữ, thiết
									kế logo, tài nguyên dựng phim, tài nguyên kỹ xảo, video bản
									quyền, nhạc bản quyền, mô hình 3D, mô hình 2D, AR visual, ấn
									phẩm quảng cáo và tiếp thị, thiết kế đồ hoạ, chủ đề WordPress,
									và nhiều mặt hàng tương tự.
								</p>
								<img src={ecom4} alt="1d" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/industry">
						<div className="footer-template">
							<div className="left">
								<div className="page">5/8</div>
								<div className="title-template">CÔNG NGHIỆP</div>
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
