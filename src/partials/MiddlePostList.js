import Post from './Post'
import { useQuery, gql } from '@apollo/client'
import CategoryPostList from './CategoryPostList'

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
        created_at
    }
}
`


const MiddlePostList =()=>{

    const {loading, error, data} =useQuery(POSTS)
    
    
    if(loading) {
        return (
            <></>
        )
    }
    if(error) {
        return (
            <></>
        )
    }

    const temp=[...data.articles]

    
    const formatList =  temp.map(post=>{

        let localdate = new Date(post.created_at);
        const copy ={date: localdate, ...post}
        return copy
    })

const sortedList= formatList.sort((a,b) =>b.date.getTime() -  a.date.getTime())




    return(
        <div className="mt-10 flex border-b-2">

            <div className="mb-10  justify-between items-center border-r-2 pr-2 md:pr-4 w-1/3">
            <h3 className="mb-2 border-b-2 border-red-400 text-bold md:text-2xl lg:text-3xl mt-10">Mới nhất</h3>   
            {
                sortedList.map(post =>(
                    <Post key={post.id} data={post} small borderBottom headingTop line={10}/>
                ))
                
            }
            {
                sortedList.map(post =>(
                    <Post key={post.id} data={post} small borderBottom headingTop line={10}/>
                ))
            }
            </div>
            <div className="w-2/3 pl-2 md:pl-4">
                <CategoryPostList keywords={"Kinh tế"} small/>
                <CategoryPostList keywords={"Giải trí"} small/>
                <CategoryPostList keywords={"Công nghệ"}small/>
                <CategoryPostList keywords={"Thể thao"}small/>
                {/* <CategoryPostList keywords={"Văn hóa - xã hội"}small/>
                <CategoryPostList keywords={"Thời trang"}small/>
                <CategoryPostList keywords={"Hàng hiệu"}small/>
                <CategoryPostList keywords={"Du lịch"}small/>
                <CategoryPostList keywords={"Ẩm thực"}small/>
                <CategoryPostList keywords={"Sống khỏe"}small/> */}

            </div>
        </div>
    )
}


export default MiddlePostList