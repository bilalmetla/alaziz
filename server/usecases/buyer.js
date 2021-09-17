const validations = require('../validations')

const BUYERS = 'buyers'

exports.create = async function (buyer, db) {

    validations.buyer(buyer)
    buyer.createdDate = new Date()

    return await db.insert(BUYERS, buyer)
    
};

exports.getAll = async function (db) {
    let where = {}
    let sort = { createdDate: -1 }
    return await db.findAndSort(BUYERS, where, sort)
};

exports.getBuyerById = async function (id, db) {
    let where = {_id: id}
    return db.findOne(BUYERS, where)    
};


exports.update = async function (id, buyer, db) {
  
    delete buyer.id;
    validations.buyer(buyer)
    
    buyer.updatedDate = new Date()
    let where = { _id: id }
    return await db.update(BUYERS, where, buyer)  
};

exports.deleteRecord = async function (id, db) {
    let where = { _id: id }
    return await db.remove(BUYERS, where)    
};
