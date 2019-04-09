import React, { Component } from 'react'
import { withPrefix } from 'gatsby-link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import logo from '../../layouts/img/cheaptearoffs_logo_FullWhite.svg'
import cartIcon from '../../layouts/img/shopping-cart-empty-side-view.svg'

class SiteNavi extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <Navbar
        className="text-uppercase"
        color="dark"
        sticky="top"
        expand="md"
        dark
      >
        <NavbarBrand href={withPrefix('/')} >
          <img src={logo} width="150" style={{ margin: 0, padding: 0 }} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={withPrefix('/#home')}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={withPrefix('/#store')}>Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={withPrefix('/#enquire')}>Enquire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.props.handleCartOpen}>
                <img src={cartIcon} width="16" />
              </NavLink>
            </NavItem>]
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default SiteNavi
