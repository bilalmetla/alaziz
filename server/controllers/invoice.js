const response = require('./response')
const Invoice = require('../usecases/invoice')
const Buyer = require('../usecases/buyer')
const db = require('../db')
const utility = require('../utility')
const constants = require('../constants')

exports.createInvoice = async function (req, res, next) {
    try {
       let data = req.body
       let { buyerId } = req.params
       data.buyerId = buyerId
       let unit = req.session.user
       let record  = await Invoice.create(data, unit, db)
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
       await Invoice.update(id, data, db)
       response.send({id, ...data}, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}



exports.getBuyerInvoicesById = async function (req, res, next) {
    try {
       let { buyerId, status } = req.params;
       let record = await Invoice.getBuyerInvoicesById({buyerId, status}, db)
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
       utility.formatDateDisplay(record, 'date')
       response.send(record, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}

exports.printInvoice = async function (req, res, next) {
    try {
       let {invoiceId, buyerId} = req.params
       let invoices = await invoicesForPrint({invoiceId, buyerId})
       let buyerInfo = await buyerForPrint(buyerId)
       utility.mapToClientResponse(buyerInfo)
       response.send({...buyerInfo, invoice: invoices}, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}
  
const invoicesForPrint = async function ({ invoiceId, buyerId }) {

   let invoiceData = await Invoice.getInvoiceById({invoiceId, buyerId}, db)
   utility.calculateValuesAndTaxes(invoiceData)
   utility.calculateGrandTotals(invoiceData)
   utility.formatDatePrint(invoiceData, 'date')
   return invoiceData
}

const buyerForPrint = async function (buyerId) {
   let buyerInfo = await Buyer.getBuyerById(buyerId, db)
   getCompanyDetails(buyerInfo)

   return buyerInfo
 }

const getCompanyDetails = function (buyerInfo) {
   buyerInfo['companyNTNNumber'] = constants.companyDetails.NTNNumber
   buyerInfo['companySTRNNumber'] = constants.companyDetails.SRNNumber
  
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