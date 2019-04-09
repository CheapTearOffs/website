import React, { Component } from 'react'
import get from 'lodash/get'
import { withPrefix } from 'gatsby-link'

class StoreNavi extends Component {
  render() {
    const { projects, showStoreNav, showProduct } = this.props
    const catList = []
    const catLinks = []

    console.log(showStoreNav)
    console.log(showProduct)

    projects.forEach((data) => {
      const path = get(data, 'project.id')
      const type = get (data, 'project.productType')

      if (type != null) {
          if (catList.indexOf(type) == -1) {
            catList.push(type)
            if(showStoreNav == false) {
              catLinks.push(
                <li key={path} className="col-md-3 col-11 mt-6 mx-3" style={{}} >
                  <a className="nav-link" style={{cursor: 'pointer', padding: 0, boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.2)'}} onClick={() => (
                                                                                this.props.showHideProjects(type),
                                                                                this.props.toggleStoreNav()
                                                                              )} >
                    <img src={withPrefix(`/img/${type}.jpg`)} style={{margin: 0, padding: 0}} />
                  </a>
                </li>
              )
            }
            else {
              catLinks.push(
                <li key={path} >
                  <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects(type)} >{type}</a>
                </li>
              )
            }
          }
      }
    })
    return (
      <div id="store-nav" className="row justify-content-center">
        <div className="col-md-8 col-11">
          <ul className="nav justify-content-center text-uppercase">
            {catLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default StoreNavi
