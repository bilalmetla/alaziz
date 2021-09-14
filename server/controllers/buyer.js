
const response = require('./response')
const Buyer = require('../usecases/buyer')
const db = require('../db')
const utility = require('../utility')

exports.getBuyers = async function (req, res, next) {
   try {

      let records = await Buyer.getAll(db);
      utility.mapToClientResponse(records)
      response.send(records, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};

exports.getBuyerById = async function (req, res, next) {
   try {

      let { buyerId } = req.params
      let records = await Buyer.getBuyerById(buyerId, db);
      utility.mapToClientResponse(records)
      response.send(records, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};


 exports.createBuyer = async function (req, res, next) {
   try {
      let data = req.body;
      let { unitId } = req.params;
      data.unitId = unitId
      let createdBuyer = await Buyer.create(data, db);
      utility.mapToClientResponse(createdBuyer)
      response.send(createdBuyer, res)

   } catch (e) {
      response.exception(e, res)
   }
    
 }
 
exports.updateBuyer = async function (req, res, next) {
   try {
      let data = req.body;
      let { buyerId } = req.params;
      await Buyer.update(buyerId, data, db);
      response.send({buyerId, ...data}, res)

   } catch (e) {
      response.exception(e, res)
   }
    
 }


exports.deleteBuyer = async function (req, res, next) {
   try {
      let { id } = req.params;
      await Buyer.deleteRecord(id, db);
      response.send({ id }, res)

   } catch (e) {
      response.exception(e, res)
   }
    
 }