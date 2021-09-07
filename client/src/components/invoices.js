import React, {useEffect} from "react";
import { ResourceContextProvider , List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, ShowButton , TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const InvoiceIcon = BookIcon;

export const InvoiceList = (props) => {
    useEffect(() => {
        console.log('InvoiceList called..', props)
    }, []);
    return (
        <List {...props}>
            <Datagrid >
                <TextField source="id" />
                <TextField source="businessType" />
                <TextField source="invoiceType" />
                <TextField source="date" />
            
                <EditButton basePath="/invoices" />
            </Datagrid>
        </List>
    );
}
export const BuyerInvoiceList = (props) => {
    console.log(props);
   // props.basePath = window.location.pathname
  // props.resource = props.match.url
  // props.syncWithLocation = true
    let myResourse = props.match.url.substring(1,props.match.url.length)
    console.log(myResourse)
    return (
   
            <List {...props}  resource={myResourse} basePath={props.match.url} hasList={true}>
            <Datagrid >
                <TextField source="id" />
                {/* <TextField source="businessType" />
                <TextField source="invoiceType" />
                <TextField source="date" /> */}
                <EditButton basePath="/invoices" />
            </Datagrid>
        </List>
    
        

    );
}

const InvoiceTitle = ({ record }) => {
    return <span>Invoice {record ? `"${record.name}"` : ''}</span>;
};

export const InvoiceEdit = (props) => (
    <Edit title={<InvoiceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="businessType" />
            <TextInput source="invoiceType" options={{ multiline: true }} />
            {/* <TextInput multiline source="body" /> */}
            {/* <DateInput label="Publication date" source="published_at" /> */}
            <TextInput source="date" />
        </SimpleForm>
    </Edit>
);

export const InvoiceCreate = (props) => (
    <Create title="Create a Invoice" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" options={{ multiline: true }} />
            <TextInput source="phone" />
            <TextInput label="representitve Name" source="representitveName" />
            <TextInput source="ntnNumber" />
            <TextInput source="ntnName" />
        </SimpleForm>
    </Create>
);