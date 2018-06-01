import React, { Component } from 'react'
import get from 'lodash/get'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import { siteMetadata } from '../../../gatsby-config'
import Shopify from 'shopify-buy'

import SiteNavi from '../../components/SiteNavi'
import Store from '../../components/Store'
import Cart from '../../components/Cart'

const client = Shopify.buildClient({
  storefrontAccessToken: 'd58c703d46500efe4996cc38db86bfc2',
  domain: 'cheaptearoffsstore.myshopify.com'
});

class StoreIndex extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: {lineItems: []},
      products: [],
      shop: {},
      showProduct: 'All'
    }

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.showHideProjects = this.showHideProjects.bind(this);
  }

  componentWillMount() {
    client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity){
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }
  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  showHideProjects(vendor) {
    console.log("vendor: " + vendor)
    this.setState({
      showProduct: vendor
    })
  }

  render() {
    const { location, transition } = this.props
    const projects = this.props.data.allShopifyProduct.edges

    return (
      <div id="portfolio" style={transition && transition.style}>
        <SiteNavi title={siteMetadata.title}
                  color="primary"
                  projects={projects}
                  handleCartOpen={this.handleCartOpen}
                  {...this.props}/>
        <Store  showProduct={this.state.showProduct} 
                client={client} 
                addVariantToCart={this.addVariantToCart} 
                showHideProjects={this.showHideProjects} 
                projects={projects} {...this.props} />

        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    )
  }
}

export default StoreIndex

export const pageQuery = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
      }
    }
    allShopifyProduct {
      totalCount
      edges {
        project: node {
          id
          title
          vendor
          images {
            originalSrc
          }
          extras {
            maxPrice
          }
          variants {
            shopifyId
          }
        }
      }
    }
  }
`
