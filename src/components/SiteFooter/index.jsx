import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest} from '@fortawesome/fontawesome-free-brands'

class SiteFooter extends Component {
  render() {
    return (
      <footer className="bg-dark py-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-auto px-4">
              <a className="text-white" href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="col-auto px-4">
              <a className="text-white" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="col-auto px-4">
              <a className="text-white" href="#">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-auto text-primary">&copy; 2018 CheapTearOffs.com</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default SiteFooter
