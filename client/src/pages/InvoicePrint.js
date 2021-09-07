import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Print } from "../components/Print";

export const InvoicePrint = (props) => {
    const invoiceDetails = [
        { label: 'Serial Number', source: 'serialNumber' },
        { label: 'Book Number', source: 'bookNumber' },
        { label: 'Business Type', source: 'businessType' },
        { label: 'Invoice Type', source: 'invoiceType' },
        { label: 'Date', source: 'date' },
        {
            label: 'Items', isNewList:true, source: 'items', list: [
                { label: 'Quantity', source: 'quantity' },
                { label: 'Description', source: 'description' },
                { label: 'Price', source: 'price' },
                { label: 'Rate Of ST', source: 'rateOfST' },
            ]
        },
       
    ]
    return (
        <>
            <Row>
                <Col>Invoice Print</Col>
            </Row>
            <Row>
                <Print {...props}
                    resource="buyers/:buyerId/invoices/:invoiceId"
                    form={invoiceDetails}
                    newListResource='items'
                ></Print>
            </Row>
        </>
    )
}