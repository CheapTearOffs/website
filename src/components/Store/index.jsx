import React, { Component } from 'react'

import StoreNavi from '../StoreNavi'
import Product from '../Product';

class Products extends Component {
  render() {
    const { projects, showProduct } = this.props

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
          </div>
        </div>
        <StoreNavi projects={projects} {...this.props} />
        <div id="store-grid" className="row justify-content-center pt-5">
          <div className="col-xl-6 col-lg-9 col-11">
            <div className="row justify-content-center">
              <div className="">
                <p  className="text-center text-uppercase"
                    style={{  fontFamily: 'poppins',
                              fontWeight: '700',
                              fontSize: '3em',
                              color: '#000000', }}>
                    {this.props.showProduct}
                </p>
              </div>
            </div>
            <div className="row justify-content-center">{products}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
