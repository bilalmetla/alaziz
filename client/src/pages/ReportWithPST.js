import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { ReportInputs } from "../components/ReportInputs";
import NavBar from "../components/NavBar";
import { Header } from "../components/Header";



export const ReportWithPST = (props) => {

    const inputs = [
        {label:'Start Date', props:{type:'date', required:true, name:'startDate'}, },
        {label:'End Date', props:{type:'date', required:true, name:'endDate'}, },
    ]
    const reportDetails = [
        {label:'Buyer NTN', source:'name' },
        {label:'Buyer NTN Name', source:'ntnName' },
        {label:'Name Of Item', source:'description' },
        {label:'Type', source:'invoiceType' },
        {label:'Bill No.', source:'serialNumber' },
        {label:'Value Of Sale', source:'valueExcelST' },
        {label:'Sale Tax', source:'rateOfST' },
        {label:'WHST', source:'' },
        {label:'Total Value Of Sale', source:'valueOfIncludingST' },

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
            <ReportInputs {...props}
                resource="reports"
                form={inputs}
                keys={reportDetails}
                title={'PST Report'}
            >
                
            </ReportInputs>
            </Col>
            </Row>
        </>
    )
}