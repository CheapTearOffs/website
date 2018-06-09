import React, {Component} from 'react'
import Helmet from 'react-helmet'

import SiteNavi from '../components/SiteNavi'

import { siteMetadata } from '../../gatsby-config'

// import pic11 from '../assets/images/pic11.jpg'

class Success extends Component {
  render() {
    return (
      <div>
      <Helmet>
          <title>Success Page</title>
          <meta name="description" content="Success Page" />
      </Helmet>
      <SiteNavi title={siteMetadata.title}
                color="primary"
                // projects={projects}
                // handleCartOpen={this.handleCartOpen}
                {...this.props}/>

      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                  <header className="major">
                      <h1>Success/Thank You Page</h1>
                  </header>
                  {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                  <p>Thank you for contacting us!</p>
              </div>
          </section>
      </div>

  </div>
    )
  }
}

export default Success
