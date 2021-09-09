import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Print } from "../components/Print";

export const ReceiptPrint = (props) => {
    const invoiceDetails = [
        [
            { label: 'Date:', source: 'date', innerSource:'invoice' },
            { label: 'Book No:', source: 'bookNumber', innerSource:'invoice' },
            { label: 'Sr.No:', source: 'serialNumber', innerSource:'invoice' },
        ],
        [
            { label: 'Buyer Name:', source: 'name' },
            
        ],
        [
            { label: 'Total Amount Of Bill:', innerSource:'grandTotals', source: 'grandTotalValueOfIncludingST' },
            { label: 'Income Tax With Held:', innerSource:'grandTotals', source: 'incomeTaxWithHeld' },
        ],
        [
            { label: 'Total GST/PST Amount Rs:', innerSource:'grandTotals', source: 'grandTotalSTPayable' },
            { label: 'Net Payment:', innerSource:'grandTotals', source: 'netPayment' },
        ],
        [
            { label: 'Sale Tax With Held:',  innerSource:'grandTotals', source: 'saleTaxWithHeld' },
            { label: 'Against The Bill No:', innerSource:'invoice', source: 'serialNumber' },
        ],
        [
            { label: '',  innerSource:'', source: '' },
            { label: 'Signature/Stamp:', innerSource:'grandTotals', source: '', },
        ],
        
    ]

    const receiptDetailSale = [
        [
            { label: 'Date:', source: 'date', innerSource:'invoice' },
            { label: 'Book No:', source: 'bookNumber', innerSource:'invoice' },
            { label: 'Sr.No:', source: 'serialNumber', innerSource:'invoice' },
        ],
        [
            { label: 'Buyer Name:', source: 'name' },
            
        ],
        
    ]
    const itemsList = [
        { label: 'Qty', source: 'quantity' },
        { label: 'Description', source: 'description' },
        { label: 'Price', source: 'price' },
        { label: 'Value Excel.ST', source: 'valueExcelST' },
        { label: 'Rate of ST', source: 'rateOfST' },
        { label: 'Total ST Payable', source: 'totalSTPayable' },
        { label: 'Value Of Including ST', source: 'valueOfIncludingST' },
    ]

    const grandTotals = [
        {},
        {},
        { value: 'Total' },
        { source: 'grandTotalValueExcelST' },
        {},
        { source: 'grandTotalSTPayable' },
        { source: 'grandTotalValueOfIncludingST' },

    ]
       
    return (
        <>
            <Row>
                {/* <Col>Invoice Print</Col> */}
            </Row>
            <Row>
                <Print {...props}
                    resource="buyers/:buyerId/invoices/:invoiceId"
                    logo={'logo-invoice.png'}
                    InvoiceTitle='Received'
                    isTitleATTop={true}
                    header={invoiceDetails}
                    innerSource={'invoice'}
                ></Print>
            </Row>
            <br></br>
            <hr></hr>
            <br></br>
            <Row>
                <Print {...props}
                    resource="buyers/:buyerId/invoices/:invoiceId"
                    logo={'logo-invoice.png'}
                    InvoiceTitle='Sales Tax Bill'
                    header={receiptDetailSale}
                    innerSource={'invoice'}
                    invoiceItemsHeader={itemsList}
                    grandTotals={grandTotals}
                ></Print>
            </Row>

        </>
    )
}