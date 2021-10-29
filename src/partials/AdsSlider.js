
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

const AdsSlider = (props) => {
    return (
          <div>
          <Slide easing="ease" duration={2000}>
            <div className="each-slide">
              <iframe  className="flex items-center justify-center bg-cover h-52 w-1/1" frameBorder="0"  src={props.url}  title="3rd party ad content" name="" scrolling="no" marginWidth="0"
               marginHeight="0" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"  ></iframe>
            </div>
            <div className="each-slide">
              <iframe  className="flex items-center justify-center bg-cover h-52 w-1/1" frameBorder="0"  src={props.url}  title="3rd party ad content" name="" scrolling="no" marginWidth="0"
                marginHeight="0" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"  ></iframe>
            </div>
            <div className="each-slide">
                <iframe  className="flex items-center justify-center bg-cover h-52 w-1/1" frameBorder="0"  src={props.url}  title="3rd party ad content" name="" scrolling="no" marginWidth="0"
                  marginHeight="0" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"  ></iframe>
            </div>
          </Slide>
        </div>
      
    )
};

export default AdsSlider;