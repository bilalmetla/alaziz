import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { create } from "./DataProvider";
import { FormElements } from "./FormElements";
import { FormTable } from "./FormTable";


export const Create = (props) => {
    let { id } = props.match.params
    let history = useHistory();
    const [editFormData, setEditFormData] = useState({});
    const [formDataItems, setformDataItems] = useState([]);
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
    const submitForm = async (event) => {
        event.preventDefault()
        let updateData = { ...editFormData }
        updateData['buyerId'] = id
        if (props.newListResource) {
            updateData[props.newListResource] = [...formDataItems]
        }
        let response = await create(`${props.resource}`, updateData)
        //history.push(`/${props.resource}`)
        if (!response.error) {
            history.goBack()
        }
        
    }
    
    useEffect(async () => {
        
        
    }, []);


    return (
        <>
            <Form>
                <FormElements {...props}
                    handleInputsChange={handleInputsChange}
                    editFormData={editFormData}
                />
                
                <FormTable {...props}
                    manageformDataItems={manageformDataItems}
                    formDataItems={formDataItems}
                    handleInputsChangeOfItems={handleInputsChangeOfItems}
                />          

  
                <Button className="submit-button" variant="primary" type="submit" onClick={submitForm}>
                    Submit
                </Button>
        </Form>
        </>
    )
}