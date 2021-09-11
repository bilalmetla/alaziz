import React, {useEffect, useState} from 'react';
import { Row, Col, Table, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getList } from "./DataProvider";
import styles from '../Styles/List.module.css'; 

export const List = (props) => {

    const [tableData, settableData] = useState([]);

    useEffect(async () => {
        //let params = props.match.params
        let resource = ''
        if (props.match) {
            resource = props.match.url
        } else {
            resource = props.resource
        }
        const fetchedData = await getList(resource)
        //setbuyersList(fetchedData)
        settableData(mapTableData(fetchedData))


        return () => {
            settableData([])
        }

    }, []);

    const mapTableData = (list) => {
        return list.map((item, index) => {
            return <tr key={`row-${index}`}>{
                 props.keys.map((key, keyIndex) => {
                    return <td key={`key-${keyIndex}`}> {item[key.source]}</td>;
                 })

            }
            {
                    props.actions.map((action, acIndex) => {
                        let resource = action.resource
                        if (resource) {
                            Object.keys(item).forEach(key => {
                                resource = resource.replace(`:${key}`, `${item[key]}`);
                            })
                        } else {
                            resource = `${props.resource}/${item['id']}`
                        }
                            return<td key={`action-${acIndex}`}> <Link to={`${resource}`}>{action.label }</Link> </td>
                        })
            }
            </tr>;
        })

    }

    return (
        <div className={styles.list_wrapper}>
            <Row>
                <Col><div className={styles.buyer_text_wrapper}><p className={styles.buyer_text}>{props.title}</p></div></Col>
            </Row>
            <div className={styles.create_btn}><Link to={`${props.match.url}/create`} >Create</Link></div>
                <Table responsive>
                <thead>
                    {
                        props.keys.map((key, index) => {
                            return <th>
                                <td key={`heading-${index}`}>{ key.label }</td>
                            </th>
                         })
                    }


                </thead>
                <tbody>
                    {

                        tableData  
                    }
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </Table>

        </div>
    );
} 