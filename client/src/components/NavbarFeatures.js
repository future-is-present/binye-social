import React from 'react';
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
  DropdownItem, Media } from 'reactstrap';
  // import MyPlaceHolderPicture from '../logo.svg';

export default class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.signed = this.signed.bind(this);
    this.state = {
      isOpen: false,
      signedIn: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signed() {
    this.setState({
      signedIn: !this.state.signedIn
    });
  }

  render() {
    //  <Media object src={MyPlaceHolderPicture} alt="My PlaceHolder Picture" />
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Media left>
      </Media>        
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/create/">Create Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Why?
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Help others
                  </DropdownItem>
                  <DropdownItem>
                    Society
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Wee need you
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href={"/logout" }>{ localStorage.getItem('user')? 'Logout' : null }</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}