import React, { Component } from 'react'
import get from 'lodash/get'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import { siteMetadata } from '../../../gatsby-config'

import SiteNavi from '../../components/SiteNavi'
import Portfolio from '../../components/Portfolio'

class PortfolioIndex extends Component {
  render() {
    const { location, transition } = this.props
    const projects = get(this, 'props.data.portfolio.projects')

    return (
      <div id="portfolio" style={transition && transition.style}>
        <SiteNavi
          title={siteMetadata.title}
          projects={this.props.data.portfolio.projects}
          {...this.props}
        />
        <Portfolio projects={projects} {...this.props} />
      </div>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
      }
    }
    portfolio: allContentfulPhotoGallery {
      totalCount
      projects: edges {
        project: node {
          id
          categories
          tags
          title {
            title
          }
          coverImage {
            sizes(maxWidth: 300) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`
