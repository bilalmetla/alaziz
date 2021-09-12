import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Create } from "../components/Create";
import NavBar from "../components/NavBar";


export const InvoiceCreate = (props) => {
    const invoiceDetails = [
        { label: 'Business Type', props:{type:'select', required:true}, options:[{title:'supply', value:1},{ title:'service', value:2}], source: 'businessType' },
        { label: 'Invoice Type', props:{type:'text', required:true}, source: 'invoiceType' },
        { label: 'Date', props:{type:'date', required:true}, source: 'date' },
        {
            label: 'Items', isNewList:true, props:{}, source: 'items', list: [
                { label: 'Quantity', props:{type:'number', required:true}, source: 'quantity' },
                { label: 'Description', props:{type:'text', required:true}, source: 'description' },
                { label: 'Price', props:{type:'number', required:true}, source: 'price' },
                { label: 'Rate Of ST', props:{type:'number', required:true}, source: 'rateOfST' },
            ]
        },
       
    ]
    return (
        <>
            
            <Row>
            <Col lg={3}>
                    <NavBar lg={3} />
                </Col>
                <Col lg={9} >
                <Create {...props}
                    resource="invoices"
                    form={invoiceDetails}
                    newListResource='items'
                    title={"Invoice Create"}
                ></Create>

                </Col>
            </Row>
        </>
    )
}