import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Công nghệ</h2>
            <p className="text-xl text-gray-400">STECH hoạt động trong 03 lĩnh vực kinh doanh cốt lõi gồm: Công nghệ, Fintech và Giáo dục. 
Chúng tôi không ngừng mở rộng hoạt động trên thị trường toàn cầu với 3 văn phòng tại các quốc gia và vùng lãnh thổ bên ngoài Việt Nam.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">CHUYỂN ĐỔI HỆ THỐNG</h4>
              <p className="text-lg text-gray-400 text-center">STECH cung cấp dịch vụ chuyển đổi ứng dụng trên nền công nghệ chuỗi khối. Chúng tôi giúp khách hàng tạo ra những giải pháp có giá trị định hướng cho phép khách hàng loại bỏ sự dư thừa và lỗi thời của cơ sở hạ tầng, thu nhỏ hệ thống máy chủ cũng như thiết lập môi trường hợp tác để tối đa hóa việc sử dụng nền tảng mới.
</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">INTERNET CỦA VẠN VẬT</h4>
              <p className="text-lg text-gray-400 text-center">IoT là một trong những xu hướng công nghệ mới nhất, trong đó các đối tượng vật lý hay 'đối tượng' được nhúng vào các thiết bị điện tử, phần mềm, cảm biến và thiết bị kết nối để giúp chúng có được những giá trị lớn hơn.  STECH giúp khách hàng xây dựng các giải pháp đáng tin cậy và hiệu quả về chi phí dựa trên nền tảng công nghệ này.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">PHAN TÍCH DỮ LIỆU</h4>
              <p className="text-lg text-gray-400 text-center">STECH phát triển và tư vấn cho các khách hàng có nhu ứng dụng trí tuệ nhân tạo trong việc khai phá dữ liệu nhằm phân tích và đưa ra các dự đoán , dự báo bảo mật ; kiểm đếm và thống kê thông minh; chăm sóc khách hàng tự động.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">ROBOTICS</h4>
              <p className="text-lg text-gray-400 text-center">STECH mang một khát khao lớn với sứ mệnh chung tay góp sức vì nền công nghiệp công nghiệp Robot và phát triển ngành tự động hóa tại Việt Nam. Chúng tôi nghiên cứu và ứng dụng những công nghệ mới nhất cho việc thiết kế và sản xuất các dây chuyền sản xuất tự động.</p>
            </div>

          </div>


          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Fintech</h2>
            <p className="text-xl text-gray-400">STECH ứng dụng công nghệ Blockchain trong lĩnh vực thanh toán trên di động (mobile payment). Với niềm tin dịch vụ tài chính và thanh toán ngang hàng minh bạch sẽ góp phần thay đổi cuộc sống và gia tăng thu nhập cho người dân Việt Nam, STECH đang trong quá trình xây dựng cơ sở hạ tầng thanh toán độc đáo và sáng tạo có thể phục vụ cho mọi đối tương khách hàng. Thông qua việc hợp tác chiến lược với các ngân hàng và tổ chức tài chính, STECH sẽ hoạt động như một cánh tay nối dài mang dịch vụ tài chính, thanh toán đến cho người dân Việt Nam.</p>
          </div>


          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Giáo dục</h2>
            <p className="text-xl text-gray-400">STECH luôn hướng đến mục tiêu gắn liền đào tạo với thực tiễn cuộc sống nhằm đáp ứng nhu cầu về một nguồn nhân lực chất lượng cao. Vì thế STECH đã hợp tác chiến lược với VIÊN NGHIÊN CỨU & SÁNG TẠO KHOA HỌC MÁY TÍNH - IRICS. Ngoài công tác nghiên cứu và ứng dụng các công nghệ mới, chúng tôi còn cung cấp các chương trình đào tạo được triển khai theo hướng dự án cho từng học kỳ và bài tập thực tế cho từng môn học đồng thời theo sát với nhu cầu của doanh nghiệp và thị trường.</p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
