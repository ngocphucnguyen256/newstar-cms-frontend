
import AdsSlider from '../partials/AdsSlider';
import { useQuery, gql } from '@apollo/client'

// menu
// headerpost
// middlepost
// keyword
// video
// footer
// leftpost
// rightpost
// bottompost

const ADS =gql`
query GetAds{
    ads{
        url,
        location
      }
}
`

const Ads = (props) => {



    const {loading, error, data} =useQuery(ADS)
    

    
    if(loading) {
        return (
            <div className=" h-20 md:h-40 lg:h-52"></div>

        )
    }
    if(error) {
        return (
            <></>

        )
    }




    return (

        <div>
                {
                    props.slider?(
                        <AdsSlider data={data.ads}/>
                    ):(
                        <iframe  className="flex items-center justify-center bg-cover h-20 md:h-40 lg:h-52 w-1/1" frameBorder="0"  src={props.url}  title="3rd party ad content" name="" scrolling="no" marginWidth="0"
                        marginHeight="0" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"  ></iframe>
                    )
                }
        </div>
      
    )
};

export default Ads;