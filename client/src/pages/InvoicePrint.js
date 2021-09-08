import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Print } from "../components/Print";

export const InvoicePrint = (props) => {
    const invoiceDetails = [
        [
            { label: 'Buyer Name:', source: 'name' },
            { label: 'NTN Number#:', source: 'companyNTNNumber' },
            
        ],
        [
            { label: 'Address:', source: 'address' },
            { label: 'STRN#:', source: 'companySTRNNumber' },
        ],
        [
            { label: 'Date:', source: 'date', innerSource:'invoice' },
            { label: 'Book No:', source: 'bookNumber', innerSource:'invoice' },
            { label: 'Sr.No:', source: 'serialNumber', innerSource:'invoice' },
        ]
    ]
       
    return (
        <>
            <Row>
                <Col>Invoice Print</Col>
            </Row>
            <Row>
                <Print {...props}
                    resource="buyers/:buyerId/invoices/:invoiceId"
                    header={invoiceDetails}
                    innerSource={'invoice'}
                ></Print>
            </Row>
        </>
    )
}