import React, { Component } from 'react'
import get from 'lodash/get'
import Link, { withPrefix } from 'gatsby-link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { NavLink as CartLink } from 'react-router-dom';

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
    const { location, title, color, projects } = this.props

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
