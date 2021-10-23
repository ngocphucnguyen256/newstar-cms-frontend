import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Dropdown from '../utils/Dropdown';
import Moment from 'react-moment'
import searchIcon from '../images/search_icon.png'
// import adImg from '../images/news-01.jpg'
// import Collapsible  from 'react-collapsible';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);
  const today = new Date().toString();
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;

      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="sticky top-0 md:-top-24 left-0 right-0 w-full z-30 bg-white text-black ">
      
      <div className="max-w-7xl mx-auto">
  
        <div className="flex items-center justify-between  border-b-2">
            <div className="flex justify-center items-center md:pt-1">
                              {/* Mobile menu */}
                    <div className="md:hidden">

                {/* Hamburger button */}
                            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                              <span className="sr-only">Menu</span>
                              <svg className="w-6 h-6 fill-current text-black hover:text-gray-700 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect y="4" width="24" height="2" rx="1" />
                                <rect y="11" width="24" height="2" rx="1" />
                                <rect y="18" width="24" height="2" rx="1" />
                              </svg>
                            </button>

                {/*Mobile navigation */}
                      <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full pr-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out text-xs" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
                        <ul className="bg-gray-800 px-4 py-2">
                            

                          <li className="py-3">



                           <Link to="/" className="flex text-red-500  py-2">Trang chủ</Link>

                  
                       
                          </li>
                          <li>
                            <Link to="/newest" className="flex text-gray-300 hover:text-gray-200 py-2">Mới nhất</Link>
                          </li>
                          <li>
                            <Link to="/kinh-te" className="flex text-gray-300 hover:text-gray-200 py-2">Kinh tế</Link>
                          </li>
                          <li>
                            <Link to="/giai-tri" className="flex text-gray-300 hover:text-gray-200 py-2">Giải trí</Link>
                          </li>
                          <li>
                            <Link to="/cong-nghe" className="flex text-gray-300 hover:text-gray-200 py-2">Công nghệ</Link>
                          </li>
                          <li>
                            <Link to="/the-thao" className="flex text-gray-300 hover:text-gray-200 py-2">Thể thao</Link>
                          </li>
                          <li>
                            <Link to="/vh-xh" className="flex text-gray-300 hover:text-gray-200 py-2">Văn hóa - xã hội</Link>
                          </li>
                          <li >
                              <Link to="/thoi-trang" className="flex text-gray-300 hover:text-gray-200 py-2">Thời trang</Link>
                          {/* <Collapsible className="text-white" trigger="Thời trang">
                              <ul>
                                  <li>
                                    <Link to="/thoi-trang" className="flex text-gray-300 hover:text-gray-200 py-2">Thời trang</Link>

                                  </li>
                                  <li>
                                    <Link to="/hang-hieu" className="flex text-gray-300 hover:text-gray-200 py-2">Hàng hiệu</Link>

                                  </li>
                              </ul>
                          </Collapsible> */}
                          </li>
                          <li>
                                    <Link to="/hang-hieu" className="flex text-gray-300 hover:text-gray-200 py-2">Hàng hiệu</Link>

                            </li>
                            <li>
                                    <Link to="/du-lich" className="flex text-gray-300 hover:text-gray-200 py-2">Du lịch</Link>

                              </li>
   
                          {/* <li className="py-3">
                          <Collapsible className="text-white" trigger="Du lịch">
                              <ul>
                                  <li>
                                    <Link to="/du-lich" className="flex text-gray-300 hover:text-gray-200 py-2">Du lịch</Link>

                                  </li>
                                  <li>
                                  <Link to="/du-lich" className="flex text-gray-300 hover:text-gray-200 py-2">Du lịch</Link>

                                  </li>
                              </ul>
                          </Collapsible>
                          </li> */}
                          <li>
                            <Link to="/am-thuc" className="flex text-gray-300 hover:text-gray-200 py-2">Ẩm thực</Link>

                          </li>
                          {/* <li className="py-3">
                          <Collapsible className="text-white" trigger="Ẩm thực">
                              <ul>
                                  <li>
                                    <Link to="/am-thuc" className="flex text-gray-300 hover:text-gray-200 py-2">Ẩm thực</Link>

                                  </li>
                                  <li>
                                  <Link to="/am-thuc" className="flex text-gray-300 hover:text-gray-200 py-2">Ẩm thực</Link>

                                  </li>
                              </ul>
                          </Collapsible>
                          </li> */}
                          {/* <li className="py-3">
                          <Collapsible className="text-white" trigger="Sống khỏe">
                              <ul>
                                  <li>
                                    <Link to="/song-khoe" className="flex text-gray-300 hover:text-gray-200 py-2">Sống khỏe</Link>

                                  </li>
                                  <li>
                                  <Link to="/song-khoe" className="flex text-gray-300 hover:text-gray-200 py-2">Sống khỏe</Link>


                                  </li>
                              </ul>
                          </Collapsible>
                          </li> */}
                                   <li>
                                    <Link to="/song-khoe" className="flex text-gray-300 hover:text-gray-200 py-2">Sống khỏe</Link>

                                  </li>
                          {/* <li className="py-3">
                          <Collapsible className="text-white" trigger="Video">
                              <ul>
                                  <li>
                                    <Link to="/video" className="flex text-gray-300 hover:text-gray-200 py-2">Video</Link>

                                  </li>
                                  <li>
                                    <Link to="/video" className="flex text-gray-300 hover:text-gray-200 py-2">Video</Link>

                                  </li>
                              </ul>
                          </Collapsible>
                          </li> */}
                                       <li>
                                    <Link to="/video" className="flex text-gray-300 hover:text-gray-200 py-2">Video</Link>

                                  </li>
                        </ul>
                      </nav>

                </div>

                            {/* Site branding */}
                      <div className="flex-shrink-0 mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="star">
                          <img alt="star"  src={require('../logo/star_logo.png').default} className="md:w-28" width="70" height="auto"/>
                        </Link>
                      </div>
                      <div className="hidden md:block">
                      <Moment date={today} format="dddd, MMMM Do YYYY" locale="vi" />
                      </div>
            </div>
            <div className="flex justify-center items-center md:ml-auto">
                    <div className="relative hidden md:block mr-4">
                    <input type="text" className="rounded-2xl bg-transparent "/>
                      <a href="#search" className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-auto">
                          <img src={searchIcon} alt="Search"/>
                      </a>

                  </div>
                              {/* Desktop sign in links */}
                    <ul className="flex flex-grow justify-end flex-wrap items-center text-sm md:text-lg">
                      <li>
                        <Link to="/signin" className="font-medium py-2 flex items-center transition duration-150 ease-in-out">Đăng nhập</Link>
                      </li>
                      <li>
                        <Link to="/signup" className="btn-sm text-black  ml-3 hidden md:block">Đăng kí</Link>
                      </li>
                    </ul>

              </div>
    



        </div>
        
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow border-b-2">

            {/* Desktop menu links */}








            <ul className="flex flex-grow justify-center flex-wrap items-center md:text-lg text-bold">
              <li>
                <Link to="/" className=" text-black hover:text-purple-600 px-3  py-2 flex">
                Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/newest" className=" text-black hover:text-purple-600 px-3 py-2 flex">Mới nhất
