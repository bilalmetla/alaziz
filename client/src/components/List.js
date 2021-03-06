import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Table, } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { getList } from "./DataProvider";
import styles from '../Styles/Create.module.css'; 
import { FormsHeading } from "./FormsHeading";
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";
import {  MDBDataTable  } from 'mdbreact';

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
        settableData(mergeActionsToData(fetchedData))


        return () => {
            settableData([])
        }

    }, []);

    const DatatablePage = (result) => {
        const data = {
            columns: [...props.keys, {label:'Actions', field:'actions'} ],
            rows:  tableData
        }

        return (
            <MDBDataTable responsive
              striped
                bordered
                hover
              big
              data={data}
            />
          );
    }
    const mergeActionsToData = list => {
        if (!list || list.errorMessage) {
            return
        }
        return list.map(item => {
            
           let buttons =  props.actions.map(ac => {
                let resource = ac.resource
                Object.keys(item).forEach(key => {
                    resource = resource.replace(`:${key}`, `${item[key]}`);
                })
               return <Link key={ `key-${resource}` } to={`${resource}`} style={{marginRight:'5px'}}>{ac.label }</Link>
           })
            
            return {
                ...item,
                actions: buttons
            }
        })
    }

    
    return (
        <div className={styles.list_wrapper}>
            <FormsHeading {...props} />
            <div className={styles.create_btn}>   
                {/* {
                    props.hideGoBack ||
                    <Link to='#' onClick={() => history.goBack()} >Go Back</Link>
                }    
                
                <Link to={`${props.match.url}/create`} >Create</Link> */}
                {
                    props.topActionButtons &&
                    props.topActionButtons.map(btn => {
                        return <Link
                            to={`${props.match.url}${btn.to}`}
                            
                        >{btn.label}</Link>
                    })
                }
            </div>
            
            {
                DatatablePage() 
            }
        </div>
    );
} 