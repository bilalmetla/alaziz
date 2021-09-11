import React from 'react';
import {Row, Col, Button } from "react-bootstrap";
import { Edit } from "../components/Edit";
import { Link } from "react-router-dom";

export const InvoiceEdit = (props) => {

    console.log(props)

    const invoiceDetails = [
        { label: 'Serial Number', props:{type:'number', disabled:true}, source: 'serialNumber' },
        { label: 'Book Number', props:{type:'number', disabled:true}, source: 'bookNumber' },
        { label: 'Business Type', props:{type:'select', required:true}, source: 'businessType', options:[{title:'supply', value:1},{ title:'service', value:2}] },
        { label: 'Invoice Type', props:{type:'text', required:true}, source: 'invoiceType' },
        { label: 'Date', props:{type:'date', required:true}, source: 'date' },
        {
            label: 'Items', isNewList:true, props:{}, source: 'items', list: [
                { label: 'Quantity', props:{type:'number', required:true}, source: 'quantity' },
                { label: 'Description', props:{type:'text', required:true}, source: 'description' },
                { label: 'Price', props:{type:'number', required:true}, source: 'price' },
                { label: 'Rate Of ST', props:{type:'number', required:true}, source: 'rateOfST' },
                // { label: 'Action', props:{type:'number', required:true}, source: 'rateOfST' },
            ]
        },
       
    ]
    return (
        <>
           
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
                    title={`Invoice Edit`}
                ></Edit>
            </Row>
        </>
    )
}