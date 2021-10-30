import Post from './Post'
import { useQuery, gql } from '@apollo/client'
import Ads from './Ads'



const POSTS =gql`
query GetPosts{
    categories{
   name,
   articles{
       id,
     title,
     description,
     slug,
     created_at,
     image{
         url
     }
   }
 }
}
`


const CategoryPostList =(props)=>{

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


    const temp=[...data.categories]

    const filterList = temp.filter(category=>(
        category.name=== props.keywords
    )).filter(category=>(
        category.articles !=null
    ))
    


    const formatList =  filterList[0].articles.map(post=>{

        let localdate = new Date(post.created_at);

        const copy ={date: localdate, ...post}

        return copy
    })

const sortedList= formatList.sort((a,b) =>b.date.getTime() -  a.date.getTime())





    return(
        <div className="mt-10">


                <h3 className="mb-2 border-b-2 border-red-400 text-bold md:text-2xl lg:text-3xl">{props.keywords}</h3>
            <div className={`${props.grid? "md:grid grid-cols-2":""}`}>
            {
                sortedList.map(post =>(
                    <Post key={post.id} data={post} small={props.small} borderBottom line={4}/>
                ))
            }
            </div>
      
            <div className="my-4 h-28 w-1/1 md:w-screen md:h-52 ">
                <Ads index={0} location="middlepost"/>
            </div>
        </div>
    )
}


export default CategoryPostList