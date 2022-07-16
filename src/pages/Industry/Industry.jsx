import React from "react";
import image6 from "../../assets/img/Heading/6.png";
import industry1 from "../../assets/img/Industry/6a.png";
import industry2 from "../../assets/img/Industry/6b.png";
import industry3 from "../../assets/img/Industry/6c.png";
import { Link, Outlet } from "react-router-dom";

export default function Industry() {
	return (
		<>
			<div className="nav">
			<div className="navigation">
					<Link to="/detail/ecommerce">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/medical">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>

			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image6} alt="1" />
					<h1>Công nghiệp</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>Công nghiệp</h2>
								<p>
									Hiện tại, quy mô hệ thống âm thanh – ánh sáng của DQV GROUP
									đang không ngừng mở rộng và trở thành đối tác số 1 của nhiều
									đại lý trên các tình thành, các đoàn nghệ thuật, nhà hát,
									trung tâm biểu diễn nghệ thuật, phát thanh truyền hình,
									studio, các tổng công ty xây dựng, công ty cho thuê. Bên cạnh
									các sản phẩm chất lượng, với một đội ngũ hỗ trợ kỹ thuật tay
									nghề cao và chất lượng nhân sự được đào tạo liên tục trong và
									ngoài nước, DQV GROUP hoàn toàn có đủ khả năng để mang đến cho
									khách hàng những giải pháp hoàn hảo nhất về âm thanh – ánh
									sáng.
								</p>
								<img src={industry1} alt="1a" />
							</li>
							<li>
								<p>
									Với lĩnh vực công nghiệp năng lượng tái tạo: Tiêu chí của DQV
									GROUP là một trong tập đoàn đi đầu trong việc đẩy mạnh chuyển
									dịch cơ cấu ngành năng lượng theo hướng xây dựng cơ sở hạ tầng
									phát triển nguồn năng lượng sạch. Ngành công nghiệp năng lượng
									tái tạo ở DQV GROUP đang đẩy nhanh phát triển để tạo ra giá
									trị lợi ích trong kinh doanh.
								</p>
								<img src={industry2} alt="1b" />
							</li>
							<li>
								<p>
									Năng lượng tái tạo đang được xem là giải pháp và xu hướng tất
									yếu của ngành năng lượng hiện nay trên thế giới. Nhận biết
									được xu hướng đó, tập đoàn tập trung phát triển nguồn năng
									lượng tái tạo với kỳ vọng là lĩnh vực công nghiệp này sẽ chiếm
									vị trí quan trọng trong sự phát triển kinh tế bền vững ở DQV
									GROUP, do lợi ích to lớn trong việc tận dụng tối đa nguồn
									thiên nhiên vô tận, đây cũng là đóng góp, hướng đi lâu dài của
									DQV GROUP trong vấn đề giảm tác động của hiệu ứng nhà kính và
									biến đổi khí hậu gây ra.
								</p>
								<img src={industry3} alt="1c" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/medical">
						<div className="footer-template">
							<div className="left">
								<div className="page">6/8</div>
								<div className="title-template">Y TẾ</div>
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
