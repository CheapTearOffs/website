import React, { Component } from 'react'
import get from 'lodash/get'
import Link, { withPrefix } from 'gatsby-link'

class PortfolioNavi extends Component {
  render() {
    const { projects, location } = this.props
    const catList = []
    const catLinks = []

    projects.forEach((data, projCount) => {
      const categories = get(data, 'project.categories')
      const path = get(data, 'project.id')
      if (categories != null) {
        categories.forEach((cat, catCount) => {
          if (catList.indexOf(cat) == -1) {
            catList.push(cat)
            catLinks.push(
              <li
                className={
                  location.hash === `#${cat}` ? 'navitem active' : 'nav-item'
                }
                key={path + '-' + catCount}
              >
                <Link
                  to={withPrefix(`/portfolio/#${cat}`)}
                  className="nav-link"
                >
                  {cat}
                </Link>
              </li>
            )
          }
        })
      }
    })

    return (
      <div className="row justify-content-center d-none d-md-flex">
        <div className="col-7">
          <ul className="nav justify-content-center text-uppercase">
            <li className="nav-item">
              <Link to={withPrefix('/portfolio')} className="nav-link">
                All
              </Link>
            </li>
            {catLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioNavi
