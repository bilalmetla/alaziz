const validations = require('../validations')
var ObjectId = require('mongodb').ObjectID;



exports.create = async function (record, db) {

    validations.unit(record)

    record.createdDate = new Date()

    return new Promise((resolve, reject) => {
       return db.collection('units').insert(record, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

exports.getAll = async function (db) {
    return new Promise((resolve, reject) => {
        return db.collection('units').find({}).sort({ createdDate: -1 })
        .toArray((err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.update = async function (id, record, db) {

    delete record.id

    validations.unit(record)
    
    record.updatedDate = new Date()

    return new Promise((resolve, reject) => {
        return db.collection('units').update({ _id: ObjectId(id) }, {$set: record }, {}, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.getById = async function (id, db) {
    return new Promise((resolve, reject) => {
       return db.collection('units').findOne({_id: ObjectId(id)}, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};



exports.deleteRecord = async function (id, db) {
   
    return new Promise((resolve, reject) => {
        return db.collection('units').remove({ _id: ObjectId(id) }, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.getUnitBuyers = async function({ unitId }, db){
    return new Promise((resolve, reject) => {
        return db.collection('buyers')
            .find({ "unitId": unitId })
            .toArray((err, docs) => err ? reject(err): resolve(docs))
     })
}

exports.getForLogin = function ({userName, password}, db) {
    return new Promise((resolve, reject) => {
        return db.collection('units')
            .find({ $and: [{ "userName": userName }, { "password": password }] })
        .toArray((err, docs) => err ? reject(err): resolve(docs))
        
     })
}