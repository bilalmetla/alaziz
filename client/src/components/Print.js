import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getList } from "./DataProvider";



export const Print = (props) => {
      let { buyerId, invoiceId } = props.match.params
    const [buyer, setbuyer] = useState({});
    const [invoice, setinvoice] = useState({});
    
    useEffect(async () => {
        
        const fetchedData = await getList(`${props.match.url}`)
        await setbuyer(fetchedData)
        await setinvoice(fetchedData[props.innerSource])
        
    }, []);


    return (
        <>
            
            {
                props.header.map(row => {
                    return <Row>
                        {
                            row.map(col => {
                               
                                return <Col style={{display:'flex'}}>
                                    <p>{ col.label}</p>
                                    <span>{ col.innerSource === undefined? buyer[col.source] : invoice[col.source]}</span>
                                </Col>
                            })
                        }
                    </Row>
                    
                })
            }
            {/* <Row>
                <Col>Buyer Name:</Col>
                <Col>NTN Number#:</Col>
            </Row>
            <Row>
                <Col>Address:</Col>
                <Col>STRN#:</Col>
          </Row> */}

           
        </>
    )
}