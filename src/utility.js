const invoiceGenerator = require('./invoice-generator')
const constants = require('./constants')



exports.invoiceHtml = function (result) {
    let articles = result.invoices[0].items;
    let invoiceData = {
        
        recipient: {
            name: result.buyer,
            street1: result.address,

            date: result.invoices[0].date,
            invoiceNumber: result.invoices[0].number,
        
        },
        
    };
    let businessType = result.invoices[0].businessType
    invoiceData.articles = articles;
    invoiceData.grandTotals = { }
    invoiceData.grandTotals.grandTotalValueExcelST = grandTotalValueExcelST(invoiceData.articles)
    invoiceData.grandTotals.grandTotalSTPayable = grandTotalSTPayable(invoiceData.articles)
    invoiceData.grandTotals.grandTotalValueOfIncludingST = grandTotalValueOfIncludingST(invoiceData.articles)
    invoiceData.grandTotals.incomeTaxWithHeld = calclateIncomeTaxWithHeld(businessType, invoiceData.grandTotals.grandTotalValueOfIncludingST)
    invoiceData.grandTotals.saleTaxWithHeld = saleTaxWithHeld(businessType, invoiceData.grandTotals.grandTotalSTPayable)
    invoiceData.grandTotals.receivedSaleTax = receivedSaleTax(businessType, invoiceData.grandTotals.grandTotalSTPayable)
    invoiceData.grandTotals.netPayment = invoiceData.grandTotals.grandTotalValueOfIncludingST - invoiceData.grandTotals.incomeTaxWithHeld - invoiceData.grandTotals.saleTaxWithHeld

   invoiceGenerator.invoice(invoiceData)
   invoiceGenerator.receipt(invoiceData)
};


Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

const grandTotalValueExcelST = function (values) {
    return values.sum('valueExcelST')
}

const grandTotalSTPayable = function (values) {
    return values.sum('totalSTPayable')
}

const grandTotalValueOfIncludingST = function (values) {
    return values.sum('valueOfIncludingST')
};

const calclateIncomeTaxWithHeld = function (businessType, grandTotalSTPayable) {
    if (businessType == constants.businessTypes.SUPPLIES) {
        return (grandTotalSTPayable * constants.businessTypeIncomeTaxes.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES) {
        return (grandTotalSTPayable * constants.businessTypeIncomeTaxes.SERVICES / 100);    
    }
    
};

const saleTaxWithHeld = function (businessType, grandTotalSTPayable) {
    if (businessType == constants.businessTypes.SUPPLIES) {
        return (grandTotalSTPayable * constants.saleTaxesWithHeld.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES) {
        return (grandTotalSTPayable * constants.saleTaxesWithHeld.SERVICES / 100);    
    }
    
};

const receivedSaleTax = function (businessType, grandTotalSTPayable) {
    if (businessType == constants.businessTypes.SUPPLIES) {
        return (grandTotalSTPayable * constants.receivedSaleTaxes.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES) {
        return (grandTotalSTPayable * constants.receivedSaleTaxes.SERVICES / 100);    
    }
    
}