import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'

import PortfolioNavi from '../PortfolioNavi'

class Portfolio extends Component {
  render() {
    const { location, projects } = this.props

    const projectLinks = []
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    projects.forEach((data, i) => {
      const title = get(data, 'project.title.title')
      const image = get(data, 'project.coverImage.sizes')
      const path = get(data, 'project.id')
      const categories = get(data, 'project.categories')

      if (categories != null) {
        projectLinks.push(
          <LazyLoad key={path} once>
            <div
              className={
                categories.indexOf(location.hash.replace('#', '')) > -1 ||
                location.hash === '' ||
                location.pathname === '/'
                  ? 'col-sm-4 col-12 pt-5'
                  : 'd-none'
              }
            >
              <div className="text-center hovereffect">
                <Link to={withPrefix(``)}>
                  <Img sizes={image} />
                  <div className="overlay">
                    <h2>{title}</h2>
                  </div>
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
                  ? 'col-sm-4 col-12 pt-5'
                  : 'd-none'
              }
            >
              <div className="text-center hovereffect">
                <Link to={withPrefix(``)}>
                  <Img sizes={image} />
                  <div className="overlay">
                    <h2>{title}</h2>
                  </div>
                </Link>
              </div>
            </div>
          </LazyLoad>
        )
      }
    })

    return (
      <div id="portfolio" className="container-fluid bg-even py-5">
        <div id="portfolio-title" className="row justify-content-center">
          <div className="col-lg-7 col-sm-10 col-11">
            <p className="text-center" style={{color: '#000', lineHeight: '1', fontFamily: 'comfortaa', fontWeight: '300', fontSize: '1.5em'}}>Let's shop now</p>
          </div>
        </div>
        <div id="portfolio-title" className="row justify-content-center">
          <div className="col-lg-7 col-sm-10 col-11">
            <p className="text-center" style={{color: '#000', lineHeight: '1', fontFamily: 'poppins', fontWeight: '700', fontSize: '3em'}}>New Arrivals</p>
          </div>
        </div>
        {/* <PortfolioNavi projects={projects} {...this.props} /> */}
        <div id="portfolio-grid" className="row justify-content-center">
          <div className="col-lg-8 col-sm-10 col-12">
            <div className="row justify-content-center">{projectLinks}</div>
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <Link
            className="btn btn-outline-primary"
            to={withPrefix('')}
            role="button"
          >
            More
          </Link>
        </div>
      </div>
    )
  }
}

export default Portfolio
