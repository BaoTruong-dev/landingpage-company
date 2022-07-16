import React from "react";
import circle from "../../assets/img/About/Frame 44 1.png";
import logo from "../../assets/img/About/logo.png";
import { Link, Outlet } from "react-router-dom";
import about1 from "../../assets/img/About/1.png";
import about2 from "../../assets/img/About/2.png";
import about3 from "../../assets/img/About/3 (2).png";
import about4 from "../../assets/img/About/4.png";
export default function About() {
	return (
		<div className="container-1">
			<div className="hear">
				<div className="about-left">
					<Link to="/">
						<button>
							<i class="fa fa-times"></i> <span>Close</span>
						</button>
					</Link>
				</div>
				<div className="about-center">
					<Link
						rel="noopener noreferrer"
						to="/"
						className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
					>
						<img src={logo} alt="logo" />
						<p>DaiQuocVietCorp</p>
					</Link>
				</div>
				<div className="about-right">
					<div className="contact-list-2">
						<a href="tel:+123456789">
							<i class="fa fa-phone"></i>
						</a>
						<a href="mailto:m.bluth@example.com">
							<i class="fa fa-envelope"></i>
						</a>
						<a href="https://www.facebook.com/daiquocvietcorp">
							<i class="fab fa-facebook"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="about-us">
				<div className="about-list">
					<div className="about-item">
						<img src={about1} alt="1" />
					</div>
					<div className="about-item">
						<img src={about2} alt="2" />
					</div>
					<div className="about-item">
						<img src={about3} alt="3" />
					</div>
					<div className="about-item">
						<img src={about4} alt="4" />
					</div>
				</div>
			</div>
			<div className="about-content">
				<div className="tongQuan one">
					<h2>Tổng quan</h2>
					<p>
						Với tầm nhìn chiến lược dài hạn và lộ trình rõ ràng, Tập đoàn Đại
						Quốc Việt (DQV GROUP) định hướng đầu tư vào phát triển công nghệ và
						tập trung chuyển đổi số trong nhiều lĩnh vực khác nhau: văn hóa,
						lịch sử, nghệ thuật, doanh nghiệp.{" "}
					</p>
					<p>
						DQV GROUP có mạng lưới kinh doanh rộng khắp Việt Nam và hoạt động
						trải dài trên các địa bàn trọng điểm trong nước. Tương lai có nhiều
						dự án phát triển từ TPHCM ra khắp 63 tỉnh thành trên toàn quốc và
						quốc tế.
					</p>
				</div>
				<div className="tamNhin one">
					<h2>Tầm nhìn</h2>
					<p>
						Bằng khát vọng tiên phong cùng chiến lược đầu tư và phát triển bền
						vững, DQV GROUP phấn đấu trở thành tập đoàn kinh tế hàng đầu Việt
						Nam, có uy tín và vị thế vững chắc trên bản đồ kinh tế thế giới.
					</p>
					<p>
						Xây dựng thành công chuỗi sản phẩm và dịch vụ đẳng cấp, góp phần
						nâng cao chất lượng cuộc sống của người Việt và nâng tầm danh tiếng
						của quốc gia trên trường quốc tế.
					</p>
				</div>
				<div className="suMenh one">
					<h2>Sứ mệnh</h2>
					<p>
						<span>Đối với thị trường:</span> DQV GROUP cung cấp các sản phẩm -
						dịch vụ với chất lượng quốc tế và phù hợp với văn hoá địa phương.
						Sản phẩm - dịch vụ phải đẳng cấp, đón đầu thị hiếu và dẫn dắt thị
						trường.
					</p>

					<p>
						<span>Đối với cổ đông - đối tác:</span> Tập đoàn đề cao tinh thần
						hợp tác cùng phát triển, cam kết trở thành “Người đồng hành số 1”
						cùng các đối tác và cổ đông. Bên cạnh đó luôn hướng tới sự gia tăng
						các giá trị đầu tư hấp dẫn và hợp tác lâu dài thông qua việc chia sẻ
						giải pháp có lợi cho đôi bên.
					</p>

					<p>
						<span>Đối với nhân viên:</span> DQV GROUP xây dựng môi trường làm
						việc chuyên nghiệp, năng động, sáng tạo. Tạo điều kiện thu nhập cao
						và cơ hội phát triển công bằng cho toàn thể nhân viên.
					</p>

					<p>
						<span> Đối với xã hội:</span> Tập đoàn hài hòa lợi ích doanh nghiệp
						với lợi ích của xã hội, đóng góp tích cực vào các hoạt động hướng
						tới cộng đồng, tinh thần trách nhiệm công dân và niềm tự hào dân
						tộc.
					</p>
				</div>

				<div className="giaTri one">
					<h2>Giá trị cốt lõi</h2>
					<p>
						<span>Sáng tạo:</span> DQV GROUP coi sự sáng tạo chính là sức sống,
						là kim chỉ nam để không ngừng phát triển, tạo nên những giá trị khác
						biệt và mang bản sắc riêng trong mỗi sản phẩm, dịch vụ. Ngoài ra,
						tập đoàn luôn đề tạo tinh thần dám nghĩ dám làm, khuyến khích mọi
						người tìm tòi và ứng dụng các tiến bộ khoa học kỹ thuật, công nghệ
						mới vào việc sản xuất và quản lý.
					</p>

					<p>
						<span> Đổi mới:</span> Toàn thể nhân viên DQV GROUP luôn
						sẵn sàng đón nhận cái mới và dẫn dắt sự thay đổi, không ngừng tìm
						tòi học hỏi và luôn cải tiến trong mọi việc, tạo sự đột phá vì lợi
						ích của khách hàng.
					</p>

					<p>
						<span>Đối với nhân viên:</span> Đạo đức: Tôn trọng pháp luật và duy trì đạo đức nghề nghiệp, đạo đức xã hội với mức tiêu chuẩn hàng đầu.
					</p>

					<p>
						<span> Đối với xã hội:</span> Tập đoàn hài hòa lợi ích doanh nghiệp
						với lợi ích của xã hội, đóng góp tích cực vào các hoạt động hướng
						tới cộng đồng, tinh thần trách nhiệm công dân và niềm tự hào dân
						tộc.
					</p>
				</div>
			</div>
			<div className="circle">
				<img src={circle} alt="circle" />
			</div>
		</div>
	);
}
