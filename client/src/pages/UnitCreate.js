import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Create } from "../components/Create";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";




export const UnitCreate = (props) => {
    const details = [
        {label:'Unit Name', props:{type:'text', required:true},  source:'name', isCaptalized:true},
        {label:'Address', props:{type:'text', required:true}, source:'address', isCaptalized:true},
        {label:'Phone', props:{type:'number', required:true}, source:'phone'},
        {label:'User Name', props:{type:'text', required:true}, source:'userName'},
        {label:'Password', props:{type:'password', required:true}, source:'password'},
        { label: 'Orginazer Name', props: { type: 'text', required: true }, source: 'organizerName', isCaptalized:true },
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
                <Col lg={9} className="main_col">
                    <Create {...props}
                        resource="units"
                        form={details}
                        title={`Unit Create`}
                    ></Create>
                </Col>
            </Row>
        </>
    )
}