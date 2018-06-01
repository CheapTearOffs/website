import React, { Component } from 'react'
import get from 'lodash/get'
import Link, { withPrefix } from 'gatsby-link'

class PortfolioNavi extends Component {
  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    const { projects, location } = this.props
    const catList = []
    const catLinks = []

    projects.forEach((data, projCount) => {
      const vendor = get(data, 'project.vendor')
      const path = get(data, 'project.id')
      if (vendor != null) {
        // categories.forEach((cat, catCount) => {
          if (catList.indexOf(vendor) == -1) {
            catList.push(vendor)
            catLinks.push(
              <li
                className={
                  location.hash === `#${vendor}` ? 'navitem active' : 'nav-item'
                }
                key={path}
              >
                <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects(vendor)}>{vendor}</a>
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
              <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects("All")}>All</a>
            </li>
            {catLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioNavi
