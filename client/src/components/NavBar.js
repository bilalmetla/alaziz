import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Accordion, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from '../Styles/NavBar.module.css';   


const NavBar = () => {
    let history = useHistory();
    const [userId, setuserId] = useState('');
    const [isAdminLogin, setisAdminLogin] = useState({});
    

    useEffect(() => {
        let isAdLogin = sessionStorage.getItem('isAdminLogin')
        let usid = sessionStorage.getItem('userId')
        
        if (!usid) {
            history.push('/login')
        }

        setisAdminLogin(isAdLogin)
        setuserId(usid)

    }, );

    return (
        <div className={styles.navBar}>
            {/* <Link to="#" className="menu-bar" >
                Menu
            </Link> */}
            <nav className={styles.navMenu}>
                <ul className="nav-menu-items">
                    {/* <li className="navbar-toggle">

                        <Link to="/" className="menu-bar" >
                            Dashboard
                        </Link>
                    </li> */}
                    isAdminLogin === 'true' &&
                    <li className="navbar-toggle">

                        <Link to="/units" className="menu-bar" >
                            Units
                        </Link>
                    </li>
                    <li className="navbar-toggle">

                        <Link to={`/units/${userId}/buyers`} className="menu-bar" >
                            Buyers
                        </Link>
                    </li>
                    {/* <li className="navbar-toggle">

                        <Link to="/about" className="menu-bar" >
                            About
                        </Link>
                    </li> */}
                </ul>
                {
                    isAdminLogin === 'true' &&
                    <Accordion flush  >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header >Reports</Accordion.Header>
                            <Accordion.Body>
                                <p className={styles.report_links}>
                                    <Link to="/report/with-gst" className="menu-bar" >
                                        With GST
                                    </Link>
                                </p>
                        
                                <p className={styles.report_links}>
                                    <Link to="/report/without-gst" className="menu-bar" >
                                        Without GST
                                    </Link>
                                </p>
                            
                                <p className={styles.report_links}>
                                    <Link to="/report/with-pst" className="menu-bar" >
                                        With PST
                                    </Link>
                                </p>

                                <p className={styles.report_links}>
                                    <Link to="/report/without-pst" className="menu-bar" >
                                        Without PST
                                    </Link>
                                </p>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                }
                <ul className="nav-menu-items" style={{marginTop:'20px'}}>
                <li className="navbar-toggle">

                        <Link to="#" onClick={(event) => { setuserId(''); setisAdminLogin(''); history.push('/login')}} className="menu-bar" >
                            LogOut
                    </Link>
                </li>
                </ul>
                
            </nav>
        </div>
    );
}

export default NavBar;
