import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from '../Styles/List.module.css'; 
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

   const handleInputsChange = (event, isCaptalized) =>{
       let key = event.target.name
       let value = event.target.value
       let formData = { ...editFormData }
       formData[key] = isCaptalized === true? captilizeEachWord(value): value
       setEditFormData({...formData})
    }

    const captilizeEachWord = value => value.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())

    const handleInputsChangeOfItems = (event, index, isCaptalized) =>{
        let key = event.target.name
        let value = event.target.value
        let changedData = [...formDataItems ]
        changedData[index][key] = isCaptalized === true? captilizeEachWord(value): value
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
            if (response.code === 'ER0401') {
                history.push('/login')
            }
            return 
        }
        if (!response.errorMessage) {
           return history.goBack()
        }
        
    }
    
    useEffect(async () => {
        
        
    }, []);


    return (
        <>
            <FormsHeading {...props} />
            <div className={styles.create_btn}>                
                <Link to='#' onClick={() => history.goBack()} >Go Back</Link>
            </div>
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