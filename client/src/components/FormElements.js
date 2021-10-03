import React from 'react';
import { Row , Col, Form, Button } from "react-bootstrap";



export const FormElements = (props) => {

    return (
        <>
            {
                props.form.map(f => {
                    if (!f.isNewList)
                        if(f.props.type !== 'select')
                        return <Row className="mb-3"><Form.Group  >
                            
                                <Form.Label>{ f.label}</Form.Label>
                            <Form.Control
                                {...f.props}
                                 name={!f.source? f.props.name: f.source}
                                value={f.props.type === 'date' ? props.editFormData[f.source] : props.editFormData[f.source]}
                                onChange={(event)=>props.handleInputsChange(event, f.isCaptalized)}
                                
                                />
                            <Form.Control.Feedback type="invalid" >
                                {`Please enter a ${f.label}` }
                            </Form.Control.Feedback>
                            </Form.Group></Row>
                     
                    if(f.props.type === 'select')
                        return <Form.Group className="mb-3" >
                            
                                <Form.Label>{ f.label}</Form.Label>
                            <Form.Select
                                name={!f.source? f.props.name: f.source}
                                value={props.editFormData[f.source]}
                                onChange={(event)=>props.handleInputsChange(event, f.isCaptalized)} >
                                <option></option>
                                {f.options.map(op => <option value={op.value}>{op.title}</option>)}
                                
                                </Form.Select>
                
                            </Form.Group>
                    
                    })
                }
        </>
    )
}