import React from "react"
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

class Menu extends React.Component {
    constructor() {
        super()
    }

    handleClick = () => window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    })

    render() {
        return(
        <div>
                <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' fixed='top'>
                    <Navbar.Brand href="#top">Alon Lerner</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <p className="menu-link" onClick={this.handleClick}  >  About Me</p>
                            <a href="#about-me-section" className="menu-link" >  My Projects</a>
                            <a href="#about-me-section" className="menu-link" >Contact Me</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default Menu