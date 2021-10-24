import PostList from '../partials/PostList';
import MiddlePostList from '../partials/MiddlePostList';
import adImg from '../images/news-01.jpg'
import Video from '../partials/Video';
import OldPostList from '../partials/OldPostList';

const BodySection =()=>{


return(
    <div className="w-1/1">
        <PostList/> 
        <MiddlePostList/>
        <div className="text-xs p-4 md:flex items-center justify-start flex-wrap">
            <p className="text-sm md:text-2xl lg:text-3xl mr-4">Chủ đề</p>
            <p className="text-pink-700  underline md:text-sm mr-4"><a href="# ">Hướng dẫn F0, F1 cách ly tại nhà </a></p>
            <p className="text-pink-700  underline md:text-sm hidden lg:block mr-4"><a href="# ">Hướng dẫn F0, F1 cách ly tại nhà </a></p>
            <p className="text-pink-700  underline md:text-sm hidden  lg:block mr-4"><a href="# ">Hướng dẫn F0, F1 cách ly tại nhà </a></p>
            <p className="text-pink-700 underline  md:text-sm mr-4"><a href="# ">Chuẩn bị năm học mới 2021-2022</a></p>
            <p className="text-pink-700 underline  md:text-sm "><a href="# ">Gỡ khó khăn cho doanh nghiệp, tiểu thương TP. HCM</a></p>
        </div>
        <div className="mb-2 ">
         <img className="h-24 w-1/1 md:w-screen md:h-40" src={adImg} alt="ad" />
      </div>
        <Video/>
        <div className="mb-2 ">
         <img className="h-24 w-1/1 md:w-screen md:h-40" src={adImg} alt="ad" />
        </div>
        <OldPostList/>
        <div className="mb-2 ">
         <img className="h-24 w-1/1 md:w-screen md:h-40" src={adImg} alt="ad" />
        </div>
    </div>
)
}


export default BodySection;