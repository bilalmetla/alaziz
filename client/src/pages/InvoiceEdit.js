import React from 'react';
import {Row, Col, Button } from "react-bootstrap";
import { Edit } from "../components/Edit";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";
import { constants } from "../constants";


export const InvoiceEdit = (props) => {

   const businessTypesOptions = Object.keys(constants.businessTypes).map(key => {
        let value = constants.businessTypes[key];
        return {
            title:value,
            value:value,
        };
    });

    const invoiceDetails = [
        { label: 'Serial Number', props:{type:'number', disabled:true}, source: 'serialNumber' },
        { label: 'Book Number', props:{type:'number', disabled:true}, source: 'bookNumber' },
        { label: 'Business Type', props:{type:'select', required:true}, source: 'businessType', options: businessTypesOptions },
        { label: 'Invoice Type', props:{type:'text', required:true}, source: 'invoiceType', isCaptalized:true },
        { label: 'Status', props:{type:'select', required:true, disabled:true}, source: 'status', options:[{title:'Unpaid', value:'Unpaid'},{ title:'Paid', value:'Paid'},{ title:'Cancelled', value:'Cancelled'}] },
        { label: 'Date', props: { type: 'date', required: true, disabled:true }, source: 'date' },
        {
            label: 'Items', isNewList:true, props:{}, source: 'items', list: [
                { label: 'Quantity', props:{type:'number', required:true}, source: 'quantity' },
                { label: 'Description', props:{type:'text', required:true}, source: 'description', isCaptalized:true },
                { label: 'Price', props:{type:'number', required:true}, source: 'price' },
                { label: 'Rate Of ST', props:{type:'number', required:true}, source: 'rateOfST' },
                // { label: 'Action', props:{type:'number', required:true}, source: 'rateOfST' },
            ]
        },
       
    ]
    return (
        <>
           
           <Row>
                <Header />
            </Row>
            <Row>
            <Col lg={3}>
                    <NavBar lg={3} />
                </Col>
                <Col lg={9} className="main_col">
                <Row>
                    <div className="align-right" >
                            <Link className="buttons"  to={`${props.match.url}/print`} target="_blank">Print Invoice</Link>{' '}
                            <Link className="buttons" to={`${props.match.url}/print/receipt`} target="_blank" >Print Receipt</Link>{' '}
                    </div>
                    </Row>
                    
                <Edit {...props}
                    resource="invoices"
                    form={invoiceDetails}
                    newListResource='items'
                    title={`Invoice Edit`}
                ></Edit>

                </Col>
            </Row>
        </>
    )
}