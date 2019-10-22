import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, } from "mdbreact";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


class SubBar extends React.Component {
    render() {
        return (
            <div>
                <MDBNavbar style={{ backgroundColor: "#316dc3" }}>
                    <div style={{ marginLeft: '5%' }}>
                        <span style={{ backgroundColor: "#316dc3", color: "white", marginRight: '10px' }}><FaFacebook /></span>
                        <span style={{ backgroundColor: "#316dc3", color: "white", marginRight: '10px' }}><FaTwitter /></span>
                        <span style={{ backgroundColor: "#316dc3", color: "white", marginRight: '10px' }}><FaInstagram /></span>
                        <span style={{ backgroundColor: "#316dc3", color: "white", marginRight: '10px' }}><FaYoutube /></span>
                    </div>
                    <Button  variant="contained"  >
                        Donate Now
                    </Button>
                </MDBNavbar>


            </div>

        )
    }
}

export default SubBar