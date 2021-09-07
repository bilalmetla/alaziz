import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { get } from "./DataProvider";



export const Print = (props) => {
      let { buyerId, invoiceId } = props.match.params
   
    useEffect(async () => {
        
        const fetchedData = await get(`${props.match.url}`)
        
    }, []);


    return (
        <>
            {/* some action buttons */}
           <h1>print </h1>

           
        </>
    )
}