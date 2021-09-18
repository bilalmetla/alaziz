import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Table, } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { getList } from "./DataProvider";
import styles from '../Styles/List.module.css'; 
import { FormsHeading } from "./FormsHeading";
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";

export const List = (props) => {
    const { setLoading } = useContext(LoaderContext)
    let history = useHistory();
    const alert = useAlert()
    const [tableData, settableData] = useState([]);

    useEffect(async () => {
        //let params = props.match.params
        let resource = ''
        if (props.match) {
            resource = props.match.url
        } else {
            resource = props.resource
        }
        setLoading(true)
        const fetchedData = await getList(resource)
        setLoading(false)
        if (!fetchedData || fetchedData.errorMessage) {
            alert.show(fetchedData.errorMessage || 'Error')
            if (fetchedData.code === 'ER0401') {
                history.push('/login')
            }
            return 
        }
        settableData(mapTableData(fetchedData))


        return () => {
            settableData([])
        }

    }, []);

    const mapTableData = (list) => {
        if (!list || list.errorMessage) {
            return
        }
       
        return list.map((item, index) => {
            return <tr key={`row-${index}`}>{
                 props.keys.map((key, keyIndex) => {
                    return <td key={`key-${keyIndex}`}> {key.label === 'Date'? item[key.source].split('T')[0] :item[key.source]}</td>;
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
            <FormsHeading {...props} />
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
                        {/* <tr>
                            <td>

                            </td>
                        </tr> */}
                    </tbody>
                </Table>

        </div>
    );
} 