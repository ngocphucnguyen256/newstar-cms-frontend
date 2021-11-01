import PostList from '../partials/PostList';
import MiddlePostList from '../partials/MiddlePostList';
import Video from '../partials/Video';
import OldPostList from '../partials/OldPostList';
import Ads from './Ads'

const BodySection =()=>{


return(
    <div className="w-1/1">
        <PostList/> 
        <MiddlePostList/>

        <Video/>

        <OldPostList/>
        <div className="mb-2 ">
            <Ads className="h-24 w-1/1 md:w-screen md:h-40" index={0}location="footer"/>
        </div>
    </div>
)
}


export default BodySection;