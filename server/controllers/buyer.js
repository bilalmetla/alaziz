
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

      let { id } = req.params
      let records = await Buyer.getBuyerById(id, db);
      //records = { _id: records._id, ...records.buyer }
      utility.mapToClientResponse(records)
      response.send(records, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};


 exports.createBuyer = async function (req, res, next) {
   try {
      let data = req.body;
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
      let id = data.id;
      delete data.id;
      await Buyer.update(id, data, db);

      response.send({id, ...data}, res)

   } catch (e) {
      response.exception(e, res)
   }
    
 }