const response = require('./response')
const Invoice = require('../usecases/invoice')
const Buyer = require('../usecases/buyer')
const db = require('../db')
const utility = require('../utility')
const constants = require('../constants')

exports.createInvoice = async function (req, res, next) {
    try {
       let data = req.body
       let record  = await Invoice.create(data, db)
       utility.mapToClientResponse(record)
       response.send(record, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}

exports.updateInvoice = async function (req, res, next) {
    try {
       let data = req.body
       let id = data.id;
      delete data.id;
       await Invoice.update(id, data, db)
       response.send({id, ...data}, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}



exports.getBuyerInvoicesById = async function (req, res, next) {
    try {
       let { buyerId } = req.params;
       let record = await Invoice.getBuyerInvoicesById(buyerId, db)
       utility.mapToClientResponse(record)
       response.send(record, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}

exports.getInvoices = async function (req, res, next) {
    try {
       
       let record = await Invoice.getInvoiceAll(db)
       utility.mapToClientResponse(record)
       response.send(record, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}

exports.getInvoiceById = async function (req, res, next) {
    try {
       let {invoiceId, buyerId} = req.params
       let record = await Invoice.getInvoiceById({invoiceId, buyerId}, db)
       utility.mapToClientResponse(record)
       record.date = utility.formatDateDisplay(record.date)
       response.send(record, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}

exports.printInvoice = async function (req, res, next) {
    try {
       let {invoiceId, buyerId} = req.params
       let invoiceData = await Invoice.getInvoiceById({invoiceId, buyerId}, db)
       utility.mapToClientResponse(invoiceData)
       let buyerInfo = await Buyer.getBuyerById(buyerId, db)
       utility.mapToClientResponse(buyerInfo)
       buyerInfo['companyNTNNumber'] = constants.companyDetails.NTNNumber
       buyerInfo['companySTRNNumber'] = constants.companyDetails.SRNNumber
       let updatedItems = utility.calculateValuesAndTaxes(invoiceData.items)
       invoiceData.items = updatedItems
       invoiceData.date = utility.formatDatePrint(invoiceData.date)
      
       utility.calculateGrandTotals(invoiceData)
       response.send({...buyerInfo, invoice:invoiceData}, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}
  

exports.deleteInvoice = async function (req, res, next) {
   try {
      let { buyerId, invoiceId } = req.params;
      await Invoice.deleteRecord({ buyerId, invoiceId }, db);
      response.send({ buyerId, invoiceId }, res)

   } catch (e) {
      response.exception(e, res)
   }
    
 }