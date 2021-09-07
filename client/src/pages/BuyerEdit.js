import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Edit } from "../components/Edit";

export const BuyerEdit = (props) => {
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
                <Col>Buyers Edit</Col>
            </Row>
            <Row>
                <Edit {...props}
                    resource="buyers"
                    form={buyerDetails}
                ></Edit>
            </Row>
        </>
    )
}