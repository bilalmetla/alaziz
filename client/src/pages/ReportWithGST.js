import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { ReportInputs } from "../components/ReportInputs";

export const ReportWithGST = (props) => {

    const inputs = [
        {label:'Start Date', props:{type:'date', required:true, name:'startDate'}, },
        {label:'End Date', props:{type:'date', required:true, name:'endDate'}, },
    ]
    const reportDetails = [
        {label:'Buyer NTN', source:'' },
        {label:'Buyer NTN Name', source:'' },
        {label:'Type', source:'' },
        {label:'Bill No.', source:'' },
        {label:'Value Of Sale', source:'' },
        {label:'Sale Tax', source:'' },
        {label:'WHST', source:'' },
        {label:'Total Value Of Sale', source:'' },

    ]

    const reportData = (result) => {
        console.log(result)
    }
    
    return (
        <>
        
            <ReportInputs {...props}
                resource="reports"
                form={inputs}
                getData={reportData}
            >
                
        </ReportInputs>
        </>
    )
}