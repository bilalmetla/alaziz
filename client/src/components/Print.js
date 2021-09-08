import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getList } from "./DataProvider";



export const Print = (props) => {
      let { buyerId, invoiceId } = props.match.params
    const [buyer, setbuyer] = useState({});
    const [invoice, setinvoice] = useState({});
    const [items, setitems] = useState([]);
    const [grandTotals, setgrandTotals] = useState({});
    
    useEffect(async () => {
        
        const fetchedData = await getList(`${props.match.url}`)
        await setbuyer(fetchedData)
        await setinvoice(fetchedData[props.innerSource])
        await setitems(fetchedData[props.innerSource]['items'])
        await setgrandTotals(fetchedData[props.innerSource]['grandTotals'])
        
    }, []);


    return (
        <>
            <div>
                <img src={props.logo} style={{height: '173px'}} />
            </div>
            {
                props.header.map(row => {
                    return <Row>
                        {
                            row.map(col => {
                               
                                return <Col style={{display:'flex'}}>
                                    <p>{ col.label}</p>
                                    <span>{ col.innerSource === undefined? buyer[col.source] : invoice[col.source]}</span>
                                </Col>
                            })
                        }
                    </Row>
                    
                })
            }
            {
                props.InvoiceTitle && <h2>{ props.InvoiceTitle}</h2>
            }
            <table responsive>
                    <thead>
                    {
                        props.invoiceItems.map((key, index) => {
                            return <th>
                                <td key={`heading-${index}`}>{ key.label }</td>
                            </th>
                         })
                        }
                </thead>
                <tbody>
                    {
                    
                        items.map(item => {
                            return <tr>{
                                props.invoiceItems.map(il => {
                                    return <td>
                                        {item[il.source]}
                                        </td>
                                       })
                            }</tr>
                                                        
                        })
                    }
                    <tr>{
                        props.grandTotals.map(t => {
                            return <td>
                                {t.value && t.value}
                                {t.source && grandTotals[t.source]}
                            </td>;
                        })
                    }
                    </tr>
                </tbody>
                </table>
            

           
        </>
    )
}