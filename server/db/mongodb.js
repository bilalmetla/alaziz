const utility = require('../utility')
const config = require('../conf')
const { MongoClient } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

let db = ''


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = config.mongodbConfig.url;
    const mongoClient = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        let client = await mongoClient.connect();
        console.log('mongodb is connected.')
        db = client.db(config.mongodbConfig.database)        
 
    } catch (e) {
        console.error(e);
    }
   
}

const find = async (collectionName, where) => {
    search_ID(where)
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db.collection(collectionName).find(where)
            .toArray((err, docs) => err ? reject(err): resolve(docs))
    })
     
}

const findAndSort = async (collectionName, where, sort) => {
    search_ID(where)
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db.collection(collectionName)
            .find(where)
            .sort(sort)
            .toArray((err, docs) => err ? reject(err): resolve(docs))
    })
    
}

const findOne = async function (collectionName, where) {
    search_ID(where)
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db.collection(collectionName).findOne(where, (err, docs) => err ? reject(err): resolve(docs))    
     })
}

const insert = async function (collectionName, record) {

    return new Promise((resolve, reject) => {
        return db.collection(collectionName)
            .insert(record, (err, docs) => err ? reject(err) : resolve(docs))
     })
}

const update = async function (collectionName, where, record) {
    search_ID(where)
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db.collection(collectionName)
            .update(where, { $set: record }, {},
                (err, docs) => err ? reject(err) : resolve(docs))
    })
}


const remove = async function (collectionName, where) {
    search_ID(where)
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    
    return new Promise((resolve, reject) => {
        return db.collection(collectionName)
            .deleteOne(where, (err, docs) => err ? reject(err) : resolve(docs))
    })
}

function search_ID(obj) {
    let query = '_id'
    for (let key in obj) {
        let value = obj[key];

        if (Array.isArray(value)) {
            value.forEach(element=> search_ID(element, query))
        }
        else if (typeof value === 'object') {
            search_ID(value, query);
        }

        if (key === query) {
            utility.logMessage('property=' + key + ' value=' + value);
            obj[key] = ObjectID(value)
        }

    }
}

module.exports = {
    connect: main,
    find,
    findAndSort,
    findOne,
    insert,
    update,
    remove,
}


