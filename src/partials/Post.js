import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'

let hostUrl =process.env.REACT_APP_SERVER_URL

const Post =(props)=>{

  const [noImg, setNoImg] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const [headingTop, setHeadingTop] = useState(false)
  const [pbNone, setPbNone] = useState(false)
  const [mbNone, setMbNone] = useState(false)

  const data = props.data
  useEffect(() => {
    if(props.pbNone){
      setPbNone(props.pbNone)
    }

    if(props.mbNone){
      setMbNone(props.mbNone)
    }

    if(props.headingTop){
      setHeadingTop(props.headingTop)
    }

    if(data.image===null ||  !data.image.url || props.hideImg ){
        setNoImg(true)
    }
    else{
      setImgUrl(hostUrl+data.image.url)
    }
    

  }, [data, props])

    return(    
            <article  className={`overflow-hidden mr-2 max-w-sm md:max-w-none ${mbNone? "" :"mb-4"} ${pbNone? "" :"pb-4"}  ${props.small? "max-h-full md:max-h-screen" : "  md:max-h-screen"} ${props.borderBottom ? "border-b-2" : "" }`}>

            {
              headingTop?(
                <>
                <h3 className=" mb-2 text-sm sm:text-lg lg:text-xl text-bold">
                        <Link to={`/post/${data.slug}/${data.id}`} className="hover:text-blue-600 transition duration-150 ease-in-out">{data.title}</Link>
                </h3>
                <p className={`${noImg ? "w-0" : " md:w-1/1"}  w-1/1 text-xs sm:text-sm md:text-base`}>
                 {!noImg ? (
                    <Link  to={`/post/${data.slug}/${data.id}`} className={`h-1/1 mr-2 mb-1 md:w-2/3 float-left`}>
                          <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out ${props.small ? "w-24 sm:w-40  md:w-auto" : " w-52  md:w-auto"}`} src={imgUrl} alt={data.id} />
                    </Link>
                ) : (
                  <></>
                )}
                {data.description}

              </p></>
              ):(
                <></>
              )
            }

              {
                headingTop?(
                  <></>
                ):(
                  <>
                    <p className={`${noImg ? "w-0" : " md:w-1/1"}  w-1/1 text-xs sm:text-sm md:text-base`}>
                        {!noImg ? (
                            <Link to={`/post/${data.slug}/${data.id}`} className={`h-1/1 mr-2 mb-1 md:w-2/3 float-left`}>
                                  <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out ${props.small ? "w-24 sm:w-40 md:w-auto" : "w-52   md:w-auto"}`} src={imgUrl} alt={data.id} />
                            </Link>
                        ) : (
                          <></>
                        )}
                        <h3 className=" mb-2 text-sm sm:text-lg lg:text-xl text-bold">
                                <Link to={`/post/${data.slug}/${data.id}`} className="hover:text-blue-600 transition duration-150 ease-in-out">{data.title}</Link>
                        </h3>
                        {data.description}
                  </p>
                </>
                )
              }


 

      </article>
    )
}


export default Post