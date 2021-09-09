import React from 'react';
import { Link } from "react-router-dom";
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
            </nav>
        </div>
    );
}

export default NavBar;
