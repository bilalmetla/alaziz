const response = require('./response')
const Invoice = require('../usecases/invoice')
const Buyer = require('../usecases/buyer')
const db = require('../db')
const utility = require('../utility')
const constants = require('../constants');




exports.withGST = async function (req, res, next) {
    try {
        let { startDate, endDate } = req.body;
        let businessType = constants.businessTypes.SUPPLIES.toString()
        let isGST = true;
        let invoicesRecords = await Invoice.findByDates(
            {
                startDate, endDate, businessType, isGST
            },
            db);
       
       utility.mapToClientResponse(invoicesRecords)
       
        response.send(invoicesRecords, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
  }

exports.withOutGST = async function (req, res, next) {
    try {
        let { startDate, endDate } = req.body;
        let businessType = constants.businessTypes.SUPPLIES.toString()
        let isGST = false;
        let invoicesRecords = await Invoice.findByDates(
            {
                startDate, endDate, businessType, isGST
            },
            db);
       
       utility.mapToClientResponse(invoicesRecords)
       
        response.send(invoicesRecords, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}
  
exports.withPST = async function (req, res, next) {
    try {
        let { startDate, endDate } = req.body;
        let businessType = constants.businessTypes.SERVICES.toString()
        let isGST = true;
        let invoicesRecords = await Invoice.findByDates(
            {
                startDate, endDate, businessType, isGST
            },
            db);
       
       utility.mapToClientResponse(invoicesRecords)
       
        response.send(invoicesRecords, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}
  
exports.withOutPST = async function (req, res, next) {
    try {
        let { startDate, endDate } = req.body;
        let businessType = constants.businessTypes.SERVICES.toString()
        let isGST = false;
        let invoicesRecords = await Invoice.findByDates(
            {
                startDate, endDate, businessType, isGST
            },
            db);
       
       utility.mapToClientResponse(invoicesRecords)
       
        response.send(invoicesRecords, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
  }