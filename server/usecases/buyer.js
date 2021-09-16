const validations = require('../validations')
var ObjectId = require('mongodb').ObjectID;


exports.create = async function (buyer, db) {

    validations.buyer(buyer)
    buyer.createdDate = new Date()
    return new Promise((resolve, reject) => {
       return db.collection('buyers').insert(buyer, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

exports.getAll = async function (db) {
    return new Promise((resolve, reject) => {
        return db.collection('buyers').find({}).sort({ createdDate: -1 })
        .toArray((err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.getBuyerById = async function (id, db) {
    return new Promise((resolve, reject) => {
       return db.collection('buyers').findOne({_id: ObjectId(id)}, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};


exports.update = async function (id, buyer, db) {
  
    delete buyer.id;
    validations.buyer(buyer)
    
    buyer.updatedDate = new Date()
    

    return new Promise((resolve, reject) => {
        return db.collection('buyers').update({ _id: ObjectId(id) }, {$set: buyer }, {}, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.deleteRecord = async function (id, db) {
   
    return new Promise((resolve, reject) => {
        return db.collection('buyers').remove({ _id: ObjectId(id) }, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};
