import React from 'react';
import { Row , Col, Form, Button, } from "react-bootstrap";



export const FormElements = (props) => {


    const FormGroup = (f, eleIndex) => {

        return <Form.Group as={Col} key={`element-${f.props.name}-${eleIndex}`} >
                            
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
            </Form.Group>
    }
    return (
        <>
            {
                props.form.map((f, eleIndex) => {
                     if (!f.isNewList)
                        if(f.props.type !== 'select')
                             return FormGroup(f, eleIndex) 
                                 
                     
                     if(f.props.type === 'select')
                        return <Form.Group className="mb-3" key={`element-${f.props.name}-${eleIndex}`} >
                            
                                <Form.Label>{ f.label}</Form.Label>
                            <Form.Select
                                name={!f.source? f.props.name: f.source}
                                value={props.editFormData[f.source]}
                                onChange={(event)=>props.handleInputsChange(event, f.isCaptalized)} >
                                <option></option>
                                {f.options.map(op => <option key={op.title} value={op.value}>{op.title}</option>)}
                                
                                </Form.Select>
                
                            </Form.Group> 
                    
                   
                    })
                }
        </>
    )
}