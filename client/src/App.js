import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter , Switch, Route } from "react-router-dom";
import {Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import {
  BuyerList, BuyerEdit, BuyerCreate,
  BuyerInvoices, InvoiceEdit, InvoiceCreate
} from "./pages";

export const App = ({ title }) => (
  
  <HashRouter >
    {/* <Header/> */}
    <Container >
      <Row>
        <Col lg={4}>
          <NavBar />
        </Col>
        <Col lg={8}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />  
            <Route exact path="/buyers" component={BuyerList} />
            <Route exact path="/buyers/create" render={(props) => <BuyerCreate {...props} />} />
            <Route exact path="/buyers/:id" render={(props) => <BuyerEdit {...props} />} />
            <Route exact path="/buyerInvoices/:buyerId" render={(props) => <BuyerInvoices {...props} />} />
            <Route exact path="/buyerInvoices/invoices/:id" render={(props) => <InvoiceEdit {...props} />} />
            <Route exact path="/buyerInvoices/:id/create" render={(props) => <InvoiceCreate {...props} />} />
          
          </Switch>
        </Col>
      </Row>
    </Container>
      
     
    </HashRouter>  

 
  
  );


// export const About = (props) => (
//     <App title="About"/>
// );

// export  const Settings = (props) => (
//     <App title="Settings"/>
// );

// export const Home = (props) => (
//     <App title="Home"/>
// );