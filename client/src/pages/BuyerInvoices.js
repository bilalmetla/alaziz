import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";

export const BuyerInvoices = (props) => {
    const invoiceDetails = [
        { label: 'Serial Number', source: 'serialNumber' },
        { label: 'Book Number', source: 'bookNumber' },
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
                <Col>Invoices List</Col>
            </Row>
            <Row>
                <List {...props}
                    resource="buyerInvoices"
                    keys={invoiceDetails}
                    actions={actions}
                    createResource='invoices'
                />
            </Row>
        
        </>
    );
}