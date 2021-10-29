import Post from './Post'
import { useQuery, gql } from '@apollo/client'
import Ads from './Ads'

const POSTS =gql`
query GetPosts{
    articles{
        id,
        title,
        description,
        author{
          name
        },
        categories{
          name
        },
        image{
            url
        },
        created_at,
        slug
    }
}
`


const PostList =()=>{

    const {loading, error, data} =useQuery(POSTS)
    


    
    if(loading) {
        return (
            <div className="mt-96"></div>

        )
    }
    if(error) {
        return (
            <div className="mt-96"></div>

        )
    }

    


    return(
        <div className="mt-4 md:mt-10">

            <div className="sm:flex justify-between items-stretch mb-4 bg-gray-100">
                <Post data={data.articles[0]} pbNone mbNone line={12}/>
                <div  className="w-1/3 h-auto hidden sm:block bg-white md:ml-4"><Ads  index={0}location="headerpost"/></div>
            </div>
            <div className="flex items-stretch justify-between">
            {
                data.articles.slice(1,3).map(post =>(
                    <div  key={post.id} className="w-1/3 "><Post key={post.id} data={post}  line={10}/></div>
                ))
            }
               <div className="w-1/3 h-auto border-l-2 pl-2"> <Ads  index={1} location="headerpost"/></div>
            </div>
        </div>
    )
}


export default PostList