import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getOne, update } from "./DataProvider";



export const Edit = (props) => {
    
    let { id } = props.match.params
    const [editFormData, setEditFormData] = useState({});
    const [formDataItems, setformDataItems] = useState([]);

   const handleInputsChange = (event) =>{
       let key = event.target.name
       let value = event.target.value
       let formData = { ...formDataItems }
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
        const fetchedData = await getOne(`${props.resource}/${id}`)
        await setEditFormData(fetchedData)
        if (fetchedData[props.newListResource]) {
            await setformDataItems(fetchedData[props.newListResource])
        }
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
                    <div className="space-between">
                        <h3>Item Details</h3>
                        <Button variant="primary" onClick={manageformDataItems}>Add Item </Button>
                    </div>
                        
                }
                {
                     props.form.map(form => {
                         if (form.isNewList)
                             return <table responsive>
                                 <tbody>
                                     {
                                         formDataItems.map((item, index) => {
                                            return  <tr>{
                                             form.list.map(f => {
                                                 return <td key={`heading-${index}`}>
                                                        <Form.Group className="mb-3">
                                                        <Form.Label>{ f.label}</Form.Label>
                                                            <Form.Control type={f.type} name={f.source}  value={item[f.source]} onChange={(e)=>handleInputsChangeOfItems(e, index)} />
                                                            
                                                        </Form.Group>
                                                        </td>
                                                    })
                                                }
                                                </tr>
                                     })
                                     }
                             </tbody>
                         </table>
                           
                          
                            
                    })
                }

  
            <Button className="submit-button" variant="primary" type="submit" onClick={submitForm}>
                Submit
            </Button>
        </Form>
        </>
    )
}