const response = require('./response')
const Invoice = require('../usecases/invoice')
const db = require('../db')
const utility = require('../utility')

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

exports.printInvoice = async function (req, res, next) {
    try {
       let serialNumber = req.params.serialNumber
       let record  = await Invoice.findBySerialNumber(serialNumber, db)
       response.send(record, res)
 
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
       let {id} = req.params
       let record = await Invoice.getInvoiceById(id, db)
       utility.mapToClientResponse(record)
       response.send(record, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}
  