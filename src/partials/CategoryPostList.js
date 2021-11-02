import BlockPost from './BlockPost'
import AdsSlider from './AdsSlider'





const CategoryPostList =(props)=>{


    const temp=[...props.data]


    
    let filterList = temp.filter(post => post.categories.some(category => category.name=== props.keywords));





    








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