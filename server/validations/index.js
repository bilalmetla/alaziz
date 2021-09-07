const utility = require('../utility')
const buyerSchema = require('./buyerSchema')
const invoiceSchema = require('./invoiceSchema')

exports.buyer = function (dataToValidate) {
    const result = buyerSchema.validate(dataToValidate);
    if (result.error) {
        utility.logMessage(result)
        throw result.error
    }
    return true
}

exports.invoice = function (dataToValidate) {
    const result = invoiceSchema.validate(dataToValidate);
    if (result.error) {
        utility.logMessage(result)
        throw result.error
    }
    return true
}