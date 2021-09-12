const response = require('./response')
const Unit = require('../usecases/unit')
const db = require('../db')
const utility = require('../utility')

exports.getAll = async function (req, res, next) {
   try {

      let records = await Unit.getAll(db);
      utility.mapToClientResponse(records)
      response.send(records, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};

exports.create = async function (req, res, next) {
    try {
       let data = req.body;
       let record = await Unit.create(data, db);
       
       utility.mapToClientResponse(record)
       response.send(record, res)
 
    } catch (e) {
       response.exception(e, res)
    }
     
  }

  exports.update = async function (req, res, next) {
   try {
      let data = req.body;
      let id = data.id;
      delete data.id;
      await Unit.update(id, data, db);

      response.send({id, ...data}, res)

   } catch (e) {
      response.exception(e, res)
   }
    
}
 
exports.getById = async function (req, res, next) {
   try {

      let { id } = req.params
      let records = await Unit.getById(id, db);
      utility.mapToClientResponse(records)
      response.send(records, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};

exports.remove = async function (req, res, next) {
   try {
      let { id } = req.params;
      await Unit.deleteRecord(id, db);

      response.send({ id }, res)

   } catch (e) {
      response.exception(e, res)
   }
    
}
 


exports.getBuyersOFUnit = async function (req, res, next) {
   try {

      let {id} = req.params
      let records = await Unit.getUnitBuyers({unitId: id}, db);
      utility.mapToClientResponse(records)
      response.send(records, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};