import React, { Component } from 'react'
import Link from 'gatsby-link'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import size from 'lodash/size'
import ReadNext from '../ReadNext'
import './style.scss'

class SitePost extends Component {
  more(path) {
    return (
      <Link className="readmore" to={path}>
        <span className="btn btn-outline-primary btn-block">MORE</span>
      </Link>
    )
  }

  isMore(body) {
    return body.match('<!--more-->')
  }

  description(body) {
    let test = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  categories(data) {
    const categories = []
    forEach(data, (item, i) => {
      categories.push(
        <span className="badge badge-primary text-white" key={i}>
          {item}
        </span>
      )
    })
    return categories
  }

  render() {
    const { site, data, isIndex } = this.props
    const id = get(data, 'id')
    const title = get(data, 'title')
    const path = `/blog/${id}`
    const date = get(data, 'createdAt')
    const html = get(
      data,
      'childContentfulLessonCopyCopyTextNode.childMarkdownRemark.html'
    )
    const description = this.description(html)
    const cate = get(data, 'lesson.title')
    const isMore = isIndex && !!html.match('<!--more-->')

    return (
      <div className="container">
        <div className="articles col-md-12">
          <div className="article-wrap" key={id}>
            <div className="page-header">
              <Link style={{ boxShadow: 'none' }} to={path}>
                <h1>{title}</h1>
                <time dateTime={date}>{date}</time>
              </Link>
              {this.categories(cate)}
            </div>
            {ad}
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: isMore ? description : html }}
            />
            {isMore ? this.more(path) : ''}
            {ad}
            {isIndex ? '' : <ReadNext data={site} />}
          </div>
        </div>
      </div>
    )
  }
}

export default SitePost
