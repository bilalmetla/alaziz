const validations = require('../validations')
const serialNumbers = require('./serialNumbers')
const Buyer = require('./buyer')
const utility = require('../utility')

const INVOICES = 'invoices'


exports.create = async function (newInvoice, db) {

    validations.invoice(newInvoice)

    await serialNumbers.getSerialNumber(db)

    attachInvoiceSerials(newInvoice)
    newInvoice.createdDate = new Date()
    newInvoice.date = new Date(newInvoice.date)

    return await db.insert(INVOICES, newInvoice)
    
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

    let where = { _id: id }
    return await db.update(INVOICES, where, invoice)    
};


exports.getBuyerInvoicesById = async function (buyerId, db) {
    let where = { "buyerId": buyerId }
    return await db.find(INVOICES, where)    
};

exports.getInvoiceAll = async function (db) {
    let where = { }
    return await db.find(INVOICES, where)       
};

exports.getInvoiceById = async function ({ invoiceId, buyerId }, db) {
    let where = { $and:[{ _id: invoiceId }, {buyerId: buyerId } ] }
    return db.findOne(INVOICES, where)     
};

exports.findInvoiceByNumber = async function ({ serialNumber, buyerId }, db) {
    let where = { $and: [{ serialNumber: parseInt(serialNumber) }, { buyerId }] }
    return db.findOne(INVOICES, where)    
};

exports.deleteRecord = async function ({ buyerId, invoiceId }, db) {
   let where = { $and: [{ _id: invoiceId }, {buyerId: buyerId}] }
    return await db.remove(INVOICES, where)    
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
    let invoices = await db.find(INVOICES, where)
    if (!invoices || invoices.length === 0) {
        throw new Error('No Invoice Found')
    }
    
    return invoices;
}


const combineBuyerInvoices = async function (invoices, db) {
    const mergedInvoiceAndBuyer = []
    for (let inv of invoices) {
        let buyer = await Buyer.getBuyerById(inv.buyerId)
        utility.calculateValuesAndTaxes(inv)
        mergedInvoiceAndBuyer.push({...buyer, invoice: inv})
    }
    return mergedInvoiceAndBuyer;
    
}