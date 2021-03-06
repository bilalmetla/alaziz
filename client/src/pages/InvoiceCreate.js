import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Create } from "../components/Create";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";
import { constants } from "../constants";

export const InvoiceCreate = (props) => {
    const businessTypesOptions = Object.keys(constants.businessTypes).map(key => {
        let value = constants.businessTypes[key];
        return {
            title:value,
            value:value,
        };
    });
    const invoiceDetails = [
        { label: 'Business Type', props:{type:'select', required:true}, source: 'businessType', options: businessTypesOptions },
        { label: 'Invoice Type', props:{type:'text', required:true}, source: 'invoiceType', isCaptalized:true },
        { label: 'Date', props:{type:'date', required:true}, source: 'date' },
        {
            label: 'Items', isNewList:true, props:{}, source: 'items', list: [
                { label: 'Quantity', props:{type:'number', required:true}, source: 'quantity' },
                { label: 'Description', props:{type:'text', required:true}, source: 'description', isCaptalized:true },
                { label: 'Price', props:{type:'number', required:true}, source: 'price' },
                { label: 'Rate Of ST', props:{type:'number', required:true}, source: 'rateOfST' },
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