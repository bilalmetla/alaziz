import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, Col, Form, Button } from "react-bootstrap";


const NavBar = () => {
    return (
        <div className="navbar">
            {/* <Link to="#" className="menu-bar" >
                Menu
            </Link> */}
            <nav className="nav-menu active">
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">

                        <Link to="/" className="menu-bar" >
                            Dashboard
                        </Link>
                    </li>
                    <li className="navbar-toggle">

                        <Link to="/buyers" className="menu-bar" >
                            Buyers
                        </Link>
                    </li>
                    <li className="navbar-toggle">

                        <Link to="/about" className="menu-bar" >
                            About
                        </Link>
                    </li>
                </ul>
            
                <Accordion flush >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Reports</Accordion.Header>
                        <Accordion.Body>
                            <p>
                            <Link to="/report/with-gst" className="menu-bar" >
                                With GST
                            </Link>
                            </p>
                        
                            <p>
                            <Link to="/without-gst" className="menu-bar" >
                                Without GST
                            </Link>
                            </p>
                            
                            <p>
                            <Link to="/with-pst" className="menu-bar" >
                                With PST
                            </Link>
                            </p>

                            <p>
                            <Link to="/without-pst" className="menu-bar" >
                                Without PST
                            </Link>
                            </p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </nav>
        </div>
    );
}

export default NavBar;
