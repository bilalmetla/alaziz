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
       let invoicesRecords = await Invoice.findByDates({ startDate, endDate, businessType }, db);
       
       utility.mapToClientResponse(invoicesRecords)
       
        response.send(invoicesRecords, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
  }