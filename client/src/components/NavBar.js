import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Accordion, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from '../Styles/NavBar.module.css';   


const NavBar = () => {
    let history = useHistory();
    const [userId, setuserId] = useState('');
    const [isAdminLogin, setisAdminLogin] = useState('true');
    const [user, setuser] = useState({});
    

    useEffect(() => {
        let isAdLogin = sessionStorage.getItem('isAdminLogin')
        let usid = sessionStorage.getItem('userId')
        let user = sessionStorage.getItem('user')
        if (user) {
            user = JSON.parse(user)
        }
        setuser(user)
        
        if (!usid) {
            history.push('/login')
        }  
        

        if (isAdLogin && isAdLogin !== 'null' && isAdLogin !== 'undefined') {
            setisAdminLogin(isAdLogin)    
        }
        
        setuserId(usid)

    }, );

    return (
        <div className={styles.navBar}>
            
            <nav className={styles.navMenu}>
                <div className={styles.userInfo}>
                    <h3>{ user.name }</h3>
                    <p>{user.address}</p>
                    <hr></hr>
                </div>
                <ul className="nav-menu-items">
                    {/* <li className="navbar-toggle">

                        <Link to="/" className="menu-bar" >
                            Dashboard
                        </Link>
                    </li> */}
                   { isAdminLogin === 'true' &&
                    <li className="navbar-toggle">

                        <Link to="/units" className="menu-bar" >
                            Units
                        </Link>
                        </li>}
                    {isAdminLogin === 'false' &&
                        <li className="navbar-toggle">

                            <Link to={`/units/${userId}/buyers`} className="menu-bar" >
                                Buyers
                            </Link>
                        </li>
                    }
                    {/* {isAdminLogin === 'true' &&
                        <li className="navbar-toggle">

                            <Link to={`/buyers`} className="menu-bar" >
                                Buyers
                            </Link>
                        </li>
                    } */}
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
                            <Accordion.Header style={{color: '#080182'}}>Monthly Reports</Accordion.Header>
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

                        <Link to="/login" onClick={(event) => { setuserId(''); setisAdminLogin('false'); history.push('/login')}} className="menu-bar" >
                            LogOut
                    </Link>
                </li>
                </ul>
                
            </nav>
        </div>
    );
}

export default NavBar;
