import React, { Component } from 'react'
import get from 'lodash/get'
import { withPrefix } from 'gatsby-link'

class StoreNavi extends Component {
  render() {
    const { projects, showStoreNav, showProduct } = this.props
    const catList = []
    const catLinks = []

    console.log("showStoreNav: " + showStoreNav)
    console.log("showProduct: " + showProduct)

    if(showStoreNav == false) {
      catLinks.push(
        <div className="nav justify-content-center text-uppercase" style={{display: "inherit"}} >
        <li className="col-md-3 col-11 mt-6 mx-3" style={{}} >
          <a className="nav-link" style={{cursor: 'pointer', padding: 0, boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.2)'}} onClick={() => (
                                                                        this.props.showHideProjects("Lenses"),
                                                                        this.props.toggleStoreNav()
                                                                      )} >
            <img src={withPrefix(`/img/Lenses.jpg`)} style={{margin: 0, padding: 0}} />
          </a>
        </li>
        <li className="col-md-3 col-11 mt-6 mx-3" style={{}} >
          <a className="nav-link" style={{cursor: 'pointer', padding: 0, boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.2)'}} onClick={() => (
                                                                        this.props.showHideProjects("Tear-Offs"),
                                                                        this.props.toggleStoreNav()
                                                                      )} >
            <img src={withPrefix(`/img/Tear-Offs.jpg`)} style={{margin: 0, padding: 0}} />
          </a>
        </li>
        <li className="col-md-3 col-11 mt-6 mx-3" style={{}} >
          <a className="nav-link" style={{cursor: 'pointer', padding: 0, boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.2)'}} onClick={() => (
                                                                        this.props.showHideProjects("Accesories"),
                                                                        this.props.toggleStoreNav()
                                                                      )} >
            <img src={withPrefix(`/img/Accesories.jpg`)} style={{margin: 0, padding: 0}} />
          </a>
        </li>
        </div>
      )
    }
    else {
      catLinks.push(
        <div style={{display: "inherit"}} >
        <li >
          <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects("Lenses")} >Lenses</a>
        </li>
        <li >
          <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects("Tear-Offs")} >Tear-Offs</a>
        </li>
        <li >
          <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => this.props.showHideProjects("Accesories")} >Tear-Accesories</a>
        </li>
        </div>
      )
    }

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
