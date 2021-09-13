
import React, {useState, useEffect, useContext} from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";
import { post } from "../components/DataProvider";


export const Login = function (props) {
    const { setLoading } = useContext(LoaderContext)
    const alert = useAlert()
    let history = useHistory();
    const [editFormData, setEditFormData] = useState({});
    const [validated, setValidated] = useState(false);

    const handleInputsChange = (event) =>{
        let key = event.target.name
        let value = event.target.value
        let formData = { ...editFormData }
        formData[key] = value
        setEditFormData({...formData})
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
        
        setLoading(true)
        let response = await post(`/login`, updateData)
        setLoading(false)
        if (!response || response.errorMessage) {
            alert.show(response.errorMessage || 'Error')
            return 
        }
     

        sessionStorage.setItem('userId', response.id)
        sessionStorage.setItem('isAdminLogin', response.isAdminLogin || false)
            //sessionStorage.setItem('isUnitLogin', response.isUnitLogin)

            if (response.isUnitLogin) {
                history.push(`/units/${response.id}/buyers`) 
            } if (response.isAdminLogin) {
                history.push(`/units`)
            }
            
        
        
    }
    
    
    return (
        <>
            <Container >
                <Row >
                    <Col md={{ span: 6, offset: 3 }}>
                        <Row >
                        <Col md={{  offset: 3 }}>
                            <img src="logo192.png" style={{height:'200px'}} />
                        </Col>
                        </Row >
                        <Form noValidate validated={validated} onSubmit={submitForm}>
                        <Form.Group className="mb-3" >
                            <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    name="userName"
                                    type="text"
                                    onChange={handleInputsChange}
                                    required
                                />

                            <Form.Control.Feedback type="invalid" >
                                {`Please enter a username` }
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    onChange={handleInputsChange}
                                    required
                                />

                            <Form.Control.Feedback type="invalid" >
                                {`Please enter a password` }
                            </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Button className="submit-button" variant="primary" type="submit" >
                            Login
                        </Button>
                    </Form>
                    </Col>

                </Row>
        </Container>
        </>
    )
}