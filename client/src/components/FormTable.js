import React from 'react';
import {  Form, Button } from "react-bootstrap";
import { Archive } from 'react-bootstrap-icons';
import { FormsHeading } from "./FormsHeading";


export const FormTable = (props) => {

   
    return (
        <>
            {
                    props.newListResource &&
                    <FormsHeading title={`Item Details`} />
                        
                }
                {
                     props.form.map(form => {
                         if (form.isNewList)
                             return <table responsive>
                                 <thead>
                                     {
                                         form.list.map((f, index) => <td key={`heading-${index}`}>{f.label}</td>)
                                     }
                                 </thead>
                                 <tbody>
                                     {
                                         props.formDataItems.map((item, index) => {
                                            return  <tr>{
                                             form.list.map(f => {
                                                 return <td key={`heading-${index}`}>
                                                        <Form.Group className="mb-3">
                                                        {/* <Form.Label>{ f.label}</Form.Label> */}
                                                         <Form.Control
                                                            {...f.props}
                                                             name={f.source}
                                                             value={item[f.source]}
                                                             onChange={(e) => props.handleInputsChangeOfItems(e, index)}
                                                         />
                                                          <Form.Control.Feedback type="invalid" >
                                                            {`Please enter a ${f.label}` }
                                                        </Form.Control.Feedback>
                                                            
                                                        </Form.Group>
                                                        </td>
                                                    })
                                            }
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    style={{ marginTop: '33px' }}
                                                    onClick={(e)=> props.removeformDataItems(e, index)}
                                                >
                                                    <Archive />
                                                </Button>
                                                </tr>
                                     })
                                     }
                             </tbody>
                         </table>
                           
                          
                            
                    })
            }
            {
                props.newListResource &&
                <Button variant="primary" onClick={props.manageformDataItems}>Add Item </Button>

            }


        </>
    )
}