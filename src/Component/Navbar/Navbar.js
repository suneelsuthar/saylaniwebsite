import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,} from "mdbreact";
import './navbar.css'
import logo from '../../Images/Saylani-logo.png'
import ehsaas from '../../Images/ehsaas.png'
class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
  
      <MDBNavbar   className='navBar'  dark expand="md">
        <MDBNavbarBrand >       
            <img src={logo} width='160' />
          {/* <strong className="white-text"></strong> */}
          </MDBNavbarBrand>
        <MDBNavbarToggler  className="toggler" onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav  left>
            <MDBNavItem  active>
              <MDBNavLink className='navbar-color' to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='navbar-color' to="/About">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='navbar-color' to="/Contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
          {/* <MDBNavbarBrand>
            <img src={ehsaas} width='150' height='80' /> */}
          {/* <strong className="white-text"></strong> */}
        {/* </MDBNavbarBrand> */}
      </MDBNavbar>
    
    );
  }
}

export default NavbarPage;