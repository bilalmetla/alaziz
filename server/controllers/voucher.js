
const response = require('./response')
const Voucher = require('../usecases/voucher')
const db = require('../db')
const utility = require('../utility');


exports.create = async function (req, res, next) {
    try {
       let data = req.body;
       let { unitId, buyerId } = req.params;
       data.unitId = unitId
       data.buyerId = buyerId
       let created = await Voucher.create(data, db);
       utility.mapToClientResponse(created)
       response.send(created, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
  }

exports.getByUnits = async function (req, res, next) {
    try {
       let { unitId } = req.params;
       let records = await Voucher.getByUnits({ unitId }, db);
       utility.mapToClientResponse(records)
       response.send(records, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
  }

exports.getById = async function (req, res, next) {
    try {
       
       let { unitId, voucherId } = req.params;
       let records = await Voucher.getById({ unitId, voucherId }, db);
       utility.mapToClientResponse(records)
       response.send(records, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
}
  
exports.update = async function (req, res, next) {
   try {
      let data = req.body;
      let { unitId, voucherId } = req.params;
      data.unitId = unitId;
      let created = await Voucher.update({ unitId, voucherId }, data, db);
      utility.mapToClientResponse(created)
      response.send(created, res)

   } catch (e) {
      response.exception(e, res)
   }
    
 }