import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter , Switch, Route } from "react-router-dom";
import {Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import {Header} from "./components/Header";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import {
  BuyerList, BuyerEdit, BuyerCreate,
  BuyerInvoices, InvoiceEdit, InvoiceCreate,
  InvoicePrint, ReceiptPrint,
  ReportWithGST, ReportWithOutGST, ReportWithPST,ReportWithOutPST 
} from "./pages";
import styles from './Styles/App.module.css';  

export const App = ({ title }) => (

  <HashRouter>
    {/* <Header/> */}
    <Container >
      {/* <Row>
        <Header></Header>
      </Row> */}
     
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />  
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
    
  </HashRouter>

 
  
  );

