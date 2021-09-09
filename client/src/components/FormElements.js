import React from 'react';
import {  Form, Button } from "react-bootstrap";



export const FormElements = (props) => {

    return (
        <>
            {
                props.form.map(f => {
                    if (!f.isNewList)
                        if(f.type !== 'select')
                        return <Form.Group className="mb-3" >
                            
                                <Form.Label>{ f.label}</Form.Label>
                                    <Form.Control type={f.type} name={f.source}  value={f.type ==='date'? new Date(props.editFormData[f.source]) :props.editFormData[f.source] } onChange={props.handleInputsChange} />
                
                            </Form.Group>
                    
                    if(f.type === 'select')
                        return <Form.Group className="mb-3" >
                            
                                <Form.Label>{ f.label}</Form.Label>
                                <Form.Select name={f.source} value={props.editFormData[f.source]} onChange={props.handleInputsChange} >
                                <option></option>
                                {f.options.map(op => <option value={op.value}>{op.title}</option>)}
                                
                                </Form.Select>
                
                            </Form.Group>
                    
                    })
                }
        </>
    )
}