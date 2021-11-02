import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'



const BlockPost =(props)=>{

  const [noImg, setNoImg] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
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

    if(data.image===null ||  !data.image.url || props.hideImg ){
        setNoImg(true)
    }
    else{
      setImgUrl(data.image.url)
    }
    

  }, [data, props])

    return(
        <article  className={`bg-white rounded-md  overflow-hidden mr-2 max-w-sm md:max-w-none ${mbNone? "" :"mb-4"} ${pbNone? "" :"pb-4"}  ${props.small? "max-h-52 sm:max-h-72 md:max-h-screen" : "max-h-80 sm:max-h-96  md:max-h-screen"} ${props.borderBottom ? "border-b-2" : "" }`}>
                  <h3 className="mb-2 md:mb-4 text-sm sm:text-lg lg:text-xl text-bold">
                      <Link  to={`/post/${data.slug}/${data.id}`} className=" text-black hover:text-purple-600 transition duration-150 ease-in-out overflow-ellipsis">{data.title}</Link>
                  </h3>
                  {
                      !noImg?(
                        <figure className="mb-2 md:mb-4">
                          <Link  to={`/post/${data.slug}/${data.id}`} >
                            <img className={` rounded-md transform hover:scale-105 transition duration-700 ease-out ${props.small?"w-20 max-h-14 md:max-h-60 md:w-auto" :"   md:w-auto"}`}src={imgUrl}  alt={data.id}/>
                        </Link> 
                      </figure>
                    ):(
                      <></>
                    )
         
                  }

      

                  
                    <p className="text-xs sm:text-sm lg:text-base text-gray-40">
                          { data.description }
                    </p>

       


 

      </article>
    )
}


export default BlockPost