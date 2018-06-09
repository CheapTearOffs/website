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
              <Link
                to={withPrefix(`/portfolio/#${cat}`)}
                key={`${cat}-${path}`}
              >
                <DropdownItem
                  active={
                    location.pathname === '/portfolio/' &&
                    location.hash === `#${cat}`
                      ? true
                      : false
                  }
                  key={path}
                >
                  {cat}
                </DropdownItem>
              </Link>
            )
          }
        })
      }
    })

    return (
      <Navbar
        className="text-uppercase"
        color="dark"
        // dark='true'
        sticky="top"
        expand="md"
      >
        <NavbarBrand
          href={withPrefix('/')}
          // className={color === 'primary' ? 'invisible' : 'navbar-brand'}
        >
          <img src={logo} width="150" style={{ margin: 0, padding: 0 }} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem
              active={
                location.hash === '#home' ||
                (location.pathname === '/' && location.hash === '')
                  ? true
                  : false
              }
            >
              <NavLink href={withPrefix('/')}>Home</NavLink>
            </NavItem>
            {/* <NavItem active={location.hash === '#about' ? true : false}>
              <NavLink href={withPrefix('/#about')}>About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Portfolio
              </DropdownToggle>
              <DropdownMenu>
                <Link to={withPrefix(`/portfolio`)}>
                  <DropdownItem
                    active={
                      location.pathname === '/portfolio' && location.hash === ''
                        ? true
                        : false
                    }
                  >
                    All
                  </DropdownItem>
                </Link>
                {catLinks}
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem active={location.hash === '/store' ? true : false}>
              <NavLink href={withPrefix('/store')}>Store</NavLink>
            </NavItem>
            <NavItem active={location.hash === '#enquire' ? true : false}>
              <NavLink href={withPrefix('/#enquire')}>Enquire</NavLink>
            </NavItem>
            <NavItem className={location.pathname != '/store' ? 'd-none' : ''} >
              <NavLink onClick={this.props.handleCartOpen}>Cart</NavLink>
            </NavItem>]
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default SiteNavi
