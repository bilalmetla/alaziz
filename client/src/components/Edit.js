import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { deleteRecord, getOne, update } from "./DataProvider";
import { FormElements } from "./FormElements";
import { FormTable } from "./FormTable";
import { FormsHeading } from "./FormsHeading";
import styles from '../Styles/Edit.module.css';



export const Edit = (props) => {
    
    let { id } = props.match.params
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
        
        const response = await update(`${props.resource}/${id}`, updateData)
        if (!response.errorMessage) {
            history.goBack()
        }
        
        
    }
   
    const deleteItem = async (event) => {
        event.preventDefault()
        const response = await deleteRecord(`${props.match.url}`)
        if (!response.errorMessage) {
            history.goBack()
        }
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
  
                <div className={styles.btns}>

                <Button className={ styles.btn_color} variant="primary" type="submit" >
                Update
                    </Button>
                    
                <Button className="submit-button" variant="danger" onClick={deleteItem} >
                Delete
                </Button>
                </div>
            
        </Form>
        </>
    )
}