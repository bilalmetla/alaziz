import React from 'react';
import { Link } from "react-router-dom";

export const Header = ({children})=>{


    return (
        <>
            <div className="header">
                <div >
                    <img className="log" src='logo192.png' />

                </div>
                <div className="header-heading">
                    <h1>AL-AZIZ TRADERS</h1>
                </div>
                {/* <ul className="space-between">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul> */}
            </div>
        </>
    )
}