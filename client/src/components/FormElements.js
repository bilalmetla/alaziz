import React from 'react';
import {  Form, Button } from "react-bootstrap";



export const FormElements = (props) => {

    return (
        <>
            {
                    props.form.map(f => {
                        if(!f.isNewList)
                            return <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{ f.label}</Form.Label>
                                    <Form.Control type={f.type} name={f.source}  value={props.editFormData[f.source]} onChange={props.handleInputsChange} />
                                    
                                </Form.Group>
                    })
                }
        </>
    )
}