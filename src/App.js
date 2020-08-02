import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';


class App extends React.Component {
    AboutMeRef=null
    myProjectsRef = null
    ContactMeRef=null

    handleAMClick() {
        
        window.scrollTo({
            top: 77, left: 0, behavior: 'smooth'
        })
    }

    handleMPClick = () => window.scrollTo({
        top: this.myProjectsRef.offsetTop-130, left: 0, behavior: 'smooth'
    })

    handleCMClick = () => window.scrollTo({
        top: this.ContactMeRef.offsetTop - 130, left: 0, behavior: 'smooth'
    })
    
    render() {
        return (
            <body id="top">
                <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' fixed='top'>
                    <Navbar.Brand href="#top" className="brand"> Alon Lerner</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <p className="menu-link" onClick={this.handleAMClick}  >  About Me</p>
                            <p className="menu-link" onClick={this.handleMPClick}  >My Projects</p>
                            <p className="menu-link" onClick={this.handleCMClick}  >Contact Me</p>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br /><br />
                <AboutMe />
                <p ref={(ref) => this.myProjectsRef = ref}></p>
                <MyProjects ref={(ref) => this.myProjectsRef = ref} />
                <p ref={(ref) => this.ContactMeRef = ref}></p>
                <ContactMe />

            </body>
        )
    }
}

export default App;
