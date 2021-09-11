import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { ReportInputs } from "../components/ReportInputs";

export const ReportWithOutPST = (props) => {

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
        
            <ReportInputs {...props}
                resource="reports"
                form={inputs}
                keys={reportDetails}
                title={'With Out PST Report'}
            >
                
        </ReportInputs>
        </>
    )
}