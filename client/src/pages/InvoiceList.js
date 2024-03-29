import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";



export const BuyerInvoices = (props) => {
    const invoiceDetails = [
        // { label: 'Serial Number', field: 'serialNumber' },
         { label: 'Cheque Number', field: 'checkNumber' },
        { label: 'Business Type', field: 'businessType' },
        { label: 'Invoice Type', field: 'invoiceType' },
         { label: 'Date', field: 'date' },
         { label: 'Status', field: 'status' },
       
    ]
    const actions = [
        { label: 'View', resource:`${props.match.url}/:id`,   },
    ]

    const topActionButtons = [
        { label: 'Go Back', to:'#', onClick:'() => history.goBack()'   },
        { label: 'Invoice Create',  to:`/create`,   },
        { label: 'Voucher Create',  to:`/vouchers/create`,   }
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
                <List {...props}
                    resource="buyerInvoices"
                    keys={invoiceDetails}
                    actions={actions}
                    createResource='invoices'
                        title={"Invoices List"}
                        topActionButtons={topActionButtons}
                />

                </Col>
            </Row>
        
        </>
    );
}