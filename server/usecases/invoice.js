const validations = require('../validations')
const serialNumbers = require('./serialNumbers')
const utility = require('../utility')
var ObjectId = require('mongodb').ObjectID;


exports.create = async function (newInvoice, db) {

    validations.invoice(newInvoice)

    await serialNumbers.getSerialNumber(db)

    attachInvoiceSerials(newInvoice)
    newInvoice.createdDate = new Date()
    newInvoice.date = new Date(newInvoice.date)
   
    return new Promise((resolve, reject) => {
       return db.collection('invoices').insert(newInvoice, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

const attachInvoiceSerials = (invoice) => {
    invoice.serialNumber = process.serialNumber;
    invoice.bookNumber = process.bookNumber;
}

exports.update = async function (id, invoice, db) {

    delete invoice.id
    
    validations.invoice(invoice)
   
    invoice.updatedDate = new Date()
    invoice.date = new Date(invoice.date)

    return new Promise((resolve, reject) => {
        return db.collection('invoices').update({ _id: ObjectId(id) }, { $set: invoice }, {}, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};


exports.getBuyerInvoicesById = async function (buyerId, db) {
    return new Promise((resolve, reject) => {
        return db.collection('invoices').find({ "buyerId": buyerId }).sort({ serialNumber: -1 })
        .toArray((err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.getInvoiceAll = async function ( db) {
    return new Promise((resolve, reject) => {
        return db.collection('invoices').find({})
                            .toArray((err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.getInvoiceById = async function ({invoiceId, buyerId}, db) {
    return new Promise((resolve, reject) => {
        return db.collection('invoices').findOne({ $and:[{ _id: ObjectId(invoiceId) }, {buyerId: buyerId } ] },(err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.findInvoiceByNumber = async function ({serialNumber, buyerId}, db) {
    return new Promise((resolve, reject) => {
        return db.collection('invoices').findOne({ $and: [{ serialNumber: parseInt(serialNumber) }, { buyerId }] }, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.deleteRecord = async function ({ buyerId, invoiceId }, db) {
   
    return new Promise((resolve, reject) => {
        return db.collection('invoices').remove({ $and: [{ _id: ObjectId(invoiceId) }, {buyerId: buyerId}] }, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.findByDates = async function ({ startDate, endDate, businessType, isGST }, db) {
    let gstCondition = ''
    if (isGST) {
       gstCondition = {$ne:'0'}
    }
    if (!isGST) {
        gstCondition = '0'
    }
    let where = { $and: [
            {
                "date": {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
            },
            {
                businessType: businessType
            },
            {
                "items.rateOfST": gstCondition
            }
    ]}
    let invoices = await getInvoicesByDates(where, db)
    let mergedInvoiceAndBuyer = await combineBuyerInvoices(invoices, db)
    
    return mergedInvoiceAndBuyer
    
};

const getInvoicesByDates = async function (where, db) {
    return new Promise((resolve, reject) => {
        return db.collection('invoices').find(where)
            .toArray((err, invoices) => {
                if (err) {
                    return reject(err);
                }
                if (!invoices || invoices.length === 0) {
                   return reject(new Error('No Invoice Found'))
                }
                return resolve(invoices)                
            })
    })
}


const combineBuyerInvoices = async function (invoices, db) {
    return new Promise((resolve, reject) => {
        const mergedInvoiceAndBuyer = []
        invoices.forEach(function (inv, index) {
            
           return db.collection('buyers').findOne({ _id: ObjectId(inv.buyerId) }, function (err, buyer) {
                if (err) {
                    return reject(err);
               }
                utility.calculateValuesAndTaxes(inv)
                mergedInvoiceAndBuyer[index] = {...buyer, invoice: inv}
                if (index === invoices.length-1) {
                    return resolve(mergedInvoiceAndBuyer);    
                }
                
    
            });
        });
     })
    
}