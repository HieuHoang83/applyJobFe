"use client";
import JobCard from "@/components/Folder Components/JobCard/JobCard";
import SearchBar from "@/components/Search/SearchBar";

import React from "react";

const JobPage = () => {
  const InfoJob = [
    {
      id: "1",
      urlLogo: "https://tinyurl.com/mwy9cv28",
      title: "Trưởng phòng kinh doanh",
      titleCompany: [
        "Quản lý điều hành, hoạt động bán hàng của phòng kinh doanh phụ trách",
        "Đào tạo, giám sát công việc, có trách nhiệm về hoạt động của tất cả khu vực trực thuộc bộ phận mình phụ trách",
        "Xây dựng kế hoạch, chiến lược bán hàng nhằm đảm bảo chỉ tiêu doanh thu được giao",
        "Hỗ trợ nhân viên chăm sóc, tư vấn và chốt deal",
        "Tìm kiếm khách hàng có nhu cầu ",
      ],
      nameCompany: "Công ty TNHH (demo)",
      request: [
        "Tối thiểu 6 tháng - 1 năm kinh nghiệm về quản lý mảng Bất động sản (Bắt buộc)",
        "Tốt nghiệp THPT trở lên",
        "Khả năng giao tiếp tốt và đàm phán, có khả năng tạo mối quan hệ khách hàng lâu dài.",
        "Kỹ năng tổ chức, quản lý thời gian và làm việc độc lập, làm việc theo đội nhóm.",
        "Đam mê kinh doanh, yêu thích môi trường làm việc Bất Động Sản",
        "Mong muốn phát triển đội ngũ bán hàng chuyên nghiệp, đam mê kinh doanh"
      ],
      salary: "15-20",
      location: [
        "Hà Nội"
      ],
      locationDetail: [
        "Hồ Chí Minh: TP.HCM, 51 Kinh Dương Vương, P12, Quận 6, Quận 6",
        " Long An: Long An, Huyện Tân Trụ, Tân Trụ"
      ],
      exp: "6 tháng - 1 năm",
      interest: [
        "Nhận hoa hồng trên giá trị sản phẩm bán được từ 30 triệu/sản phẩm",
        "Thưởng nóng từ 20 triệu/sản phẩm",
        "Được đào tạo bài bản, chuyên nghiệp các công tác hỗ trợ bán hàng",
        "Tham gia miễn phí 100% chương trình đào tạo cơ bản và nâng cao với nghề",
        "Chế độ Bảo hiểm xã hội, nghỉ phép 12 ngày/ năm, các chế độ khác tuân thủ đúng quy định của pháp luật"
      ],
      working_time: "Thời gian làm việc từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Thứ 7 và chủ nhật công ty không hoạt động"
    },
    {
      id: "2",
      urlLogo: "https://tinyurl.com/mwy9cv28",
      title: "Trưởng phòng kinh doanh",
      titleCompany: [
        "Quản lý điều hành, hoạt động bán hàng của phòng kinh doanh phụ trách",
        "Đào tạo, giám sát công việc, có trách nhiệm về hoạt động của tất cả khu vực trực thuộc bộ phận mình phụ trách",
        "Xây dựng kế hoạch, chiến lược bán hàng nhằm đảm bảo chỉ tiêu doanh thu được giao",
        "Hỗ trợ nhân viên chăm sóc, tư vấn và chốt deal",
        "Tìm kiếm khách hàng có nhu cầu ",
      ],
      nameCompany: "Công ty TNHH (demo)",
      request: [
        "Tối thiểu 6 tháng - 1 năm kinh nghiệm về quản lý mảng Bất động sản (Bắt buộc)",
        "Tốt nghiệp THPT trở lên",
        "Khả năng giao tiếp tốt và đàm phán, có khả năng tạo mối quan hệ khách hàng lâu dài.",
        "Kỹ năng tổ chức, quản lý thời gian và làm việc độc lập, làm việc theo đội nhóm.",
        "Đam mê kinh doanh, yêu thích môi trường làm việc Bất Động Sản",
        "Mong muốn phát triển đội ngũ bán hàng chuyên nghiệp, đam mê kinh doanh"
      ],
      salary: "15-20",
      location: [
        "Hà Nội"
      ],
      locationDetail: [
        "Hồ Chí Minh: TP.HCM, 51 Kinh Dương Vương, P12, Quận 6, Quận 6",
        " Long An: Long An, Huyện Tân Trụ, Tân Trụ"
      ],
      exp: "6 tháng - 1 năm",
      interest: [
        "Nhận hoa hồng trên giá trị sản phẩm bán được từ 30 triệu/sản phẩm",
        "Thưởng nóng từ 20 triệu/sản phẩm",
        "Được đào tạo bài bản, chuyên nghiệp các công tác hỗ trợ bán hàng",
        "Tham gia miễn phí 100% chương trình đào tạo cơ bản và nâng cao với nghề",
        "Chế độ Bảo hiểm xã hội, nghỉ phép 12 ngày/ năm, các chế độ khác tuân thủ đúng quy định của pháp luật"
      ],
      working_time: "Thời gian làm việc từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Thứ 7 và chủ nhật công ty không hoạt động"
    },
    {
      id: "3",
      urlLogo: "https://tinyurl.com/mwy9cv28",
      title: "Trưởng phòng kinh doanh",
      titleCompany: [
        "Quản lý điều hành, hoạt động bán hàng của phòng kinh doanh phụ trách",
        "Đào tạo, giám sát công việc, có trách nhiệm về hoạt động của tất cả khu vực trực thuộc bộ phận mình phụ trách",
        "Xây dựng kế hoạch, chiến lược bán hàng nhằm đảm bảo chỉ tiêu doanh thu được giao",
        "Hỗ trợ nhân viên chăm sóc, tư vấn và chốt deal",
        "Tìm kiếm khách hàng có nhu cầu ",
      ],
      nameCompany: "Công ty TNHH (demo)",
      request: [
        "Tối thiểu 6 tháng - 1 năm kinh nghiệm về quản lý mảng Bất động sản (Bắt buộc)",
        "Tốt nghiệp THPT trở lên",
        "Khả năng giao tiếp tốt và đàm phán, có khả năng tạo mối quan hệ khách hàng lâu dài.",
        "Kỹ năng tổ chức, quản lý thời gian và làm việc độc lập, làm việc theo đội nhóm.",
        "Đam mê kinh doanh, yêu thích môi trường làm việc Bất Động Sản",
        "Mong muốn phát triển đội ngũ bán hàng chuyên nghiệp, đam mê kinh doanh"
      ],
      salary: "15-20",
      location: [
        "Hà Nội"
      ],
      locationDetail: [
        "Hồ Chí Minh: TP.HCM, 51 Kinh Dương Vương, P12, Quận 6, Quận 6",
        " Long An: Long An, Huyện Tân Trụ, Tân Trụ"
      ],
      exp: "6 tháng - 1 năm",
      interest: [
        "Nhận hoa hồng trên giá trị sản phẩm bán được từ 30 triệu/sản phẩm",
        "Thưởng nóng từ 20 triệu/sản phẩm",
        "Được đào tạo bài bản, chuyên nghiệp các công tác hỗ trợ bán hàng",
        "Tham gia miễn phí 100% chương trình đào tạo cơ bản và nâng cao với nghề",
        "Chế độ Bảo hiểm xã hội, nghỉ phép 12 ngày/ năm, các chế độ khác tuân thủ đúng quy định của pháp luật"
      ],
      working_time: "Thời gian làm việc từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Thứ 7 và chủ nhật công ty không hoạt động"
    },
    {
      id: "4",
      urlLogo: "https://tinyurl.com/mwy9cv28",
      title: "Trưởng phòng kinh doanh",
      titleCompany: [
        "Quản lý điều hành, hoạt động bán hàng của phòng kinh doanh phụ trách",
        "Đào tạo, giám sát công việc, có trách nhiệm về hoạt động của tất cả khu vực trực thuộc bộ phận mình phụ trách",
        "Xây dựng kế hoạch, chiến lược bán hàng nhằm đảm bảo chỉ tiêu doanh thu được giao",
        "Hỗ trợ nhân viên chăm sóc, tư vấn và chốt deal",
        "Tìm kiếm khách hàng có nhu cầu ",
      ],
      nameCompany: "Công ty TNHH (demo)",
      request: [
        "Tối thiểu 6 tháng - 1 năm kinh nghiệm về quản lý mảng Bất động sản (Bắt buộc)",
        "Tốt nghiệp THPT trở lên",
        "Khả năng giao tiếp tốt và đàm phán, có khả năng tạo mối quan hệ khách hàng lâu dài.",
        "Kỹ năng tổ chức, quản lý thời gian và làm việc độc lập, làm việc theo đội nhóm.",
        "Đam mê kinh doanh, yêu thích môi trường làm việc Bất Động Sản",
        "Mong muốn phát triển đội ngũ bán hàng chuyên nghiệp, đam mê kinh doanh"
      ],
      salary: "15-20",
      location: [
        "Hà Nội"
      ],
      locationDetail: [
        "Hồ Chí Minh: TP.HCM, 51 Kinh Dương Vương, P12, Quận 6, Quận 6",
        " Long An: Long An, Huyện Tân Trụ, Tân Trụ"
      ],
      exp: "6 tháng - 1 năm",
      interest: [
        "Nhận hoa hồng trên giá trị sản phẩm bán được từ 30 triệu/sản phẩm",
        "Thưởng nóng từ 20 triệu/sản phẩm",
        "Được đào tạo bài bản, chuyên nghiệp các công tác hỗ trợ bán hàng",
        "Tham gia miễn phí 100% chương trình đào tạo cơ bản và nâng cao với nghề",
        "Chế độ Bảo hiểm xã hội, nghỉ phép 12 ngày/ năm, các chế độ khác tuân thủ đúng quy định của pháp luật"
      ],
      working_time: "Thời gian làm việc từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Thứ 7 và chủ nhật công ty không hoạt động"
    },
    {
      id: "5",
      urlLogo: "https://tinyurl.com/mwy9cv28",
      title: "Trưởng phòng kinh doanh",
      titleCompany: [
        "Quản lý điều hành, hoạt động bán hàng của phòng kinh doanh phụ trách",
        "Đào tạo, giám sát công việc, có trách nhiệm về hoạt động của tất cả khu vực trực thuộc bộ phận mình phụ trách",
        "Xây dựng kế hoạch, chiến lược bán hàng nhằm đảm bảo chỉ tiêu doanh thu được giao",
        "Hỗ trợ nhân viên chăm sóc, tư vấn và chốt deal",
        "Tìm kiếm khách hàng có nhu cầu ",
      ],
      nameCompany: "Công ty TNHH (demo)",
      request: [
        "Tối thiểu 6 tháng - 1 năm kinh nghiệm về quản lý mảng Bất động sản (Bắt buộc)",
        "Tốt nghiệp THPT trở lên",
        "Khả năng giao tiếp tốt và đàm phán, có khả năng tạo mối quan hệ khách hàng lâu dài.",
        "Kỹ năng tổ chức, quản lý thời gian và làm việc độc lập, làm việc theo đội nhóm.",
        "Đam mê kinh doanh, yêu thích môi trường làm việc Bất Động Sản",
        "Mong muốn phát triển đội ngũ bán hàng chuyên nghiệp, đam mê kinh doanh"
      ],
      salary: "15-20",
      location: [
        "Hà Nội"
      ],
      locationDetail: [
        "Hồ Chí Minh: TP.HCM, 51 Kinh Dương Vương, P12, Quận 6, Quận 6",
        " Long An: Long An, Huyện Tân Trụ, Tân Trụ"
      ],
      exp: "6 tháng - 1 năm",
      interest: [
        "Nhận hoa hồng trên giá trị sản phẩm bán được từ 30 triệu/sản phẩm",
        "Thưởng nóng từ 20 triệu/sản phẩm",
        "Được đào tạo bài bản, chuyên nghiệp các công tác hỗ trợ bán hàng",
        "Tham gia miễn phí 100% chương trình đào tạo cơ bản và nâng cao với nghề",
        "Chế độ Bảo hiểm xã hội, nghỉ phép 12 ngày/ năm, các chế độ khác tuân thủ đúng quy định của pháp luật"
      ],
      working_time: "Thời gian làm việc từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Thứ 7 và chủ nhật công ty không hoạt động"
    },
    {
      id: "6",
      urlLogo: "https://tinyurl.com/mwy9cv28",
      title: "Trưởng phòng kinh doanh",
      titleCompany: [
        "Quản lý điều hành, hoạt động bán hàng của phòng kinh doanh phụ trách",
        "Đào tạo, giám sát công việc, có trách nhiệm về hoạt động của tất cả khu vực trực thuộc bộ phận mình phụ trách",
        "Xây dựng kế hoạch, chiến lược bán hàng nhằm đảm bảo chỉ tiêu doanh thu được giao",
        "Hỗ trợ nhân viên chăm sóc, tư vấn và chốt deal",
        "Tìm kiếm khách hàng có nhu cầu ",
      ],
      nameCompany: "Công ty TNHH (demo)",
      request: [
        "Tối thiểu 6 tháng - 1 năm kinh nghiệm về quản lý mảng Bất động sản (Bắt buộc)",
        "Tốt nghiệp THPT trở lên",
        "Khả năng giao tiếp tốt và đàm phán, có khả năng tạo mối quan hệ khách hàng lâu dài.",
        "Kỹ năng tổ chức, quản lý thời gian và làm việc độc lập, làm việc theo đội nhóm.",
        "Đam mê kinh doanh, yêu thích môi trường làm việc Bất Động Sản",
        "Mong muốn phát triển đội ngũ bán hàng chuyên nghiệp, đam mê kinh doanh"
      ],
      salary: "15-20",
      location: [
        "Hà Nội"
      ],
      locationDetail: [
        "Hồ Chí Minh: TP.HCM, 51 Kinh Dương Vương, P12, Quận 6, Quận 6",
        " Long An: Long An, Huyện Tân Trụ, Tân Trụ"
      ],
      exp: "6 tháng - 1 năm",
      interest: [
        "Nhận hoa hồng trên giá trị sản phẩm bán được từ 30 triệu/sản phẩm",
        "Thưởng nóng từ 20 triệu/sản phẩm",
        "Được đào tạo bài bản, chuyên nghiệp các công tác hỗ trợ bán hàng",
        "Tham gia miễn phí 100% chương trình đào tạo cơ bản và nâng cao với nghề",
        "Chế độ Bảo hiểm xã hội, nghỉ phép 12 ngày/ năm, các chế độ khác tuân thủ đúng quy định của pháp luật"
      ],
      working_time: "Thời gian làm việc từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Thứ 7 và chủ nhật công ty không hoạt động"
    },
    {
      id: "7",
      urlLogo: "https://tinyurl.com/mwy9cv28",
      title: "Trưởng phòng kinh doanh",
      titleCompany: [
        "Quản lý điều hành, hoạt động bán hàng của phòng kinh doanh phụ trách",
        "Đào tạo, giám sát công việc, có trách nhiệm về hoạt động của tất cả khu vực trực thuộc bộ phận mình phụ trách",
        "Xây dựng kế hoạch, chiến lược bán hàng nhằm đảm bảo chỉ tiêu doanh thu được giao",
        "Hỗ trợ nhân viên chăm sóc, tư vấn và chốt deal",
        "Tìm kiếm khách hàng có nhu cầu ",
      ],
      nameCompany: "Công ty TNHH (demo)",
      request: [
        "Tối thiểu 6 tháng - 1 năm kinh nghiệm về quản lý mảng Bất động sản (Bắt buộc)",
        "Tốt nghiệp THPT trở lên",
        "Khả năng giao tiếp tốt và đàm phán, có khả năng tạo mối quan hệ khách hàng lâu dài.",
        "Kỹ năng tổ chức, quản lý thời gian và làm việc độc lập, làm việc theo đội nhóm.",
        "Đam mê kinh doanh, yêu thích môi trường làm việc Bất Động Sản",
        "Mong muốn phát triển đội ngũ bán hàng chuyên nghiệp, đam mê kinh doanh"
      ],
      salary: "15-20",
      location: [
        "Hà Nội"
      ],
      locationDetail: [
        "Hồ Chí Minh: TP.HCM, 51 Kinh Dương Vương, P12, Quận 6, Quận 6",
        " Long An: Long An, Huyện Tân Trụ, Tân Trụ"
      ],
      exp: "6 tháng - 1 năm",
      interest: [
        "Nhận hoa hồng trên giá trị sản phẩm bán được từ 30 triệu/sản phẩm",
        "Thưởng nóng từ 20 triệu/sản phẩm",
        "Được đào tạo bài bản, chuyên nghiệp các công tác hỗ trợ bán hàng",
        "Tham gia miễn phí 100% chương trình đào tạo cơ bản và nâng cao với nghề",
        "Chế độ Bảo hiểm xã hội, nghỉ phép 12 ngày/ năm, các chế độ khác tuân thủ đúng quy định của pháp luật"
      ],
      working_time: "Thời gian làm việc từ 8 giờ sáng đến 17 giờ chiều cùng ngày. Thứ 7 và chủ nhật công ty không hoạt động"
    }
  ]

  return (
    <div className=" h-[100vh] ">
      <div className=" mx-[15%]  pt-[60px]">
        <SearchBar></SearchBar>
      </div>

      <div className="text-center mt-[50px] mx-[12%] gap-[50px]  grid grid-cols-3 ">
        {
          InfoJob.map((job: any) => <JobCard job={job} />)
        }
      </div>
    </div>
  );
};

export default JobPage;
