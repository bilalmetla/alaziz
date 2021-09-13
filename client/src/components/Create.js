import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { create } from "./DataProvider";
import { FormElements } from "./FormElements";
import { FormTable } from "./FormTable";
import { FormsHeading } from "./FormsHeading";
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";

export const Create = (props) => {
    const { setLoading } = useContext(LoaderContext)
    const alert = useAlert()
    let history = useHistory();
    const [editFormData, setEditFormData] = useState({});
    const [formDataItems, setformDataItems] = useState([]);
    const [validated, setValidated] = useState(false);

   const handleInputsChange = (event) =>{
       let key = event.target.name
       let value = event.target.value
       let formData = { ...editFormData }
       formData[key] = value
       setEditFormData({...formData})
    }

    const handleInputsChangeOfItems = (event, index) =>{
        let key = event.target.name
        let value = event.target.value
        let changedData = [...formDataItems ]
        changedData[index][key] = value
        setformDataItems([...changedData])
    }
    
    const manageformDataItems = (event) => {
        let newItemsList = [...formDataItems]
        newItemsList.push({})
        setformDataItems([...newItemsList])
    }

    const removeformDataItems = (event, index) => {
        let newItemsList = [...formDataItems]
        newItemsList.splice(index, 1)
        setformDataItems([...newItemsList])
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
        
        if (props.newListResource) {
            updateData[props.newListResource] = [...formDataItems]
        }
        setLoading(true)
        let response = await create(`${props.match.url}`, updateData)
        setLoading(false)
        if (!response || response.errorMessage) {
            alert.show(response.errorMessage || 'Error')
            return 
        }
        if (!response.errorMessage) {
            history.goBack()
        }
        
    }
    
    useEffect(async () => {
        
        
    }, []);


    return (
        <>
            <FormsHeading {...props} />
            <Form noValidate validated={validated} onSubmit={submitForm}>
                <FormElements {...props}
                    handleInputsChange={handleInputsChange}
                    editFormData={editFormData}
                />
                
                <FormTable {...props}
                    manageformDataItems={manageformDataItems}
                    formDataItems={formDataItems}
                    removeformDataItems={removeformDataItems}
                    handleInputsChangeOfItems={handleInputsChangeOfItems}
                />          

  
                <Button className="submit-button" variant="primary" type="submit" >
                    Submit
                </Button>
        </Form>
        </>
    )
}