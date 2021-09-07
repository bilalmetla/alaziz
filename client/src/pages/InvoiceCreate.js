import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Create } from "../components/Create";

export const InvoiceCreate = (props) => {
    const invoiceDetails = [
        { label: 'Business Type', source: 'businessType' },
        { label: 'Invoice Type', source: 'invoiceType' },
        { label: 'Date', source: 'date' },
        {
            label: 'Items', isNewList:true, source: 'items', list: [
                { label: 'Quantity', type:'number', source: 'quantity' },
                { label: 'Description', type:'text', source: 'description' },
                { label: 'Price', type:'number', source: 'price' },
                { label: 'Rate Of ST', type:'number', source: 'rateOfST' },
            ]
        },
       
    ]
    return (
        <>
            <Row>
                <Col>Invoice Create</Col>
            </Row>
            <Row>
                <Create {...props}
                    resource="invoices"
                    form={invoiceDetails}
                    newListResource='items'
                ></Create>
            </Row>
        </>
    )
}