</Link>
              </li>
              <li>
                <Link to="/kinh-te" className=" text-black hover:text-purple-600 px-3 py-2 flex">Kinh tế
</Link>
              </li>
              <li>
                <Link to="/giai-tri" className=" text-black hover:text-purple-600 px-3 py-2 flex">Giải trí 
</Link>
              </li>
              {/* 1st level: hover */}

                {/* 2nd level: hover */}
                <li>
                  <Link to="/cong-nghe" className=" text-black hover:text-purple-600 flex py-2 px-3">Công nghệ
</Link>
                </li>
                <li>
                  <Link to="/the-thao" className=" text-black hover:text-purple-600 flex py-2 px-3">Thể thao
                </Link>
                </li>
                <li>
                  <Link to="/vh-xh" className=" text-black hover:text-purple-600 flex py-2 px-3">VH-XH</Link>
                </li>
                <li>
                  <Link to="/thoi-trang" className=" text-black hover:text-purple-600 flex py-2 px-3">Thời trang</Link>
                </li>
                <li>
                  <Link to="/hang-hieu" className=" text-black hover:text-purple-600 flex py-2 px-3">Hàng Hiệu
</Link>
                </li>
                <li>
                  <Link to="/du-lich" className=" text-black hover:text-purple-600 flex py-2 px-3">Du lịch</Link>
                </li>
                <li>
                  <Link to="/am-thuc" className=" text-black hover:text-purple-600 flex py-2 px-3">
Ẩm thực</Link>
                </li>
                <li>
                  <Link to="/song-khoe" className=" text-black hover:text-purple-600 flex py-2 px-3">Sống khỏe
</Link>
                </li>
                <li>
                  <Link to="/video" className=" text-black hover:text-purple-600 flex py-2 px-3">Video</Link>
                </li>

            </ul>


          </nav>



      </div>
    </header>
  );
}

export default Header;
