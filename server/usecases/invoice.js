const validations = require('../validations')
const serialNumbers = require('./serialNumbers')
const utility = require('../utility')


exports.create = async function (newInvoice, db) {

    validations.invoice(newInvoice)

    await serialNumbers.getSerialNumber(db)

    attachInvoiceSerials(newInvoice)
    newInvoice.createdDate = new Date()
    newInvoice.date = new Date(newInvoice.date)
   
    return new Promise((resolve, reject) => {
       return db.invoices.insert(newInvoice, (err, docs) => err ? reject(err): resolve(docs))    
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
        return db.invoices.update({ _id: id }, { $set: invoice }, {}, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.findBySerialNumber = async function (serialNumber, db) {
    return new Promise((resolve, reject) => {
        return db.invoices.find({ "serialNumber": parseInt(serialNumber) }, (err, invoice) => {
            if (err)
                return reject(err);
            
            if (!invoice || invoice.length === 0) {
               return reject( new Error(`Invoice is not find by serialNumber: ${serialNumber}`))
            }
           
            return db.buyers.find({ _id: invoice[0].buyerId }, (err, buyer) => {
                    if (err)
                    return reject(err);
                
                    if (!buyer || buyer.length === 0) {
                        return reject( new Error(`buyer is not find`))
                     }
                    buyer[0].invoices = invoice
                    return resolve(buyer[0])
            })
            
            
       }) 
    })
    
};

exports.getBuyerInvoicesById = async function (buyerId, db) {
    return new Promise((resolve, reject) => {
        return db.invoices.find({ "buyerId": buyerId }).sort({ serialNumber: -1 }).exec((err, docs) => err ? reject(err): resolve(docs)) 
    })
    
};

exports.getInvoiceAll = async function ( db) {
    return new Promise((resolve, reject) => {
        return db.invoices.find({},(err, docs) => err ? reject(err): resolve(docs)) 
    })
    
};

exports.getInvoiceById = async function ({invoiceId, buyerId}, db) {
    return new Promise((resolve, reject) => {
        return db.invoices.findOne({ $and:[{ _id: invoiceId }, {buyerId: buyerId} ] },(err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.findInvoiceByNumber = async function ({serialNumber, buyerId}, db) {
    return new Promise((resolve, reject) => {
        return db.invoices.findOne({ $and: [{ serialNumber: parseInt(serialNumber) }, { buyerId }] }, (err, docs) => err ? reject(err): resolve(docs))
    })
    
};

exports.deleteRecord = async function ({ buyerId, invoiceId }, db) {
   
    return new Promise((resolve, reject) => {
        return db.invoices.remove({ $and: [{ _id: invoiceId }, {buyerId: buyerId}] }, (err, docs) => err ? reject(err): resolve(docs))
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
    let where = {
        $and: [
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
    ]
    }
    let invoices = await getInvoicesByDates(where, db)
    let mergedInvoiceAndBuyer = await combineBuyerInvoices(invoices, db)
    
    return mergedInvoiceAndBuyer
    
};

const getInvoicesByDates = async function (where, db) {
    return new Promise((resolve, reject) => {
        return db.invoices.find(where,
            (err, invoices) => {
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
            
           return db.buyers.findOne({ _id: inv.buyerId }, function (err, buyer) {
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