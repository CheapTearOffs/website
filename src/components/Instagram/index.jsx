import React, { Component } from 'react'
import Instafeed from 'react-instafeed'

import instaLogo from '../../layouts/img/Instagram_Icon_inverted.svg'
import instaFont from '../../layouts/img/Instagram_logo.svg'

class Instagram extends Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      const instafeedTarget = 'instafeed'

      return (
        <div id="instagram" className="container-fluid pt-6">
          <div id="store-title" className="row justify-content-center pb-3">
            <div className="container col-xl-3 col-lg-4 col-md-6 col-9">
              <div className="row justify-content-center">
                <div className="col-3">
                  <img src={instaLogo} />
                </div>
                <div className="col-8">
                  <img src={instaFont} />
                </div>
              </div>
            </div>
          </div>
          <div id={instafeedTarget} className="row">
            <Instafeed
              limit="12"
              ref="instafeed"
              sortBy="most-liked"
              target={instafeedTarget}
              template="<a href='{{link}}' class='col-lg-2 col-3'><img src='{{image}}' /></a>"
              userId="1482619234"
              clientId="3799b1b8534743e1988f78a4fdb434d8"
              accessToken="1482619234.3799b1b.45853abe9a024beeaa62e004a350bc46"
            />
          </div>
       </div>
      )
   }
}

export default Instagram