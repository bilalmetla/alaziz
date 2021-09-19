import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Edit } from "../components/Edit";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";


export const BuyerEdit = (props) => {
    const buyerDetails = [
        {label:'Buyer Name', props:{type:'text', required:true}, source:'name', isCaptalized:true},
        {label:'Address', props:{type:'text', required:true}, source:'address', isCaptalized:true},
        {label:'Phone', props:{type:'number', required:true}, source:'phone'},
        {label:'Representitve Name', props:{type:'text', required:true}, source:'representitveName', isCaptalized:true},
        {label:'NTN Number', props:{type:'text', required:true}, source:'ntnNumber'},
        { label: 'NTN Name', props: { type: 'text', required: true }, source: 'ntnName', isCaptalized:true },
        {label:'Email', props:{type:'email',}, source:'email'},
        {label:'CNIC', props:{type:'text', required:true}, source:'cnic'},
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
                <Col lg={9} className="main_col" >
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