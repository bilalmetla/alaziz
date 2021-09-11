const validations = require('../validations')
const serialNumbers = require('./serialNumbers')
const utility = require('../utility')


exports.create = async function (newInvoice, db) {
    //validate it
    validations.invoice(newInvoice)
    await serialNumbers.getSerialNumber(db)
    newInvoice.serialNumber = process.serialNumber;
    newInvoice.bookNumber = process.bookNumber;
    newInvoice.createdDate = new Date()
    newInvoice.date = new Date(newInvoice.date)
   
    //save it
    return new Promise((resolve, reject) => {
       return db.invoices.insert(newInvoice, (err, docs) => err ? reject(err): resolve(docs))    
    })
    
};

exports.update = async function (id, invoice, db) {
    //validate it
    //let invoice = JSON.parse(JSON.stringify(data))
    delete invoice.serialNumber
    delete invoice.bookNumber
    delete invoice.createdDate
    delete invoice.updatedDate
    
    validations.invoice(invoice)
    invoice.updatedDate = new Date()
    invoice.date = new Date(invoice.date)
    //save it
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

exports.getInvoiceById = async function (id, db) {
    return new Promise((resolve, reject) => {
        return db.invoices.findOne({_id:id},(err, docs) => err ? reject(err): resolve(docs)) 
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
    return new Promise((resolve, reject) => {
        return db.invoices.find({
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
        },
            (err, invoices) => {
                if (err) {
                    return reject(err);
                }
                if (!invoices || invoices.length === 0) {
                   return reject(new Error('No Invoice Found'))
                }
                const mergedInvoiceAndBuyer = []
                invoices.forEach(function (inv, index) {
                    
                   return db.buyers.findOne({ _id: inv.buyerId }, function (err, buyer) {
                        if (err) {
                            return reject(err);
                       }
                       inv.items = utility.calculateValuesAndTaxes(inv.items)
                        mergedInvoiceAndBuyer[index] = {...buyer, invoice: inv}
                        if (index === invoices.length-1) {
                            return resolve(mergedInvoiceAndBuyer);    
                        }
                        

                    });
                });

                
            })
    })
    
}