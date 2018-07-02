import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'

import PortfolioNavi from '../PortfolioNavi'
import Product from '../Product';

class Store extends Component {
  render() {
    const { location, projects } = this.props
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    let products = this.props.projects.map((product) => {
      let image = product.project.images[0].originalSrc
      image = image.substring(0, image.indexOf('?'))

      return (
        <LazyLoad key={product.project.title} height={200} once>
          <div className={'col-sm-4 col-6 pt-5'} >
            <div className="text-center hovereffect">
              {/* <Link to={withPrefix(``)}> */}
                <img src={image} style={{ margin: 0, padding: 0, width: '100%' }} />
                <div className="overlay">
                  <h2>
                    {product.project.title} <br/>
                  </h2>
                </div>
              {/* </Link> */}
            </div>
          </div>
        </LazyLoad>
      )
    })

    return (
      <div id="portfolio" className="container-fluid bg-even py-5">
        <div id="portfolio-title" className="row justify-content-center">
          <div className="col-lg-7 col-sm-10 col-11">
            <p
              className="text-center"
              style={{
                color: '#000',
                lineHeight: '1',
                fontFamily: 'comfortaa',
                fontWeight: '300',
                fontSize: '1.5em',
              }}
            >
              Let's shop now
            </p>
          </div>
        </div>
        <div id="portfolio-title" className="row justify-content-center">
          <div className="col-lg-7 col-sm-10 col-11">
            <p
              className="text-center"
              style={{
                color: '#000',
                lineHeight: '1',
                fontFamily: 'poppins',
                fontWeight: '700',
                fontSize: '3em',
              }}
            >
              New Arrivals
            </p>
          </div>
        </div>
        {/* <PortfolioNavi projects={projects} {...this.props} /> */}
        <div id="portfolio-grid" className="row justify-content-center">
          <div className="col-lg-9 col-11">
            {/* <div className="row justify-content-center">{projectLinks}</div> */}
            <div className="row justify-content-center">{products}</div>
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <Link
            className="btn btn-outline-danger"
            to={withPrefix('/store')}
            role="button"
          >
            More
          </Link>
        </div>
      </div>
    )
  }
}

export default Store
