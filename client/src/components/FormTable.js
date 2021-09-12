import React from 'react';
import {  Form, Button } from "react-bootstrap";
import styles from '../Styles/FormTable.module.css'; 
import { Archive } from 'react-bootstrap-icons';
import { FormsHeading } from "./FormsHeading";


export const FormTable = (props) => {

   
    return (
        <>{props.newListResource &&
            <div className={styles.form_table_wrapper}>
                {
                    props.newListResource &&
                    <FormsHeading title={`Item Details`} />
                        
                }
                {
                    props.form.map(form => {
                        if (form.isNewList)
                            return <table responsive className={styles.table_scroll}>
                                <thead>
                                    {
                                        form.list.map((f, index) => <td key={`heading-${index}`}>{f.label}</td>)
                                    }
                                </thead>
                                <tbody>
                                    {
                                        props.formDataItems.map((item, index) => {
                                            return <tr>{
                                                form.list.map(f => {
                                                    return <td key={`heading-${index}`}>
                                                        <Form.Group >
                                                            {/* <Form.Label>{ f.label}</Form.Label> */}
                                                            <Form.Control
                                                                {...f.props}
                                                                name={f.source}
                                                                value={item[f.source]}
                                                                onChange={(e) => props.handleInputsChangeOfItems(e, index)}
                                                            />
                                                            <Form.Control.Feedback type="invalid" >
                                                                {`Please enter a ${f.label}`}
                                                            </Form.Control.Feedback>
                                                            
                                                        </Form.Group>
                                                    </td>;
                                                })
                                            }
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={(e) => props.removeformDataItems(e, index)}
                                                >
                                                    <Archive />
                                                </Button>
                                                
                                            </tr>;
                                        })
                                    }
                                </tbody>
                            </table>;
                           
                          
                            
                    })
                }
                {
                    props.newListResource &&
                    <Button className={styles.add_items_btn} variant="primary" onClick={props.manageformDataItems}>Add Item </Button>

                }


            </div>
        }</>
    )
}