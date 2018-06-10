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
      const type = get (data, 'project.productType')

      if (type != null) {
        // categories.forEach((cat, catCount) => {
          if (catList.indexOf(type) == -1) {
            catList.push(type)
            catLinks.push(
              <li className={location.hash === `#${type}` ? 'navitem active' : 'nav-item'} key={path} >
                <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects(type)} >{type}</a>
              </li>
            )
          }
        // })
      }
    })

    return (
      <div className="row justify-content-center">
        <div className="col-md-7 col-11">
          <ul className="nav justify-content-center text-uppercase">
            {/* <li className="nav-item">
              <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects("All")}>All</a>
            </li> */}
            {catLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioNavi
