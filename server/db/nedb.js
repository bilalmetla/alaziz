const utility = require('../utility')
const Datastore = require('nedb');


const users = new Datastore({ filename: __basedir+'/data/users.db', autoload: true });
const units = new Datastore({ filename: __basedir+'/data/units.db', autoload: true });
const buyers = new Datastore({ filename: __basedir+'/data/buyers.db', autoload: true });
const invoices = new Datastore({ filename: __basedir+'/data/invoices.db', autoload: true });
const serialNumbers = new Datastore({ filename: __basedir+'/data/serialNumbers.db', autoload: true });

const db = {
    users,
    units,
    buyers,
    invoices,
    serialNumbers
}

const find = async (collectionName, where) => {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName].find(where)
            .exec((err, docs) => err ? reject(err): resolve(docs))
    })
     
}

const findAndSort = async (collectionName, where, sort) => {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName]
            .find(where)
            .sort(sort)
            .exec((err, docs) => err ? reject(err): resolve(docs))
    })
    
}

const findOne = async function (collectionName, where) {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName].findOne(where, (err, docs) => err ? reject(err): resolve(docs))    
     })
}

const insert = async function (collectionName, record) {

    return new Promise((resolve, reject) => {
        return db[collectionName]
            .insert(record, (err, docs) => err ? reject(err) : resolve(docs))
     })
}

const update = async function (collectionName, where, record) {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName]
            .update(where, { $set: record }, {},
                (err, docs) => err ? reject(err) : resolve(docs))
    })
}


const remove = async function (collectionName, where) {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    
    return new Promise((resolve, reject) => {
        return db[collectionName]
            .remove(where, (err, docs) => err ? reject(err) : resolve(docs))
    })
}



module.exports = {
    find,
    findAndSort,
    findOne,
    insert,
    update,
    remove,
}
