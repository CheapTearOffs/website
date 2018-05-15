import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import Instafeed from 'react-instafeed'

class Instagram extends Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      const instafeedTarget = 'instafeed'

      return (
         <div id="instagram" className="container-fluid">
         <LazyLoad>
           <div id={instafeedTarget} className="row no-gutters">
             <Instafeed
               limit="8"
               ref="instafeed"
               sortBy="most-liked"
               target={instafeedTarget}
               template="<a href='{{link}}' class='col-3'><img src='{{image}}' /></a>"
               userId="1482619234"
               clientId="3799b1b8534743e1988f78a4fdb434d8"
               accessToken="1482619234.3799b1b.45853abe9a024beeaa62e004a350bc46"
             />
           </div>
         </LazyLoad>
       </div>
      )
   }
}

export default Instagram