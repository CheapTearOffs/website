import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Button } from 'reactstrap'

import PortfolioNavi from '../PortfolioNavi'
import Product from '../Product';

class Products extends Component {
  // shouldComponentUpdate() {
    // return false;
  // }

  render() {
    const { location, projects, showProduct } = this.props
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    let products = this.props.projects.map((product) => {
      if(showProduct == product.project.vendor || showProduct == "All") {
        return (
          // <LazyLoad key={product.project.title} once>
          //   <div className={'col-sm-3 col-12 pt-5'}>
          //     <div className="row text-center hovereffect">
          //         <img src={product.project.images[0].originalSrc} />
          //         <div className="overlay">
          //           <h2>
          //             {product.project.title} <br/>
          //             ${product.project.extras.maxPrice}
          //           </h2>
          //         </div>
          //     </div>
          //     <div className="row justify-content-center pt-3">
          //       {/* <Link
          //         className="btn btn-outline-danger"
          //         role="button"
          //         onClick={() => this.props.addVariantToCart(variantID, 1)}
          //       >
          //         Buy
          //       </Link> */}
          //       <a className="btn btn-outline-danger text-danger" onClick={() => this.props.addVariantToCart(variantID, 1)}>Buy</a>
          //     </div>
          //   </div>
          // </LazyLoad>
          <LazyLoad key={product.project.title} once>
          <div className={'col-sm-3 col-12 pt-5'} >
            <div className="text-center hovereffect">
              <Link to={withPrefix(``)}>
                <img src={product.project.images[0].originalSrc} style={{ margin: 0, padding: 0 }} />
                <div className="overlay">
                  <h2>
                    ${product.project.extras.maxPrice}
                  </h2>
                </div>
              </Link>
            </div>
            <div className="mt-3 row">
              <div className="col ml-3" >
                <div className="row">
                  <h3 className="mb-0" >{product.project.title}</h3>
                </div>
                <div className="row">
                  <p className="mb-0" >{product.project.vendor}</p>
                </div>
                {/* <p>${product.project.extras.maxPrice}</p> */}
              </div>
              <Button className="btn btn-outline-danger col-3 mr-3" onClick={() => this.props.addVariantToCart(product.project.variants[0].shopifyId, 1)}>Buy</Button>
            </div>
          </div>
        </LazyLoad>
        )
      }
    })

    return (
      <div id="portfolio" className="container-fluid bg-even py-5">
        {/* <div id="portfolio-title" className="row justify-content-center">
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
        </div> */}
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
              Let's shop now
            </p>
          </div>
        </div>
        <PortfolioNavi projects={projects} {...this.props} />
        <div id="portfolio-grid" className="row justify-content-center">
          <div className="col-11">
            <div className="row justify-content-center">{products}</div>
            {/* <div className="row justify-content-center">{projectLinks}</div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Products
