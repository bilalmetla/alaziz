import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { create } from "./DataProvider";


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
        await create(`${props.resource}`, updateData)
        //history.push(`/${props.resource}`)
        history.goBack()
    }
    
    useEffect(async () => {
        // if (props.newListResource) {
        //     setformDataItems([{}])
        // }
        
    }, []);


    return (
        <>
            <Form>
                {
                    props.form.map(f => {
                        if(!f.isNewList)
                        return <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{ f.label}</Form.Label>
                                <Form.Control type={f.type} name={f.source}  value={editFormData[f.source]} onChange={handleInputsChange} />
                                
                            </Form.Group>
                    })
                }

                {
                    props.newListResource &&
                    props.newListResource &&
                    <div className="space-between">
                        <h3>Item Details</h3>
                        <Button variant="primary" onClick={manageformDataItems}>Add Item </Button>
                        </div>
                }
                {
                    
                
                     props.form.map(form => {
                         if (form.isNewList) {
                             return <table responsive>
                                
                                 <tbody>
                                         {
                                         formDataItems.map((item, index) => {
                                           return  <tr>{
                                                 form.list.map((f) => {
                                                     return <td key={`heading-${index}`}>
                                                         <Form.Group className="mb-3" >
                                                             <Form.Label>{f.label}</Form.Label>
                                                             <Form.Control type={f.type} name={f.source} value={item[f.source]} onChange={(e) => handleInputsChangeOfItems(e, index)} />
                                                       
                                                         </Form.Group>
                                                   
                                                     </td>;
                                           
                                                 })
                                             }
                                             </tr>
                                         
                                         })
                                         }
                                        
                                     
                                 </tbody>
                             </table>
                         }
                           
                          
                            
                    })
                }
            

  
                <Button className="submit-button" variant="primary" type="submit" onClick={submitForm}>
                    Submit
                </Button>
        </Form>
        </>
    )
}