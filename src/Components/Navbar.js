import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

 export default function Navbars(props) {

        return(
            <div className="main-section-nav">
                <Navbar bg="nav-bgcolor" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                    <Navbar.Brand>
                        
                
                            <Nav.Link href="#home" smooth className="link" id="portfolio">MEENU'S PORTFOLIO</Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="demo">
                        <Nav className="navbar-nav ms-auto" id="item">
                            <Nav.Item className="ms-auto" >
                                <Nav.Link href="#education" smooth className="link" id="item-padding">EDUCATION</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ms-auto" >
                                <Nav.Link href="#workexperience" smooth className="link" id="item-padding">EXPERIENCE</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ms-auto">
                                <Nav.Link href="#skills" className="link" smooth id="item-padding">SKILLS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ms-auto">
                                <Nav.Link href="#about" className="link" smooth id="item-padding">ABOUT</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>



                    



            




                </Navbar>






                
            {/* //     <ul className="main-nav">
            //         <li className="head">
            //             <Link to="#" smooth className="link" >MEENU'S PORTFOLIO</Link>
            //         </li>
                    
                    
            //         <li className="nav">
            //             <Link to="#education" smooth className="link">EDUCATION</Link>
            //         </li>
                   
            //         <li className="nav">
            //             <Link to="#workexperience" smooth className="link">EXPERIENCE</Link>
            //         </li>

            //         <li className="nav">
            //             <Link to="#skills" smooth className="link">SKILLS</Link>
            //         </li>

            //         <li className="nav">
            //             <Link to='#about' smooth className="link">ABOUT</Link>
            //         </li>
            //     </ul> */}
             </div>
        )
    }


// const navbar = document.querySelector('.navbar');
// window.onscroll = () => {
//     if (window.scrollY > 300) {
//         navbar.classList.add('navbar-active');
//     } else {
//         navbar.classList.remove('navbar-active');
//     }
// };


