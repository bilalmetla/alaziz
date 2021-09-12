const utility = require('../utility')
const buyerSchema = require('./buyerSchema')
const invoiceSchema = require('./invoiceSchema')
const unitSchema = require('./unitSchema')

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

exports.unit = function (dataToValidate) {
    const result = unitSchema.validate(dataToValidate);
    if (result.error) {
        utility.logMessage(result)
        throw result.error
    }
    return true
}