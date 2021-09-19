import React from 'react';
import {Container, Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";

export const UnitList = (props) => {
    const details = [
        { label: 'Unit Name', field: 'name' },
        { label: 'Address', field: 'address' },
        { label: 'Orginizer Name', field: 'organizerName' },
        { label: 'Phone', field: 'phone' },
        { label: 'userName', field: 'userName' },
        
    ]
    const actions = [
        { label: 'View', resource:'/units/:id',   },
        { label: 'Buyers', resource:`${props.match.url}/:id/buyers`},
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
                    resource="units"
                    keys={details}
                    actions={actions}
                    title={"Unit List"}
                />
                </Col>
            </Row>
        
        </>
    );
}