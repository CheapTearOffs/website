import React, { Component } from 'react'
import Helmet from 'react-helmet'
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import Typist, { Backspace } from 'react-typing-animation'
import Shopify from 'shopify-buy'

import { siteMetadata } from '../../gatsby-config'

import SiteNavi from '../components/SiteNavi'
import Store from '../components/Store'
import Instagram from '../components/Instagram'
import Cart from '../components/Cart'

import logo from '../layouts/img/cheaptearoffs_logo_OutlineBlack.svg'

const client = Shopify.buildClient({
  storefrontAccessToken: 'd58c703d46500efe4996cc38db86bfc2',
  domain: 'cheaptearoffsstore.myshopify.com'
});

class Home extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: {lineItems: []},
      products: [],
      shop: {},
      showProduct: '',
      showStoreNav: false,
      cartCount: 0
    }

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.showHideProjects = this.showHideProjects.bind(this);
    this.toggleStoreNav = this.toggleStoreNav.bind(this);
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

  showHideProjects(type) {
    console.log("type: " + type)
    this.setState({
      showProduct: type
    })
  }

  toggleStoreNav() {
    this.setState({
      showStoreNav: !this.showStoreNav
    })
  }

  render() {
    const { transition } = this.props
    const projects = this.props.data.allShopifyProduct.edges

    let vendor = projects.map((product) => {
      return (
        <span>
          <span className="text-danger">{product.project.vendor}</span>
          <Backspace count={10} delay={1000} />
        </span>
      )
    })

    const AnimatedTypingComponent = () => (
      <Typist cursorClassName="text-white" loop={true} speed={140}>
        {vendor}
      </Typist>
    )

    return (
      <div style={transition && transition.style}>
        <Helmet title={siteMetadata.title} />
        <SiteNavi title={siteMetadata.title}
                  color="primary"
                  projects={projects}
                  handleCartOpen={this.handleCartOpen}
                  cartCount={this.state.cartCount}
                  {...this.props}/>

        <div  id="home">
          <div id="home-container" className="container-fluid py-17">
            <div className="row justify-content-center">
              <div className="col-md-6 col-12">
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>

        <Store  showProduct={this.state.showProduct} 
                showStoreNav={this.state.showStoreNav}
                toggleStoreNav={this.toggleStoreNav}
                client={client}
                addVariantToCart={this.addVariantToCart} 
                showHideProjects={this.showHideProjects} 
                projects={projects} {...this.props} />

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-9 border-top"></div>
          </div>
        </div>

        <div  id="enquire" className="container-fluid py-6 bg-white">
          <div  id="portfolio-title" className="row justify-content-center">
            <div  className="col-lg-7 col-sm-10 col-11">
              <p  className="title text-center text-danger" style={{fontSize: '3em'}}>
                Get In Touch
              </p>
            </div>
          </div>
          <div  className="row justify-content-center pt-3">
            <div  className="col-lg-6 col-sm-10">
              <Form name="contact" method="POST" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <FormGroup  row>
                  <Col s={6} className="pb-2">
                    <Input  type="text"
                            name="First Name"
                            id="fName"
                            placeholder="First Name*"
                            required />
                  </Col>
                  <Col s={6} className="pb-2">
                    <Input  type="text"
                            name="Last Name"
                            id="lName"
                            placeholder="Last Name*"
                            required />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col s={6} className="pb-2">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      required
                    />
                  </Col>
                  <Col s={6} className="pb-2">
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col s={6} className="pb-2">
                    <Input type="select" name="reason" id="event" required>
                      <option>Reason*</option>
                      <option>General</option>
                      <option>Sales</option>
                      <option>Sell Our Products</option>
                    </Input>
                  </Col>
                  <Col s={6} className="pb-2">
                    <Input type="date" name="date" id="date" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs={12}>
                    <Input
                      type="textarea"
                      name="otherText"
                      id="otherText"
                      placeholder="Other info..."
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="justify-content-center" row>
                  <Button color="danger">Submit</Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-9 border-top"></div>
          </div>
        </div>

        {/* <Instagram /> */}

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

export default Home

export const projectQuery = graphql`
  query ProjectQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    allShopifyProduct {
      totalCount
      edges {
        project: node {
          id
          productType
          title
          vendor
          images {
            originalSrc
          }
          variants {
            price
            shopifyId
            image {
              originalSrc
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`
