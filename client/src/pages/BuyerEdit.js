import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Edit } from "../components/Edit";
import NavBar from "../components/NavBar";



export const BuyerEdit = (props) => {
    const buyerDetails = [
        {label:'Buyer Name', props:{type:'text', required:true}, source:'name'},
        {label:'Address', props:{type:'text', required:true}, source:'address'},
        {label:'Phone', props:{type:'number', required:true}, source:'phone'},
        {label:'Representitve Name', props:{type:'text', required:true}, source:'representitveName'},
        {label:'NTN Number', props:{type:'text', required:true}, source:'ntnNumber'},
        {label:'NTN Name', props:{type:'text', required:true}, source:'ntnName'},
    ]
    return (
        <>
            
            <Row>
            <Col lg={3}>
                    <NavBar lg={3} />
                </Col>
                <Col lg={9} >
                <Edit {...props}
                    resource="buyers"
                    form={buyerDetails}
                    title={`Buyers Edit`}
                ></Edit>
                </Col>
            </Row>
        </>
    )
}