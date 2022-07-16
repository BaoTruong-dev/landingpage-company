import React from "react";
import image3 from "../../assets/img/Heading/3.png";
import edu from "../../assets/img/Education/4.png";
import { Link, Outlet } from "react-router-dom";

export default function Education() {
	return (
		<>
			<div className="nav">
			<div className="navigation">
					<Link to="/detail/house">
						<div className="back">
							<i class="fa fa-arrow-left"></i>
							<p>Back</p>
						</div>
					</Link>
					<Link to="/detail/ecommerce">
					<div className="next">
						<p>Next</p>
						<i class="fa fa-arrow-right"></i>
					</div>
					</Link>
				</div>

			</div>
			<div className="wraper">
				<div className="heading">
					<img src={image3} alt="4" />
					<h1>GIÁO DỤC</h1>
				</div>
				<div className="section">
					<div className="item">
						<ul>
							<li>
								<h2>GIÁO DỤC</h2>
								<p>
									Với tâm niệm đầu tư vào giáo dục để thực hiện khát vọng thay
									đổi tương lai của thế hệ trẻ Việt Nam, DQV GROUP hình thành hệ
									thống giáo dục theo định hướng ứng dụng công nghệ vào trong
									quá trình dạy và học.
									<br />
									Chương trình đào tạo của trường luôn tạo điều kiện để các tài
									năng trẻ có thể phát triển một cách toàn diện nhất với trang
									thiết bị đầy đủ và hiện đại, giúp đỡ những sinh viên có hoàn
									cảnh khó khăn bằng những gói hỗ trợ, cấp học bổng cho những
									học viên có thành tích học tập xuất sắc. Ngoài ra, trường cũng
									sẽ có chính sách việc làm tốt sau khi tốt nghiệp, nhận học
									viên vào tập đoàn DQV GROUP để thực tập, sau quá trình làm
									thực tâp sinh, sinh viên tham gia kỳ xét tuyển nhân sự của tập
									đoàn, vượt qua các vòng sẽ trở thành nhân viên chính thức tại
									DQV GROUP.
								</p>
								<img src={edu} alt="4" />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-detail">
					<Link to="/detail/ecommerce">
						<div className="footer-template">
							<div className="left">
								<div className="page">4/8</div>
								<div className="title-template">THƯƠNG MẠI ĐIỆN TỬ</div>
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
