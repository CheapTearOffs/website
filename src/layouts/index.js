import React, { Component } from 'react'
import Link from 'gatsby-link'
import emergence from 'emergence.js'

import SiteFooter from '../components/SiteFooter'

import './gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'font-awesome/css/font-awesome.css'

class Template extends Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children } = this.props

    return (
      <div>
        {children()}
        <SiteFooter />
      </div>
    )
  }
}

export default Template
