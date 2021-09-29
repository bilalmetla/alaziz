import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { VoucherDetail } from "../components/VoucherDetail";
import { Create } from "../components/Create";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";

export const InvoiceVoucherDetail = (props) => {
    const invoiceDetails = [
        { label: 'Rate Of ST', props:{type:'number', required:false}, source: 'rateOfST' },
        { label: 'Business Type', props:{type:'select', required:false}, source: 'businessType', options:[{title:'Supply', value:'Supply'},{ title:'Service', value:'Service'}] },
        { label: 'Invice Type', props:{type:'text', required:false}, source: 'invoiceType' },
        { label: 'Quantity', props: { type: 'number', required: false }, source: 'quantity' },
        { label: 'Description', props:{type:'text', required:false}, source: 'description', isCaptalized:true },
        { label: 'Price', props:{type:'number', required:false}, source: 'price' },
        
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
                    <VoucherDetail {...props}
                        resource="invoices"
                        form={invoiceDetails}
                        title={"Voucher Details"}
                    ></VoucherDetail>


                    
                </Col>
            </Row>
        </>
    )
}