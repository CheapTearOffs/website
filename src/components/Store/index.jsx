import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Alert } from 'reactstrap'

import PortfolioNavi from '../PortfolioNavi'
import Product from '../Product';
import VariantSelector from '../VariantSelector'

class Products extends Component {
  render() {
    const { location, projects, showProduct } = this.props
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    let products = this.props.projects.sort((a,b) => {
      var vendorA = a.project.vendor
      var vendorB = b.project.vendor
  
      if(vendorA < vendorB) {
        return -1
      }
      if(vendorA > vendorB) {
        return 1
      }
      return 0
    }).map((product) => {
      let image = product.project.images[0].originalSrc
      image = image.substring(0, image.indexOf('?'))

      let variants = product.project.variants.map((variant) => {
        return variant.selectedOptions.map((option) => {
          if(option.value != "Default Title") {
            return option.value
          }
        })
      })

      if(showProduct == product.project.productType) {
        return (
          <Product addVariantToCart={this.props.addVariantToCart} client={this.props.client} key={product.project.title} product={product} />
        )
      }
    })

    return (
      <div id="store" className="container-fluid bg-even py-6 bg-white">
        <div id="store-title" className="row justify-content-center">
          <div className="col-lg-7 col-sm-10 col-11">
            <p className="text-center"
               style={{ color: '#000',
                        lineHeight: '1',
                        fontFamily: 'poppins',
                        fontWeight: '700',
                        fontSize: '3em',}} >
              Let's shop now
            </p>
            <p  className="text-center text-uppercase"
                style={{  fontFamily: 'poppins',
                          fontWeight: '700',
                          fontSize: '3em',
                          color: '#ff0000',
                          WebkitTextFillColor: 'white', /* Will override color (regardless of order) */
                          WebkitTextStrokeWidth: '3px',
                          WebkitTextStrokeColor: '#ff0000' }}>
                {this.props.showProduct}
            </p>
          </div>
        </div>
        <PortfolioNavi projects={projects} {...this.props} />
        <div id="store-grid" className="row justify-content-center pt-5">
          <div className="col-xl-6 col-lg-9 col-11">
            <div className="row justify-content-center">{products}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
