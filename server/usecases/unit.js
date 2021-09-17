const validations = require('../validations')

const UNITS = 'units'
const BUYERS = 'buyers'

exports.create = async function (record, db) {

    validations.unit(record)
    record.createdDate = new Date()

    return await db.insert(UNITS, record)
    
};

exports.getAll = async function (db) {
    let where = {}
    let sort = { createdDate: -1 }
    return await db.findAndSort(UNITS, where, sort)
};

exports.update = async function (id, record, db) {

    delete record.id

    validations.unit(record)
    
    record.updatedDate = new Date()
    let where = { _id: id }
    return await db.update(UNITS, where, record)    
};

exports.getById = async function (id, db) {
    let where = {_id: id}
    return db.findOne(UNITS, where)      
};



exports.deleteRecord = async function (id, db) {
    let where = { _id: id }
    return await db.remove(UNITS, where)    
};

exports.getUnitBuyers = async function ({ unitId }, db) {
    
    let where = { "unitId": unitId }
    return await db.find(BUYERS, where)
}

exports.getForLogin = async function ({userName, password}, db) {
 
    let where = { $and: [{ "userName": userName }, { "password": password }] }
    return await db.find(UNITS, where)
}