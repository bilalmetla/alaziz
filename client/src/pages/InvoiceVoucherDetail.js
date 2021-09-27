import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { VoucherDetail } from "../components/VoucherDetail";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";

export const InvoiceVoucherDetail = (props) => {
    const invoiceDetails = [
        { label: 'Quantity', props:{type:'number', required:true}, source: 'quantity' },
        { label: 'Description', props:{type:'text', required:true}, source: 'description', isCaptalized:true },
        { label: 'Price', props:{type:'number', required:true}, source: 'price' },
        { label: 'Rate Of ST', props:{type:'number', required:true}, source: 'rateOfST' },
       
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