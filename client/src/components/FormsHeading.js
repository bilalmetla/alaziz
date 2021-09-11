import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import styles from '../Styles/FormsHeading.module.css'; 




export  const FormsHeading = (props) =>{
    return(
        <> 
            <Row>
                <Col><div className={styles.buyer_text_wrapper}><p className={styles.buyer_text}>{props.title}</p></div></Col>
            </Row>
        </>
    );
}