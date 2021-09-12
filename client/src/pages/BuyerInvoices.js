import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";
import NavBar from "../components/NavBar";




export const BuyerInvoices = (props) => {
    const invoiceDetails = [
        { label: 'Serial Number', source: 'serialNumber' },
        // { label: 'Book Number', source: 'bookNumber' },
        { label: 'Business Type', source: 'businessType' },
        { label: 'Invoice Type', source: 'invoiceType' },
        { label: 'Date', source: 'date' },
       
    ]
    const actions = [
        { label: 'Edit', resource:`${props.match.url}/:id`,   },
    ]

    return (
        <>
            <Row>
            <Col lg={3}>
                    <NavBar lg={3} />
                </Col>
                <Col lg={9} >
                <List {...props}
                    resource="buyerInvoices"
                    keys={invoiceDetails}
                    actions={actions}
                    createResource='invoices'
                    title={"Invoices List"}
                />

                </Col>
            </Row>
        
        </>
    );
}