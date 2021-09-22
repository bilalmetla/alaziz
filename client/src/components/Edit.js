import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { deleteRecord, getOne, update } from "./DataProvider";
import { FormElements } from "./FormElements";
import { FormTable } from "./FormTable";
import { FormsHeading } from "./FormsHeading";
import styles from '../Styles/Edit.module.css';
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";

export const Edit = (props) => {
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
        const response = await update(`${props.match.url}`, updateData)
        setLoading(false)
        if (!response || response.errorMessage) {
            alert.show(response.errorMessage || 'Error')
            if (response.code === 'ER0401') {
                history.push('/login')
            }
            return 
        }
        if (!response.errorMessage) {
            history.goBack()
        }
        
        
    }
   
    const deleteItem = async (event) => {
        event.preventDefault()
        setLoading(true)
        const response = await deleteRecord(`${props.match.url}`)
        setLoading(false)
        if (!response || response.errorMessage) {
            alert.show(response.errorMessage || 'Error')
            if (response.code === 'ER0401') {
                history.push('/login')
            }
            return 
        }
        if (!response.errorMessage) {
            history.goBack()
        }
    }
    
    useEffect(async () => {
        //`${props.resource}/${id}`
        setLoading(true)
        const fetchedData = await getOne(`${props.match.url}`)
        setLoading(false)
        if (!fetchedData || fetchedData.errorMessage) {
            alert.show(fetchedData.errorMessage || 'Error')
            if (fetchedData.code === 'ER0401') {
                history.push('/login')
            }
            return 
        }

        await setEditFormData(fetchedData)
        if (fetchedData[props.newListResource]) {
            await setformDataItems(fetchedData[props.newListResource])
        }
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