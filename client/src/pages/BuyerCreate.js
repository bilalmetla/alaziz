import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Create } from "../components/Create";

export const BuyerCreate = (props) => {
    const buyerDetails = [
        {label:'Buyer Name', type:'text', source:'name'},
        {label:'Address', type:'text', source:'address'},
        {label:'Phone', type:'number', source:'phone'},
        {label:'Representitve Name', type:'text', source:'representitveName'},
        {label:'NTN Number', type:'text', source:'ntnNumber'},
        {label:'NTN Name', type:'text', source:'ntnName'},
    ]
    return (
        <>
            <Row>
                <Col>Buyers Create</Col>
            </Row>
            <Row>
                <Create {...props}
                    resource="buyers"
                    form={buyerDetails}
                ></Create>
            </Row>
        </>
    )
}