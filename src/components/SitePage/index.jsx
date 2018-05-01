import React, { Component } from 'react'
import './style.scss'

class SitePage extends Component {
  render() {
    const post = this.props.data.post
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />
  }
}

export default SitePage
