import React from 'react';
import {Row, Col, Button } from "react-bootstrap";
import { Edit } from "../components/Edit";
import { Link } from "react-router-dom";

export const InvoiceEdit = (props) => {

    console.log(props)

    const invoiceDetails = [
        { label: 'Serial Number', source: 'serialNumber' },
        { label: 'Book Number', source: 'bookNumber' },
        { label: 'Business Type', source: 'businessType', type:'select', options:[{title:'supply', value:1},{ title:'service', value:2}] },
        { label: 'Invoice Type', source: 'invoiceType' },
        { label: 'Date', type:'date', source: 'date' },
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
                <Col>Invoice Edit</Col>
            </Row>
            <Row>
            <div className="align-right" >
                    <Link className="buttons"  to={`${props.match.url}/print`} >Print Invoice</Link>{' '}
                    <Link className="buttons" to={`${props.match.url}/print/receipt`} >Print Receipt</Link>{' '}
            </div>
            </Row>
            <Row>
                <Edit {...props}
                    resource="invoices"
                    form={invoiceDetails}
                    newListResource='items'
                ></Edit>
            </Row>
        </>
    )
}