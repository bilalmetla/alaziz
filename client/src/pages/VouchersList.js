import React from 'react';
import {Container, Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";

export const VouchersList = (props) => {
    const details = [
        { label: 'Voucher Title',  field: 'title' },
        { label: 'Cheque Number',  field: 'checkNumber' },
        { label: 'Voucher Price', field: 'voucherPrice' },
        { label: 'Status', field: 'status' },
    ]
    const actions = [
        { label: 'View', resource:'vouchers/:id',   },
    ]
    
    const topActionButtons = [
        // { label: 'Go Back', to:'#', onClick:'() => history.goBack()'   },
        // { label: 'Create', to: `/create`, }, //create voucher from buyers -> 
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
                <List  {...props}
                    resource="vouchers"
                    keys={details}
                    actions={actions}
                        title={"Voucher Info"}
                        // hideGoBack={true}
                        topActionButtons={topActionButtons}
                />
                </Col>
            </Row>
        
        </>
    );
}