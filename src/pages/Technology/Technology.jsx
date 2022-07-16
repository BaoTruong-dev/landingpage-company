import React from "react";
import { Link, Outlet } from "react-router-dom";

import image1 from "../../assets/img/Heading/1.png";
import detail1 from "../../assets/img/Detail/1.1.png";
import detail2 from "../../assets/img/Detail/1.2.png";
import detail3 from "../../assets/img/Detail/1.3.png";
import detail4 from "../../assets/img/Detail/1.4.png";
import detail5 from "../../assets/img/Detail/1.5.png";
import detail6 from "../../assets/img/Detail/1.6.png";
export default function Technology() {
	return (
		<>
			<div className="nav">
				<div className="navigation">
					<Link to="/detail/sell">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/travel">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>
			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image1} alt="1" />
					<h1>Công Nghệ</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>1. Thực Tế Tăng Cường</h2>
								<p>
									Công nghệ thực tế tăng cường (AR – Augmented Reality) là một
									trong những ứng dụng công nghệ được sử dụng rộng rãi và phổ
									biến với những người trẻ trong thời đại công nghệ 4.0. DQV
									GROUP chúng tôi có đầy đủ đội ngũ nhân viên chuyên sản xuất hệ
									thống công nghệ AR phục vụ cho các dự án phát triển của đối
									tác.
								</p>
								<img src={detail1} alt="1a" />
							</li>
							<li>
								<h2>2. Thực tế ảo</h2>
								<p>
									Công nghệ thực tế ảo (VR – Virtual Reality) đang được DQV
									GROUP xây dựng và phát triển, cho phép người dùng đi vào một
									không gian 3D do đội ngũ của tập đoàn phát triển xây dựng, mọi
									sự tương tác hay trải nghiệm sẽ được gói gọn trong không gian
									3D nhờ sự hỗ trợ của kính thực tế ảo (VR headset).
								</p>
								<img src={detail2} alt="1b" />
							</li>
							<li>
								<h2>3. Thực tế hỗn hợp</h2>
								<p>
									Đây là sự bao hàm của hai khái niệm thực tế ảo (VR) và thực tế
									tăng cường (AR). Công nghệ MR giúp con người khám phá và liên
									kết với môi trường ảo và thực một cách liền mạch. Ở đó người
									dùng có thể tương tác với các hình ảnh ba chiều và thao tác
									với các đối tượng ảo như thể chúng đang ở cùng một không gian.
								</p>
								<img src={detail3} alt="1c" />
							</li>
							<li>
								<h2>4. Thực tế mở rộng</h2>
								<p>
									Đây là một dạng công nghệ tiên tiến, có thể kết hợp nhiều công
									nghệ cùng một lúc như công nghệ thực tế tăng cường (AR) và
									công nghệ thực tế hỗn hợp (MR). Hiện tại ĐQV GROUP đang phát
									triển hệ thống công nghệ XR với mong muốn có thể áp dụng kỹ
									thuật này vào các dự án và hơn thế là mang lại cho cộng đồng
									những trải nghiệm hoàn toàn mới thông qua công nghệ này.
								</p>
								<img src={detail4} alt="1d" />
							</li>
							<li>
								<h2>5. Trình chiếu 3D Mapping</h2>
								<p>
									Đây là kỹ thuật kết hợp công nghệ 3D và các đồ hoạ tương tác,
									tạo hình ảnh chuyển động tương tác đa chiều. Về cơ bản, kỹ
									thuật này sử dụng công nghệ 3D chuyên dụng, tạo ra hình ảnh
									các vật thể ảo có kích thước, màu sắc như vật thể thật, kết
									hợp cùng với kỹ xảo tương tác mang đến những hiệu ứng bắt mắt,
									ấn tượng cũng như dễ dàng truyền tải thông điệp thu hút người
									tham dự.
								</p>
								<img src={detail5} alt="1e" />
							</li>
							<li>
								<h2>6. Chuyển đổi số</h2>
								<p>
									Chuyển đổi số (Digital transformation) là bước phát triển tiếp
									theo của ngành tin học hóa. Việc ứng dụng những tiến bộ về
									công nghệ số như điện toán đám mây (cloud), dữ liệu lớn (Big
									data),... vào mọi hoạt động của tổ chức, doanh nghiệp sẽ góp
									phần mang lại hiệu suất cao, thúc đẩy phát triển doanh thu và
									thương hiệu.
								</p>
								<img src={detail6} alt="1f" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/travel">
						<div className="footer-template">
							<div className="left">
								<div className="page">1/8</div>
								<div className="title-template">
									DU LỊCH - VUI CHƠI GIẢI TRÍ
								</div>
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
