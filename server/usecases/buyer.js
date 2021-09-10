const validations = require('../validations')

exports.create = async function (buyer, db) {
    //validate it
    validations.buyer(buyer)
    buyer.createdDate = new Date()
    //save it
    return new Promise((resolve, reject) => {
       return db.buyers.insert(buyer, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

exports.getAll = async function (db) {
    return new Promise((resolve, reject) => {
       return db.buyers.find({}).sort({createdDate: -1}).exec((err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

exports.getBuyerById = async function (id, db) {
    return new Promise((resolve, reject) => {
       return db.buyers.findOne({_id: id}, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};


exports.update = async function (id, buyer, db) {
    //validate it
    delete buyer.createdDate
    delete buyer.updatedDate
    validations.buyer(buyer)
    buyer.updatedDate = new Date()
    //save it
    return new Promise((resolve, reject) => {
        return db.buyers.update({ _id: id }, {$set: buyer }, {}, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.deleteRecord = async function (id, db) {
   
    return new Promise((resolve, reject) => {
        return db.buyers.remove({ _id: id }, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};