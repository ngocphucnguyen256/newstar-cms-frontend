import {Link, useParams } from 'react-router-dom'
import {useQuery, gql} from '@apollo/client'

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import adImg from '../images/news-01.jpg'


let hostUrl ="http://localhost:1337"


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
        slug
    }
}
`


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




    if(data.article.image===null ||  !data.article.image.url ){
        noImg=true
    }
    else{
      imgUrl=hostUrl+data.article.image.url
    }
    






    return(    
        <div className="mx-2 md:mx-10 mb-10 md:mb-0" id="top">
        <div className="mb-2 ">
           <img className="h-24 w-1/1 md:w-screen md:h-40" src={adImg} alt="ad" />
        </div>
        <Header />
        <main className="flex-grow">
                            <article  className={`overflow-hidden mr-2 max-w-sm md:max-w-none md:max-h-screen border-b-2`}>

                            <h3 className=" mb-2 text-sm md:text-2xl text-bold">
                                    <Link to="/" className="hover:text-blue-600 transition duration-150 ease-in-out">{data.article.title}</Link>
                            </h3>
                            <p className={`${noImg ? "w-0" : " md:w-1/1"}  w-1/1 text-xs md:text-base`}>
                            {!noImg ? (
                                <Link to="/" className={`h-1/1 mr-2 mb-1 md:w-2/3 float-left`}>
                                    <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out `} src={imgUrl} alt={data.article.id} />
                                </Link>
                            ) : (
                            <></>
                            )}
                            {data.article.description}

                            </p>
                            </article>
          <a className="fixed bottom-10 right-10" href="#top" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right--32.png" width="50" alt="top" /></a>
        </main>

        <Footer />
  
      </div>

    )
}


export default PostDetail