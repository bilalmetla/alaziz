import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";

export const BuyerList = (props) => {
    const buyersDetails = [
        { label: 'Byuer Name', source: 'name' },
        { label: 'Address', source: 'address' },
        { label: 'Representitve Name', source: 'representitveName' },
        { label: 'Phone', source: 'phone' },
        { label: 'NTN Number', source: 'ntnNumber' },
        { label: 'NTN Name', source: 'ntnName' },
    ]
    const actions = [
        { label: 'Edit', resource:'',   },
        { label: 'Invoices', resource:'buyerInvoices',  },
    ]
    return (
        <>
            <Row>
                <Col>Buyers Info</Col>
            </Row>
            <Row>
                <List {...props}
                    resource="buyers"
                    keys={buyersDetails}
                    actions={actions}
                />
            </Row>
        
        </>
    );
}