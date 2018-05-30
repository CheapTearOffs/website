import React, { Component } from 'react'
import get from 'lodash/get'
import Link, { withPrefix } from 'gatsby-link'

class PortfolioNavi extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { projects, location } = this.props
    const catList = []
    const catLinks = []

    projects.forEach((data, projCount) => {
      const categories = get(data, 'project.vendor')
      console.log(categories)
      const path = get(data, 'project.id')
      if (categories != null) {
        // categories.forEach((cat, catCount) => {
          if (catList.indexOf(categories) == -1) {
            catList.push(categories)
            catLinks.push(
              <li
                className={
                  location.hash === `#${categories}` ? 'navitem active' : 'nav-item'
                }
                key={path}
              >
                <Link
                  to={withPrefix(`/portfolio/#${categories}`)}
                  className="nav-link"
                >
                  {categories}
                </Link>
              </li>
            )
          }
        // })
      }
    })

    return (
      <div className="row justify-content-center d-none d-md-flex">
        <div className="col-7">
          <ul className="nav justify-content-center text-uppercase">
            <li className="nav-item">
              {/* <Link to={withPrefix('/store')} className="nav-link">
                All
              </Link> */}
              <a className="nav-link">All</a>
            </li>
            {catLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioNavi
