import React from 'react';
import {  Form, Button } from "react-bootstrap";



export const FormTable = (props) => {

    return (
        <>
            {
                    props.newListResource &&
                    <div className="space-between">
                        <h3>Item Details</h3>
                        <Button variant="primary" onClick={props.manageformDataItems}>Add Item </Button>
                    </div>
                        
                }
                {
                     props.form.map(form => {
                         if (form.isNewList)
                             return <table responsive>
                                 <tbody>
                                     {
                                         props.formDataItems.map((item, index) => {
                                            return  <tr>{
                                             form.list.map(f => {
                                                 return <td key={`heading-${index}`}>
                                                        <Form.Group className="mb-3">
                                                        <Form.Label>{ f.label}</Form.Label>
                                                            <Form.Control type={f.type} name={f.source}  value={item[f.source]} onChange={(e)=> props.handleInputsChangeOfItems(e, index)} />
                                                            
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

        </>
    )
}