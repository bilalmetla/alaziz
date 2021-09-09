import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Create } from "../components/Create";

export const InvoiceCreate = (props) => {
    const invoiceDetails = [
        { label: 'Business Type', type:'select', options:[{title:'supply', value:1},{ title:'service', value:2}], source: 'businessType' },
        { label: 'Invoice Type', type:'text', source: 'invoiceType' },
        { label: 'Date', type:'date', source: 'date' },
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