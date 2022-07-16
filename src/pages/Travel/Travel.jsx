import React from "react";
import image2 from "../../assets/img/Heading/2.png";
import travel1 from "../../assets/img/Travel/2a.png";
import travel2 from "../../assets/img/Travel/2b.png";
import travel3 from "../../assets/img/Travel/2c.png";
import travel4 from "../../assets/img/Travel/2d.png";
import travel5 from "../../assets/img/Travel/2e.png";
import { Link, Outlet } from "react-router-dom";

export default function Travel() {
	return (
		<>
			<div className="nav">
			<div className="navigation">
					<Link to="/detail/technology">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/house">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>

			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image2} alt="1" />
					<h1>DU LỊCH - VUI CHƠI GIẢI TRÍ</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>1. Khu vui chơi công nghệ cao</h2>
								<p>
									DQV GROUP vinh dự là công ty cung cấp các giải pháp, thiết kế
									tự động hoá trong đó bao gồm các thiết bị: Giám sát điều khiển
									thiết bị thông minh trong khu vui chơi, các thiết bị máy game
									phục vụ người lớn trẻ nhỏ, hệ thống thiết bị cơ khí tự động
									cho khu game trải nghiệm thực, khu trải nghiệm, đấu trường và
									thiết bị cho robot.
								</p>
								<img src={travel1} alt="1a" />
							</li>
							<li>
								<h2>2. Sản xuất, thiết kế game</h2>
								<p>
									Với nhận thức đúng đắn trong lĩnh vực sản xuất - thiết kế
									Game, DQV GROUP đề ra phương án hình thành, xây dựng và phát
									triển phù hợp, chắc chắn cho việc hoạt động hiệu quả và đem
									lại thành tích đáng kể trong ngành thiết kế Game. Từ khâu xây
									dựng đội ngũ, mỗi người một việc phối hợp với nhau, đến việc
									nghĩ ra nội dung Game hay nhất, thiết kế đồ họa bắt mắt nhất
									được bộ phận chuyên gia có chuyên môn cao của tập đoàn DQV
									GROUP sàng lọc, đánh giá, xem xét kỹ lưỡng và thực nghiệm liên
									tục.
								</p>
								<img src={travel2} alt="1b" />
							</li>
							<li>
								<h2>3. Sản xuất nội dung giải trí</h2>
								<p>
									Với kinh nghiệm và lợi thế trong ngành, tập đoàn Đại Quốc Việt
									xây dựng mảng giải trí hoạt động trong các lĩnh vực: hãng thu
									âm, sản xuất âm nhạc, quản lý sự kiện, sản xuất buổi hòa nhạc,
									nhà xuất bản âm nhạc và quản lý tài năng. Ở lĩnh vực này, DQV
									GROUP mang một sức hút mạnh mẽ đối với những người có niềm đam
									mê với âm nhạc và mong muốn trở thành người nổi tiếng.
								</p>
								<img src={travel3} alt="1c" />
							</li>
							<li>
								<h2>4. Sản xuất phim ảnh</h2>
								<p>
									Dựa trên thế mạnh về công nghệ, DQV GROUP vận hành hệ thống
									sản xuất điện ảnh bằng tư duy mới phù hợp với thời đại của
									cuộc cách mạng công nghiệp 4.0. Với tư duy “điện ảnh 4.0” là
									nền điện ảnh tích hợp công nghệ, tức là công nghệ được ứng
									dụng mạnh mẽ, đa diện, từ khâu sản xuất đến trình diễn và trải
									nghiệm của khán giả. Ngoài việc không thay đổi về mặt công
									nghệ và tính vật lý, nền điện ảnh 4.0 còn là sự đột phá về tư
									duy làm và thưởng thức phim ảnh.{" "}
								</p>
								<img src={travel4} alt="1d" />
							</li>
							<li>
								<h2>5. Hệ thống Bar- Casino</h2>
								<p>
									Hệ thống Bar - Casino là một lĩnh vực kinh doanh trong tổ hợp
									của Tập đoàn Đại Quốc Việt, chuỗi hệ thống hoạt động theo mô
									hình vui chơi giải trí cao cấp, chuyên nghiệp và văn minh.
								</p>
								<img src={travel5} alt="1e" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/house">
						<div className="footer-template">
							<div className="left">
								<div className="page">2/8</div>
								<div className="title-template">BẤT ĐỘNG SẢN</div>
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
