import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className= "md:flex mt-10 md:text-baseborder-t-2 pt-2">
      <div className="md:w-2/3 w-1/1 pr-2 md:pr-4  md:border-r-2 md:border-b-0 border-b-2 md:mb-0 mb-2">
        {/* Site branding */}
        <div className="text-center md:text-left">
              {/* Logo */}
            <Link to="/" className="block" aria-label="star">
              <img alt="star"  src={require('../logo/star_logo.png').default} className="md:w-28" width="70" height="auto"/>
          </Link>
        </div>
        
        <p className="text-xs text-black px-2">Giấy phép thiết lập : TTTĐT số 42/GP-STTTT</p>
        <p className="mb-3 text-xs text-black px-2">Chịu trách nhiệm nội dung : NGUYỄN TẤN HÙNG ANH</p>
        {/* <p className="mb-4 text-xs text-black px-2 border-t-2 "><b></b> </p> */}
        <p className="text-xs px-2 border-t-2 pt-4 pb-2 md:pb-0">PHAP LUAT SAO MULTIMEDIA MEDIA JOINT STOCK COMPANY -	&copy; newstartv 2021</p>
        <div className="md:flex items-end pb-2 border-t-2 md:border-t-0">
          <p className="text-sm md:text-xs md:font-normal font-bold text-bold text-black px-2 mb-4 mt-2 md:mb-0 md:mt-0">Địa chỉ :</p>
          <p className="text-xs md:px-0 px-4">22 Đường 30b, khu phố 2, Phường Bình An, Quận 2, Thành phố Hồ Chí Minh, Việt Nam</p>
        </div>
      </div>
      <div className="md:w-1/3 w-1/1 pl-2 md:pl-4">
        <p className="mb-4 text-sm font-bold text-bold text-black">Liên hệ</p>
        <ul className="flex border-b-2 pb-2 mb-2 px-2 text-xs">
            <li className="mr-4"><a  className="flex items-center  mr-4" href="mailto:info@nstartv.vn " title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png" width="20" alt="Black mail Icon" />info@nstartv.vn</a></li>
            <li ><a className="flex items-center" href="# " title="Image from freeiconspng.com"><img className="mr-1" src="https://www.freeiconspng.com/uploads/ad-ads-advertisement-advertising-banner-frame-promotion-icon-5.png" width="18" alt="ad, ads, advertisement, advertising, banner, frame, promotion icon" />Quảng cáo</a></li>
        </ul>
        <p className="mb-4 text-sm font-bold text-bold text-black">Đường dây nóng</p>
        <ul className="flex border-b-2 pb-2 mb-2 px-2 text-xs">
            <li className="mr-4">0868330791</li>
        </ul>

        <div>
          <p className="mb-4 text-sm font-bold text-bold text-black"> Theo dõi Newstar trên</p>
          <ul className="flex px-2 text-xs">
            <li className="mr-4"><a href="https://www.facebook.com/nstartv.vn/ " title="Image from freeiconspng.com" className="mr-2"><img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" width="18" alt="Facebook Logo HD PNG Pic" /></a></li>
            <li className="mr-4"><a href="# " title="Image from freeiconspng.com" className="mr-2"><img src="https://www.freeiconspng.com/uploads/twitter-icon-download-18.png" width="18" alt="Bird, blue, Logo Twitter PNG" /></a></li>
            <li className="mr-4"><a href="# " title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/youtube-dark-icon-16.png" width="18" alt="youtube dark icon" /></a></li>
          </ul>
        </div>
      </div>
        <div>
        </div>
        <div className="flex flex-col justify-center items-center pt-2">
        </div>
    </footer>
    // <footer className= "mt-10 pb-20 text-center md:text-base lg:mx-52  border-t-2 pt-2">
    //     <div>
    //         <p className="mb-4 md:text-lg">Liên hệ</p>
    //         <ul className="flex border-b-2 pb-2 mb-2 justify-center">
    //             <li className="mr-4"><a  className="flex items-center  mr-4" href="mailto:info@nstartv.vn " title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png" width="20" alt="Black mail Icon" />info@nstartv.vn</a></li>
    //             <li ><a className="flex items-center" href="# " title="Image from freeiconspng.com"><img className="mr-1" src="https://www.freeiconspng.com/uploads/ad-ads-advertisement-advertising-banner-frame-promotion-icon-5.png" width="18" alt="ad, ads, advertisement, advertising, banner, frame, promotion icon" />Quảng cáo</a></li>
    //         </ul>
    //         <p className="my-4 md:text-lg">Đường dây nóng</p>
    //         <ul className="flex border-b-2 pb-2  justify-center items-centers">
    //             <li className="mr-2">0868330791</li>
    //        </ul>
    //     </div>
    //     <div className="flex flex-col justify-center items-center pt-2">
    //         {/* Site branding */}
    //         <div className="">
    //              {/* Logo */}
    //             <Link to="/" className="block" aria-label="star">
    //               <img alt="star"  src={require('../logo/star_logo.png').default} className="md:w-28" width="70" height="auto"/>
    //           </Link>
    //         </div>
    //         <div className="flex justify-center items-center mb-4">
    //              <p className="mr-2 text-sm  md:text-lg"> Theo dõi Newstar trên</p>
    //               <a href="https://www.facebook.com/nstartv.vn/ " title="Image from freeiconspng.com" className="mr-2"><img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" width="18" alt="Facebook Logo HD PNG Pic" /></a>
    //               <a href="# " title="Image from freeiconspng.com" className="mr-2"><img src="https://www.freeiconspng.com/uploads/twitter-icon-download-18.png" width="18" alt="Bird, blue, Logo Twitter PNG" /></a>
    //               <a href="# " title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/youtube-dark-icon-16.png" width="18" alt="youtube dark icon" /></a>
    //         </div>
    //         <p className="text-sm md:text-base lg:text-lg  ">Giấy phép thiết lập TTTĐTsố 42/GP-STTTT - Chịu trách nhiệm nội dung : NGUYỄN TẤN HÙNG ANH</p>
    //     </div>
    // </footer>
  );
}

export default Footer;
