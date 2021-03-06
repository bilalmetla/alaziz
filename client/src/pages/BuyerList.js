import React from 'react';
import {Container, Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";

export const BuyerList = (props) => {
    const buyersDetails = [
        { label: 'Byuer Name', field: 'name' },
        { label: 'Address', field: 'address' },
        { label: 'Representitve Name', field: 'representitveName' },
        // { label: 'Phone', field: 'phone' },
        // { label: 'NTN Number', field: 'ntnNumber' },
        // { label: 'NTN Name', field: 'ntnName' },
    ]
    const actions = [
        { label: 'View', resource:'buyers/:id',   },
        { label: 'UnPaid Invoices', resource:`${props.match.url}/:id/invoices/Unpaid`,  },
        { label: 'Paid Invoices', resource:`${props.match.url}/:id/invoices/Paid`, },
    ]
    
    const topActionButtons = [
        // { label: 'Go Back', to:'#', onClick:'() => history.goBack()'   },
        { label: 'Create',  to:`/create`,   },
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
                    resource="buyers"
                    keys={buyersDetails}
                    actions={actions}
                        title={"Buyers Info"}
                        // hideGoBack={true}
                        topActionButtons={topActionButtons}
                />
                </Col>
            </Row>
        
        </>
    );
}