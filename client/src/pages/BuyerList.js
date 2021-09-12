import React from 'react';
import {Container, Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";
import NavBar from "../components/NavBar";

export const BuyerList = (props) => {
    const buyersDetails = [
        { label: 'Byuer Name', source: 'name' },
        { label: 'Address', source: 'address' },
        { label: 'Representitve Name', source: 'representitveName' },
        { label: 'Phone', source: 'phone' },
        // { label: 'NTN Number', source: 'ntnNumber' },
        // { label: 'NTN Name', source: 'ntnName' },
    ]
    const actions = [
        { label: 'Edit', resource:'',   },
        { label: 'Invoices', resource:`${props.match.url}/:id/invoices`,  },
    ]
    return (
        <>
            <Row>
                <Col lg={3}>
                    <NavBar lg={3} />
                </Col>
            
            <Col lg={9} >
                <List  {...props}
                    resource="buyers"
                    keys={buyersDetails}
                    actions={actions}
                    title={"Buyers Info"}
                />
                </Col>
            </Row>
        
        </>
    );
}