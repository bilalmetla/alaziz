const validations = require('../validations')
const constants = require('../constants');
const utility = require('../utility');


const VOUCHERS = 'vouchers'
const INVOICES = 'invoices'
const UNITS = 'units'


exports.create = async function (voucher, db) {

    validations.voucher(voucher)
    voucher.createdDate = new Date()
    voucher.status = "Pending";
    return await db.insert(VOUCHERS, voucher)
    
};


exports.getByUnits = async function ({ unitId }, db) {

    const where = {
        unitId,
    }
    const sort ={createdDate: -1}
    return await db.findAndSort(VOUCHERS, where, sort)
    
};
exports.getAll = async function (db) {

    const where = {}
    const sort ={createdDate: -1}
    return await db.findAndSort(VOUCHERS, where, sort)
    
};

exports.getById = async function ({ unitId, voucherId }, db) {

    const where = {
        $and: [
            { unitId },
            {'_id': voucherId}
        ]
    }
    return await db.find(VOUCHERS, where)
    
};

exports.update = async function ({ unitId, voucherId }, voucher, db) {

    validations.voucher(voucher)
    voucher.updatedDate = new Date()
    let where = {
        $and: [
            { _id: voucherId },
            {unitId}
        ]
    }

    return await db.update(VOUCHERS, where, voucher)
    
};

exports.remove = async function ({ unitId, voucherId }, db) {

    let where = {
        _id: voucherId
    }

    return await db.remove(VOUCHERS, where)
    
};

exports.createInvoices = async function (voucher, unit, db) {
    let buyerId = voucher.buyerId;
    let voucherId = voucher.voucherId;
    for (let key in voucher) {
        try {

            if (typeof voucher[key] === 'object') {
                let newInvoice = voucher[key];
                delete newInvoice.grandTotals;
                newInvoice.buyerId = buyerId;
                newInvoice.voucherId = voucherId;
                newInvoice.createdDate = new Date()
                newInvoice.date = new Date()
                utility.formatDateDisplay(newInvoice, 'date')
                newInvoice.status = constants.invoiceStatues.UNPAID

                validations.invoice(newInvoice)
                await db.update(UNITS, { _id: unit.id || unit._id }, utility.getSerialNumbers(unit))  
                utility.attachInvoiceSerials(newInvoice, unit)
                await db.insert(INVOICES, newInvoice)
            }
            
            
        } catch (ex) {
            throw ex;
        }
        

    }

    let where = {
        _id: voucherId
    }

    await db.update(VOUCHERS, where, {status: "Done"})
    return {resultCode: 2001, message: 'Invoices Created Success!'}
   
};