import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { get, getOne, update } from "./DataProvider";
import { FormElements } from "./FormElements";
import { FormTable } from "./FormTable";



export const Edit = (props) => {
    
    let { id } = props.match.params
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
        if (props.newListResource) {
            updateData[props.newListResource] = [...formDataItems]
        }
        
        const fetchedData = await update(`${props.resource}/${id}`, updateData)
        // if (!fetchedData.error) {
        //    // await setEditFormData(fetchedData) 
        // }
        
        
    }
   
    
    useEffect(async () => {
        //`${props.resource}/${id}`
        const fetchedData = await getOne(`${props.match.url}`)
        await setEditFormData(fetchedData)
        if (fetchedData[props.newListResource]) {
            await setformDataItems(fetchedData[props.newListResource])
        }
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