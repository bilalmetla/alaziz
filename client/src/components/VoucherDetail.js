import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from '../Styles/List.module.css'; 
import { create, get } from "./DataProvider";
import { FormElements } from "./FormElements";
import { FormTable } from "./FormTable";
import { FormsHeading } from "./FormsHeading";
import { useAlert } from 'react-alert'
import { LoaderContext } from "../providers/Loader";
import { Archive } from 'react-bootstrap-icons';
import { calculateValuesAndTaxes, calculateGrandTotals, calculateGrandTotalsOFValueExcelST } from "../utility";


export const VoucherDetail = (props) => {
    const { setLoading } = useContext(LoaderContext)
    const alert = useAlert()
    let history = useHistory();
    const [editFormData, setEditFormData] = useState({});
    const [validated, setValidated] = useState(false);
    const [voucherDetails, setvoucherDetails] = useState({});
    const [grandtotals, setgrandtotals] = useState({});
    const [isEditVoucher, setisEditVoucher] = useState(false);
    const [buyerId, setbuyerId] = useState('');

    let { voucherId } = props.match.params
    useEffect(() => {
        if (voucherId) {
            setisEditVoucher(true)
            getVoucherDetails().then(response => {
                console.log(response)
                if (response && response.length > 0) {
                    let voucher = response[0]
                    setbuyerId(voucher.buyerId)
                    delete voucher.grandTotals;
                    
                    Object.keys(voucher).forEach(key => {
                        if (typeof voucher[key] === 'object'){
                            let obj = {}
                            obj[key] = voucher[key]
                            setvoucherDetails({...obj}) 
                            setgrandtotals(calculateGrandTotalsOFValueExcelST(obj))
                        }
                    })
                   
                    let formData = {
                        title: voucher.title,
                        voucherPrice: voucher.voucherPrice,
                        
                    }
                    setEditFormData({...formData})
                }
                
            })
            
        }
    }, []);
   

   const handleInputsChange = (event, isCaptalized) =>{
       let key = event.target.name
       let value = event.target.value
       let formData = { ...editFormData }
       formData[key] =  captilizeEachWord(value)
       setEditFormData({...formData})
    }

    const captilizeEachWord = value => value.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())

    const handleInputsChangeOfItems = (event, index, key, rowKey) =>{
        console.log(index, key, rowKey)
        let obj = {...voucherDetails}
        let value = event.target.value
        obj[key].items[index][rowKey] = captilizeEachWord(value)
        
        setVoucherData(obj)
    }
    

    const removeformDataItems = (event, index, key) => {
        let obj = {...voucherDetails}
        delete obj[key].items.splice(index, 1)
        if (obj[key].items.length === 0) {
            delete obj[key]
        }
        setVoucherData(obj)
        
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
        let updateData = {
            voucherPrice: editFormData.voucherPrice,
            title: editFormData.title,
            ...voucherDetails,
            grandTotals: grandtotals
        }
        if (buyerId) {
            updateData['buyerId'] = buyerId
        }
     
        setLoading(true)
        let response = await create(`${props.match.url}`, updateData)
        setLoading(false)
        if (!response || response.errorMessage) {
            alert.show(response.errorMessage || 'Error')
            if (response.code === 'ER0401') {
                history.push('/login')
            }
            return 
        }
        if (!response.errorMessage) {
           return history.goBack()
        }
        
    }
    
    const AddItemToTable = () => {
        let record = { ...editFormData }
        if (!record
            || !record.quantity
            || !record.description
            || !record.price
            || !record.rateOfST
            || !record.businessType
            || !record.invoiceType
            || !record.voucherPrice
        ) {
            return alert.show('Fill The correct Info!')
            
             }
        let obj = { ...voucherDetails }
        let key = `${record.rateOfST}%-${record.invoiceType}-${record.businessType}`
        if (!obj[key]) {
            
            obj[key] = {}
            obj[key].businessType = record.businessType;
            obj[key].invoiceType = record.invoiceType;
            obj[key].items = [];
            obj[key].items.push({
                rateOfST:record.rateOfST,
                quantity:record.quantity,
                description:record.description,
                price:record.price,
            })
        } else {
            obj[key].items.push(
                {
                    rateOfST:record.rateOfST,
                    quantity:record.quantity,
                    description:record.description,
                    price:record.price,
                }
            )
        }

        setVoucherData(obj)

        let formData = {
            ...record,
            quantity:'',
            description:'',
            price:'',
            
        }
        setEditFormData({...formData})
        
    }

    function setVoucherData(obj) {
        calculateValuesAndTaxes(obj)
        calculateGrandTotals(obj)
        setvoucherDetails({ ...obj }) 
        setgrandtotals(calculateGrandTotalsOFValueExcelST(obj))
    }

    async function getVoucherDetails(){
        setLoading(true)
        let response = await get(`${props.match.url}`)
        setLoading(false)
        if (!response || response.errorMessage) {
            alert.show(response.errorMessage || 'Error')
            if (response.code === 'ER0401') {
                return history.push('/login')
            }
             
        }
        return response;
    }


    return (
        <>
            <FormsHeading {...props} />
            <div className={styles.create_btn}>                
                <Link to='#' onClick={() => history.goBack()} >Go Back</Link>
            </div>
            <Form noValidate validated={validated} onSubmit={submitForm}>
                <FormElements {...props}
                    handleInputsChange={handleInputsChange}
                    editFormData={editFormData}
                    
                />         

  
                <Button
                    className="submit-button"
                    variant="primary"
                    onClick={AddItemToTable}
                >
                    Add Item
                </Button>

                {
                    Object.keys(voucherDetails).map((key) => {
                        
                        return < div key={ `Details: ${key}` }>
                            <h4>{ `Details: ${key}` }</h4>
                            <Table responsive>
                                <thead>
                                    {
                                        Object.keys(voucherDetails[key].items[0]).map((headKey, index) => {
                                            return <td key={`${headKey}-${index}`}>{headKey }</td>
                                         })
                                    }
                                    
                                </thead>
                            <tbody>
                               {
                                   voucherDetails[key].items.map((row,index) => {
                                       return <tr key={`${key}-heading-${index}`}>
                                           {
                                               props.tableForm.map(ele => {
                                                   return <td key={`${key}-heading-${ele.source}`}>
                                                        <Form.Group className={styles.form_table_elements}>                                                            
                                                            <Form.Control className={styles.form_table_elements}
                                                                {...ele.props}
                                                                name={ele.source}
                                                                value={row[ele.source]}
                                                                 onChange={(e) => handleInputsChangeOfItems(e, index, key, ele.source)}
                                                            />
                                                            <Form.Control.Feedback type="invalid" >
                                                                {`Please enter a ${ele.source}`}
                                                            </Form.Control.Feedback>
                                                            
                                                        </Form.Group>
                                                    </td>;
                                                })
                                           }
                                          
                                          <Button 
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={(e) => removeformDataItems(e, index, key)}
                                                >
                                                    <Archive />
                                                </Button>
                                       </tr>
                                       
                                   })
                                        
                                   
                                    }
                                    
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{ voucherDetails[key].grandTotals.grandTotalValueExcelST }</td>
                                        <td></td>
                                        <td>{voucherDetails[key].grandTotals.grandTotalSTPayable}</td>
                                        <td>{ voucherDetails[key].grandTotals.grandTotalValueOfIncludingST }</td>
                                    </tr>
                                    
                            </tbody>
                       </Table>
                       </div>
                        
                    })
                }
              
                {/* grand totals / voucher details */}
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                {
                    
                    grandtotals && grandtotals.grandTotalValueExcelST > 0 &&
                    <>
                        <h4>{ `Voucher Grand Totals` }</h4>
                        <Table responsive>
                            <thead>
                                <th>{ `grandTotalValueExcelST`}</th>
                                <th>{ `grandTotalSTPayable`}</th>
                                <th>{ `grandTotalValueOfIncludingST`}</th>
                                {/* <th>{ `incomeTaxWithHeld`}</th> */}
                            </thead>
                            <tbody>
                                {/* {
                                    Object.keys(grandtotals).forEach(key => {
                                        
                                    })
                                    grandtotals.map(gt => { */}
                                         <tr>
                                            <td>{ grandtotals.grandTotalValueExcelST }</td>
                                            <td>{ grandtotals.grandTotalSTPayable }</td>
                                            <td>{ grandtotals.grandTotalValueOfIncludingST }</td>
                                            {/* <td>{ grandtotals.incomeTaxWithHeld }</td> */}
                                        </tr>
                                    {/* })
                                } */}
                            </tbody>
                            </Table>
                    </>
                }
                

                {
                    Object.keys(voucherDetails).length > 0 &&
                        <Button className="submit-button" variant="primary" type="submit" >
                        {isEditVoucher === false && 'Create Voucher'}
                        {isEditVoucher === true && 'Update Voucher'}
                        </Button>
                }
                
        </Form>
        </>
    )
}