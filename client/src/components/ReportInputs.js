import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { post } from "./DataProvider";
import { FormElements } from "./FormElements";
import { ReportTable } from "./ReportTable";
import styles from '../Styles/ReportInputs.module.css';



export const ReportInputs = (props) => {
    
    let history = useHistory();
    const [editFormData, setEditFormData] = useState({});
    const [validated, setValidated] = useState(false);
    const [tableData, settableData] = useState([]);

   const handleInputsChange = (event) =>{
       let key = event.target.name
       let value = event.target.value
       let formData = { ...editFormData }
       formData[key] = value
       setEditFormData({...formData})
    }


    const submitForm = async (event) => {
        event.preventDefault()

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        if (!form.checkValidity()) {
            return
        }
        let updateData = { ...editFormData }
       
        let response = await post(`${props.match.url}`, updateData)
        if (!response.errorMessage) {
            settableData(response)    
        }
        
        
    }
    

    return (
        <>
        
        <Form noValidate validated={validated} onSubmit={submitForm}>
                <FormElements {...props}
                    handleInputsChange={handleInputsChange}
                    editFormData={editFormData}
                />
                        

                <div className={styles.report_input_btn}>
                    <Button className="submit-button" variant="primary" type="submit" >
                        Submit
                    </Button>
                </div> 
            </Form>
            
            <ReportTable {...props}
                data={tableData}
            >

            </ReportTable>
        </>
    )
}