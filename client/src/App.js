import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter , Switch, Route } from "react-router-dom";
import {Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from "./routes/Home";
import { About } from "./routes/About";
import {
  BuyerList, BuyerEdit, BuyerCreate,
  BuyerInvoices, InvoiceEdit, InvoiceCreate,InvoiceVoucherDetail,
  InvoicePrint, ReceiptPrint,
  ReportWithGST, ReportWithOutGST, ReportWithPST, ReportWithOutPST,
  UnitList, UnitCreate, UnitEdit,
  Login
} from "./pages";
import styles from './Styles/App.module.css';  

export const App = ({ title }) => (

  
  <HashRouter >
    <div className={styles.wrapper}>
    {/* <Header/> */}
    <Container className={styles.container} >
     
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/about" component={About} />  
            <Route exact path="/login" component={Login} />  
            
          
          <Route exact path="/units" component={UnitList} />
          <Route exact path="/units/create" render={(props) => <UnitCreate {...props} />} />
          <Route exact path="/units/:id" render={(props) => <UnitEdit {...props} />} />
          <Route exact path="/units/:id/buyers" render={(props) => <BuyerList {...props} />} />
          <Route exact path="/units/:id/buyers/create" render={(props) => <BuyerCreate {...props} />} />
          <Route exact path="/units/:id/buyers/:buyerId" render={(props) => <BuyerEdit {...props} />} />
          <Route exact path="/units/:unitId/buyers/:id/invoices" render={(props) => <BuyerInvoices {...props} />} />
          <Route exact path="/units/:unitId/buyers/:id/invoices/create" render={(props) => <InvoiceCreate {...props} />} />
          <Route exact path="/units/:unitId/buyers/:id/invoices/voucher-detail" render={(props) => <InvoiceVoucherDetail {...props} />} />
          <Route exact path="/units/:unitId/buyers/:id/invoices/:invoiceId" render={(props) => <InvoiceEdit {...props} />} />
          <Route exact path="/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print" render={(props) => <InvoicePrint {...props} />} />
          <Route exact path="/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print/receipt" render={(props) => <ReceiptPrint {...props} />} />


          
          <Route exact path="/buyers" component={BuyerList} />
            <Route exact path="/buyers/create" render={(props) => <BuyerCreate {...props} />} />
            <Route exact path="/buyers/:id" render={(props) => <BuyerEdit {...props} />} />
            <Route exact path="/buyers/:id/invoices" render={(props) => <BuyerInvoices {...props} />} />
            <Route exact path="/buyers/:id/invoices/create" render={(props) => <InvoiceCreate {...props} />} />

            <Route exact path="/buyers/:id/invoices/:invoiceId" render={(props) => <InvoiceEdit {...props} />} />
            
            
            
            <Route exact path="/report/with-gst" render={(props) => <ReportWithGST {...props} />} />
            <Route exact path="/report/without-gst" render={(props) => <ReportWithOutGST {...props} />} />
            <Route exact path="/report/with-pst" render={(props) => <ReportWithPST {...props} />} />
            <Route exact path="/report/without-pst" render={(props) => <ReportWithOutPST {...props} />} />
          

            <Route exact path="/buyers/:buyerId/invoices/:invoiceId/print" render={(props) => <InvoicePrint {...props} />} />
          <Route exact path="/buyers/:buyerId/invoices/:invoiceId/print/receipt" render={(props) => <ReceiptPrint {...props} />} />
          
          </Switch>
       
    </Container>

    </div>
    </HashRouter>  
    

 
  
  );

