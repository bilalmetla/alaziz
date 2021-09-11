import React from 'react';
import {Row, Col,  } from "react-bootstrap";
import { List } from "../components/List";
import styles from '../Styles/BuyerList.module.css';  

export const BuyerList = (props) => {
    const buyersDetails = [
        { label: 'Byuer Name', source: 'name' },
        { label: 'Address', source: 'address' },
        { label: 'Representitve Name', source: 'representitveName' },
        { label: 'Phone', source: 'phone' },
        { label: 'NTN Number', source: 'ntnNumber' },
        { label: 'NTN Name', source: 'ntnName' },
    ]
    const actions = [
        { label: 'Edit', resource:'',   },
        { label: 'Invoices', resource:`${props.match.url}/:id/invoices`,  },
    ]
    return (
        <div  >
            {/* <Row>
                <Col><div className={styles.buyer_text_wrapper}><p className={styles.buyer_text}>Buyers Info</p></div></Col>
            </Row> */}
            <Row>
                <List {...props}
                    resource="buyers"
                    keys={buyersDetails}
                    actions={actions}
                    title={"Buyers Info"}
                />
            </Row>
        
        </div>
    );
}