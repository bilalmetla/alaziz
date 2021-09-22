import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Print } from "../components/Print";

export const InvoicePrint = (props) => {
    const invoiceDetails = [
        [
            { label: 'Buyer Name:', source: 'name' },
            { label: 'NTN Number#:', source: 'companyNTNNumber' },
            
        ],
        [
            { label: 'Address:', source: 'address' },
            { label: 'STRN#:', source: 'companySTRNNumber' },
        ],
        [
            { label: 'Date:', source: 'date', innerSource:'' },
            { label: 'Book No:', source: 'bookNumber', innerSource:'invoice' },
            { label: 'Sr.No:', source: 'serialNumber', innerSource:'invoice' },
        ]
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
                    // logo={'logo-invoice.png'}
                    InvoiceTitle='BILL'
                    header={invoiceDetails}
                    innerSource={'invoice'}
                    invoiceItems={itemsList}
                    invoiceItemsHeader={itemsList}
                    grandTotals={grandTotals}
                    signature={{value:'Signature'}}
                ></Print>
            </Row>
        </>
    )
}