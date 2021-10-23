import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { VoucherDetail } from "../components/VoucherDetail";
import { Create } from "../components/Create";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";
import { constants } from "../constants";


export const InvoiceVoucherDetail = (props) => {
    const businessTypesOptions = Object.keys(constants.businessTypes).map(key => {
        let value = constants.businessTypes[key];
        return {
            title:value,
            value:value,
        };
    });
    const invoiceDetails = [
        { label: 'Voucher Title', props:{type:'text', required:true,}, source: 'title' },
        { label: 'Check Number', props:{type:'text', required:true,}, source: 'checkNumber' },
        { label: 'Voucher Price', props:{type:'number', required:true,}, source: 'voucherPrice' },
        { label: 'Business Type', props:{type:'select', required:false}, source: 'businessType', options: businessTypesOptions },
        { label: 'Rate Of ST', props:{type:'number', required:false,}, source: 'rateOfST' },
        { label: 'Invice Type', props: { type: 'text', required: false }, source: 'invoiceType' },
        { label: 'Quantity', props: { type: 'number', required: false }, source: 'quantity' },
        { label: 'Description', props:{type:'text', required:false}, source: 'description', isCaptalized:true },
        { label: 'Price', props:{type:'number', required:false}, source: 'price' },
        
    ]

    const invoiceDetailsTable = [
        { label: 'Quantity', props: { type: 'number', required: true }, source: 'quantity' },
        { label: 'Description', props:{type:'text', required:true}, source: 'description', isCaptalized:true },
        { label: 'Price', props:{type:'number', required:true}, source: 'price' },
        { label: 'valueExcelST', props:{type:'number', required:false, disabled: true}, source: 'valueExcelST' },
        { label: 'Rate Of ST', props:{type:'number', required:true,}, source: 'rateOfST' },
        { label: 'totalSTPayable', props: { type: 'number', required: false, disabled: true }, source: 'totalSTPayable' },
        { label: 'valueOfIncludingST', props:{type:'number', required:false, disabled: true}, source: 'valueOfIncludingST' },
        
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
                        formCol={2}
                        title={"Voucher Details"}
                        tableForm={invoiceDetailsTable}
                    ></VoucherDetail>


                    
                </Col>
            </Row>
        </>
    )
}