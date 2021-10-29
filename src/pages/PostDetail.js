import { useParams } from 'react-router-dom'
import {useQuery, gql} from '@apollo/client'
import marked from 'marked';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import adImg from '../images/news-01.jpg'
import '../css/PostDetail.css'



const POST =gql`
query GetPost($id: ID!){
    article(id: $id){
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
        slug,
        content
    }
}
`
const markedParser =(content)=>{
    var rawMarkup = marked(content, {sanitize: true});
    return { __html: rawMarkup };
}


const PostDetail =()=>{

    let noImg
    let imgUrl
    const {id} = useParams()
    
    const {loading, error, data} =useQuery(POST, {
        variables: {id : id}
    })

    


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

    console.log(data);



    if(data.article.image===null ||  !data.article.image.url ){
        noImg=true
    }
    else{
      imgUrl=data.article.image.url
    }
    




    return(    
        <div className="mx-10 lg:mx-20 mb-10 md:mb-0" id="top">
        <div className="mb-2 ">
           <img className="h-24 w-1/1 md:w-screen md:h-40" src={adImg} alt="ad" />
        </div>
        <Header />
        <main className="flex-grow">
                            <article  className={`overflow-hidden mr-2  border-b-2`}>

                            <h3 className=" mb-2 md:mb-10 text-sm md:text-2xl text-bold mt-10">
                               {data.article.title}
                            </h3>
                 
                            {!noImg ? (
                                <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out h-1/1 mb-10 md:w-2/3`} src={imgUrl} alt={data.article.id} />
                            ) : (
                            <></>
                            )}
                        <p className={`${noImg ? "w-0" : " md:w-1/1"}  w-1/1 text-xs md:text-base mb-10`}>
                            {data.article.description}

                            </p>
                            <div dangerouslySetInnerHTML={markedParser(data.article.content)} className="markedHTML"/>
                            </article>
          <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="top" /></a>
        </main>

        <Footer />
  
      </div>

    )
}


export default PostDetail