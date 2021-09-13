import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getList } from "./DataProvider";
import styles from '../Styles/Print.module.css'; 
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";

export const Print = (props) => {
    const { setLoading } = useContext(LoaderContext)
    const alert = useAlert()
    let { buyerId, invoiceId } = props.match.params
    const [buyer, setbuyer] = useState({});
    const [invoice, setinvoice] = useState({});
    const [items, setitems] = useState([]);
    const [grandTotals, setgrandTotals] = useState({});
    
    useEffect(async () => {
        
        setLoading(true)
        const fetchedData = await getList(`${props.match.url}`)
        setLoading(false)
        if (!fetchedData || fetchedData.errorMessage) {
            alert.show(fetchedData.errorMessage || 'Error')
            return 
        }

        await setbuyer(fetchedData)
        await setinvoice(fetchedData[props.innerSource])
        await setitems(fetchedData[props.innerSource]['items'])
        await setgrandTotals(fetchedData[props.innerSource]['grandTotals'])
        
    }, []);



    return (
        <div className={styles.invoice_wrapper}>
            <div className={styles.invoice_flex}>
            <div className={styles.image_wrapper}>
                <img src={props.logo} style={{height: '173px'}} />
            </div>
            {
                    props.isTitleATTop && props.InvoiceTitle &&
                    <div className={styles.invoice_title}><h2>{props.InvoiceTitle}</h2></div>
            }
            {
                props.header.map(row => {
                    return <Row> 
                        
                        {
                            row.map((col,index) => {
                               
                                return <Col className={styles.invoice_text_wrapper} style={index%2===0?{display:'flex'}:{display:'flex',justifyContent:'end'}} >
                                    <h6 >{ col.label}</h6>
                                    <p >{ col.innerSource === undefined? buyer[col.source] : col.innerSource === 'invoice'? invoice[col.source]: grandTotals[col.source] }</p>
                                </Col>
                            })
                        }
                       
                   
                    </Row>
                    
                })
            }
            {
                !props.isTitleATTop && props.InvoiceTitle && <div className={styles.invoice_title}><h2>{ props.InvoiceTitle}</h2></div>
            }
            <table responsive className={styles.table_wrapper}>
                    <thead>
                    {
                        props.invoiceItemsHeader &&
                        props.invoiceItemsHeader.map((key, index) => {
                            return <th>
                                <td key={`heading-${index}`}>{ key.label }</td>
                            </th>
                         })
                        }
                </thead>
                <tbody>
                    {
                    props.invoiceItems &&
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
                        props.grandTotals &&
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
            
            </div>
           
        </div>
    )
}