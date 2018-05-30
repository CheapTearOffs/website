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

    const projectLinks = []
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    console.log(projects)

    projects.forEach((data, i) => {
      const title = get(data, 'project.title')
      const image = get(data, 'project.childShopifyProductVariant.image.src')
      const variantID = get(data, 'project.childShopifyProductVariant.shopifyId')
      const path = get(data, 'project.id')
      const categories = get(data, 'project.categories')
      const price = get(data, 'project.maxPrice')
      const vendor = get(data, 'project.vendor')

      if(showProduct == vendor || showProduct == "All"){
        console.log(title)
        if (categories != null) {
          projectLinks.push(
            <LazyLoad key={path} once>
              <div
                className={
                  categories.indexOf(location.hash.replace('#', '')) > -1 ||
                  location.hash === '' ||
                  location.pathname === '/'
                    ? 'col-sm-3 col-12 pt-5'
                    : 'd-none'
                }
              >
                <div className="text-center hovereffect">
                  <Link to={withPrefix(``)}>
                    <img src={image} style={{ margin: 0, padding: 0 }} />
                    <div className="overlay">
                      <h2>
                        {title} <br/>
                        ${price}
                      </h2>
                    </div>
                  </Link>
                </div>
                <div className="row justify-content-center pt-3">
                  <Link
                    className="btn btn-outline-danger"
                    to={withPrefix('')}
                    role="button"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </LazyLoad>
          )
        } else {
          projectLinks.push(
            <LazyLoad key={path} once>
              <div
                className={
                  location.hash === '' || location.pathname === '/'
                    ? 'col-sm-3 col-12 pt-5'
                    : 'd-none'
                }
              >
                <div className="text-center hovereffect">
                  <Link to={withPrefix(``)}>
                    <img src={image} style={{ margin: 0, padding: 0 }} />
                    <div className="overlay">
                      <h2>
                        {title} <br/>
                        ${price}
                      </h2>
                    </div>
                  </Link>
                </div>
                <div className="row justify-content-center pt-3">
                  {/* <Link
                    className="btn btn-outline-danger"
                    role="button"
                    onClick={() => this.props.addVariantToCart(variantID, 1)}
                  >
                    Buy
                  </Link> */}
                  <a className="btn btn-outline-danger text-danger" onClick={() => this.props.addVariantToCart(variantID, 1)}>Buy</a>
                </div>
              </div>
            </LazyLoad>
          )
        }
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
            {/* {products} */}
            <div className="row justify-content-center">{projectLinks}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
