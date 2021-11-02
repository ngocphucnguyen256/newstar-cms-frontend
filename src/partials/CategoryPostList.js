import BlockPost from './BlockPost'
import { useQuery, gql } from '@apollo/client'
import AdsSlider from './AdsSlider'


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
    let temp
    let filterList 



    if(props.data){
        temp=[...props.data]
        filterList= temp.filter(post => post.categories.some(category => category.name=== props.keywords));
    }
    else{
       
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
        temp=[...data.categories]
        filterList = temp.filter(category=>(
            category.name=== props.keywords
        )).filter(category=>(
            category.articles !=null
        ))
        const formatList =  filterList[0].articles.map(post=>{

            let localdate = new Date(post.created_at);
        
    
            const copy ={date: localdate, ...post}
    
            return copy
        })
    
        filterList= formatList.sort((a,b) =>b.date.getTime() -  a.date.getTime())
    }
   


    





    








    return(
        <div className="mb-4 lg:mb-10">


            <h3 className="mb-2 border-b-2 border-red-400 text-bold md:text-2xl lg:text-3xl">{props.keywords}</h3>
            <div className={`grid grid-cols-2`}>
            {
                filterList.slice(0,10).map(post =>(
                    <BlockPost key={post.id} data={post} small={props.small} borderBottom line={5}/>
                ))
            }
            </div>
      
            <div className="my-4 h-28 w-1/1 md:h-52 ">
                <AdsSlider index={0} location="middlepost"/>
            </div>
        </div>
    )
}


export default CategoryPostList