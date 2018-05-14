import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link, { withPrefix } from 'gatsby-link'
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  FormText,
} from 'reactstrap'
import LazyLoad from 'react-lazyload'
import Typist, { Backspace } from 'react-typing-animation'
import InstagramFeed from 'react-instagram-feed'
import Instafeed from 'react-instafeed'

import { siteMetadata } from '../../gatsby-config'

import SiteNavi from '../components/SiteNavi'
import Portfolio from '../components/Portfolio'

import selfImage from '../layouts/img/self-portrait.jpg'
import logo from '../layouts/img/cheaptearoffs_logo_FullWhite.svg'
import signature from '../layouts/img/signature.svg'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faLocation from '@fortawesome/fontawesome-free-solid/faLocationArrow'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'

class Home extends Component {
  render() {
    const { transition } = this.props
    const instafeedTarget = 'instafeed'

    const bgLinks = []
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const projects = get(this, 'props.data.portfolio.projects')

    const bgImages = get(this, 'props.data.allImageSharp.edges')
    bgImages.forEach((data, i) => {
      bgLinks.push(get(data, 'node.sizes.src'))
    })

    const AnimatedTypingComponent = () => (
      <Typist cursorClassName="text-white" loop={true} speed={140}>
        <span className="text-danger" style={{ fontWeight: '700' }}>
          {' '}
          Fox
        </span>
        <Backspace count={3} delay={1000} />
        <span className="text-danger" style={{ fontWeight: '700' }}>
          {' '}
          Dragon
        </span>
        <Backspace count={6} delay={1000} />
        <span className="text-danger" style={{ fontWeight: '700' }}>
          {' '}
          Oakley
        </span>
        <Backspace count={6} delay={1000} />
        <span className="text-danger" style={{ fontWeight: '700' }}>
          {' '}
          Spy
        </span>
        <Backspace count={3} delay={1000} />
      </Typist>
    )

    return (
      <div style={transition && transition.style}>
        <Helmet title={siteMetadata.title} />
        <SiteNavi
          title={siteMetadata.title}
          color="primary"
          projects={this.props.data.portfolio.projects}
          {...this.props}
        />

        <div
          id="home"
          className="container-fluid py-11"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
              bgLinks[3]
            })`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="row justify-content-center">
            <p
              className="text-center col-12 text-white"
              style={{
                lineHeight: '1',
                fontFamily: 'poppins',
                fontWeight: '700',
                fontSize: '5em',
              }}
            >
              Spend LESS
            </p>
          </div>
          <div className="row justify-content-center">
            <p
              className="text-center col-md-auto text-white"
              style={{
                lineHeight: '1',
                fontFamily: 'poppins',
                fontWeight: '300',
                fontSize: '5em',
              }}
            >
              New Arrivals
            </p>
            <div
              className="text-center col-md-auto"
              style={{
                lineHeight: '1',
                fontFamily: 'poppins',
                fontWeight: '300',
                fontSize: '5em',
              }}
            >
              <AnimatedTypingComponent />
            </div>
          </div>
          <div className="row justify-content-center">
            <p
              className="text-center col-lg-8 col-9 text-white"
              style={{
                lineHeight: '1',
                fontFamily: 'comfortaa',
                fontWeight: '400',
                fontSize: '1.5em',
              }}
            >
              OEM quality - WAY less $$$
            </p>
          </div>
          <div className="row justify-content-center">
            <a
              className="badge badge-pill badge-danger"
              style={{
                padding: '1em 1.8em',
                fontWeight: '400',
                fontSize: '1em',
              }}
              href="#"
            >
              SHOP NOW
            </a>
          </div>
        </div>

        <Portfolio projects={projects} {...this.props} />

        <div id="enquire" className="container-fluid py-5 bg-white">
          <div id="portfolio-title" className="row justify-content-center">
            <div className="col-lg-7 col-sm-10 col-11">
              <p
                className="text-center text-danger"
                style={{
                  lineHeight: '1',
                  fontFamily: 'poppins',
                  fontWeight: '700',
                  fontSize: '3em',
                }}
              >
                Get In Touch
              </p>
            </div>
          </div>
          <div className="row justify-content-center pt-3">
            <div className="col-lg-6 col-sm-10">
              <Form>
                <FormGroup row>
                  <Col s={6} className="pb-2">
                    <Input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name*"
                      required
                    />
                  </Col>
                  <Col s={6} className="pb-2">
                    <Input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder="Last Name*"
                      required
                    />
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
                    <Input type="select" name="event" id="event" required>
                      <option>Event Type*</option>
                      <option>General</option>
                      <option>Sales</option>
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
                  <Button color="primary">Submit</Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

        <div id="instagram" className="container-fluid">
          <LazyLoad once>
            <div id={instafeedTarget} className="row no-gutters">
              <Instafeed
                limit="8"
                ref="instafeed"
                sortBy="most-liked"
                target={instafeedTarget}
                template="<a href=&quot;{{link}}&quot; class=&quot;col-3&quot;><img src=&quot;{{image}}&quot; /></a>"
                userId="1482619234"
                clientId="3799b1b8534743e1988f78a4fdb434d8"
                accessToken="1482619234.3799b1b.45853abe9a024beeaa62e004a350bc46"
              />
            </div>
          </LazyLoad>
        </div>
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
    portfolio: allShopifyProduct(limit: 8) {
      totalCount
      projects: edges {
        project: node {
          id
          title
          productType
          vendor
          childShopifyProductVariant {
            image {
              src
            }
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          sizes {
            src
          }
        }
      }
    }
  }
`
