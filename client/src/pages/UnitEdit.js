import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { Edit } from "../components/Edit";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";


export const UnitEdit = (props) => {
    const details = [
        {label:'Unit Name', props:{type:'text', required:true},  source:'name'},
        {label:'Address', props:{type:'text', required:true}, source:'address'},
        {label:'Phone', props:{type:'number', required:true}, source:'phone'},
        {label:'User Name', props:{type:'text', required:true}, source:'userName'},
        {label:'Password', props:{type:'text', required:true}, source:'password'},
        {label:'Orginazer Name', props:{type:'text', required:true}, source:'organizerName'},
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
                    resource="units"
                    form={details}
                    title={`Unit Edit`}
                ></Edit>
                </Col>
            </Row>
        </>
    )
}