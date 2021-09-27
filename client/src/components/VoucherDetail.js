import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from '../Styles/List.module.css'; 
import { create } from "./DataProvider";
import { FormElements } from "./FormElements";
import { FormTable } from "./FormTable";
import { FormsHeading } from "./FormsHeading";
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";

export const VoucherDetail = (props) => {
    const { setLoading } = useContext(LoaderContext)
    const alert = useAlert()
    let history = useHistory();
    const [editFormData, setEditFormData] = useState({});
    const [formDataItems, setformDataItems] = useState([]);
    const [validated, setValidated] = useState(false);
    const [voucherDetails, setvoucherDetails] = useState({});

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
    
    const AddItemToTable = () => {
        let record = { ...editFormData }
        let obj = {...voucherDetails}
        if (!obj[record.rateOfST]) {
            
            obj[record.rateOfST] = []
            obj[record.rateOfST].push(record)
            setvoucherDetails({...obj})
        } else {
            obj[record.rateOfST].push(record)
            setvoucherDetails({...obj}) 
        }

        console.log(voucherDetails)
        
    }

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

  
                <Button
                    className="submit-button"
                    variant="primary"
                    onClick={AddItemToTable}
                >
                    Add Item
                </Button>

                {
                    Object.keys(voucherDetails).map(key => {
                        
                        return <>
                            <h4>{ `details of ${key}` }</h4>
                            <Table responsive>
                            <tbody>
                               {
                                   voucherDetails[key].map(row => {
                                    return <tr>
                                           <td>{row.quantity}</td>
                                           <td>{row.description}</td>
                                           <td>{row.price}</td>
                                           <td>{row.rateOfST}</td>
                                       </tr>
                                       
                               })
                                }
                            </tbody>
                       </Table>
                       </>
                        
                    })
                }
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