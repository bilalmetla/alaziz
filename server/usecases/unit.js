const validations = require('../validations')

exports.create = async function (record, db) {
    //validate it
    validations.unit(record)
    record.createdDate = new Date()
    //save it
    return new Promise((resolve, reject) => {
       return db.units.insert(record, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

exports.getAll = async function (db) {
    return new Promise((resolve, reject) => {
       return db.units.find({}).sort({createdDate: -1}).exec((err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

exports.update = async function (id, record, db) {
    //validate it
    delete record.createdDate
    delete record.updatedDate
    validations.unit(record)
    record.updatedDate = new Date()
    //save it
    return new Promise((resolve, reject) => {
        return db.units.update({ _id: id }, {$set: record }, {}, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.getById = async function (id, db) {
    return new Promise((resolve, reject) => {
       return db.units.findOne({_id: id}, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};



exports.deleteRecord = async function (id, db) {
   
    return new Promise((resolve, reject) => {
        return db.units.remove({ _id: id }, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.getUnitBuyers = async function({ unitId }, db){
    return new Promise((resolve, reject) => {
        return db.buyers.find({"unitId": unitId}, (err, docs) => err ? reject(err): resolve(docs))    
     })
}

exports.getForLogin = function ({userName, password}, db) {
    return new Promise((resolve, reject) => {
        return db.units.find({ $and: [{ "userName": userName }, {"password": password}] }, (err, docs) => err ? reject(err): resolve(docs))
     })
}