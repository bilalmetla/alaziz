


//const constants = require('../constants')
import { constants } from "../constants";

export const calculateValuesAndTaxes = function (invoices) {
    Object.keys(invoices).forEach(key => {
        let items = invoices[key].items
        invoices[key].items = items.map(item => {
            let valueExcelST = parseInt(item.quantity) * parseInt(item.price)
            let totalSTPayable = (valueExcelST * parseInt(item.rateOfST)) / 100
            let valueOfIncludingST = valueExcelST + totalSTPayable
            return {
                quantity: item.quantity,
                description: item.description,
                price: item.price,
                valueExcelST: parseFloat(valueExcelST.toFixed(2)),
                 rateOfST: item.rateOfST,
                totalSTPayable: parseFloat(totalSTPayable.toFixed(2)),
                valueOfIncludingST: parseFloat(valueOfIncludingST.toFixed(2)),
            }
        })
    })
   
   

};


export const calculateGrandTotals = function (invoices) {
    const grandTotals = { }
    Object.keys(invoices).forEach(key => { 
        let invoiceData = invoices[key]
        let businessType = invoiceData.businessType
        
        grandTotals.grandTotalValueExcelST = grandTotalValueExcelST(invoiceData.items)
        grandTotals.grandTotalSTPayable = grandTotalSTPayable(invoiceData.items)
        grandTotals.grandTotalValueOfIncludingST = grandTotalValueOfIncludingST(invoiceData.items)
        grandTotals.incomeTaxWithHeld = calclateIncomeTaxWithHeld(businessType, grandTotals.grandTotalValueOfIncludingST)
        grandTotals.saleTaxWithHeld = saleTaxWithHeld(businessType, grandTotals.grandTotalSTPayable)
        grandTotals.receivedSaleTax = receivedSaleTax(businessType, grandTotals.grandTotalSTPayable)
        grandTotals.netPayment = grandTotals.grandTotalValueOfIncludingST - grandTotals.incomeTaxWithHeld - grandTotals.saleTaxWithHeld
    })
    
    return grandTotals

};

Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

const grandTotalValueExcelST = function (values) {
    return parseFloat(values.sum('valueExcelST').toFixed(2))
}

const grandTotalSTPayable = function (values) {
    return parseFloat(values.sum('totalSTPayable').toFixed(2))
}

const grandTotalValueOfIncludingST = function (values) {
    return parseFloat(values.sum('valueOfIncludingST').toFixed(2))
};

const calclateIncomeTaxWithHeld = function (businessType, grandTotalSTPayable) {
    
    let value = ''

    if (businessType == constants.businessTypes.SUPPLIES) {
        value = (grandTotalSTPayable * constants.businessTypeIncomeTaxes.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES) {
        value = (grandTotalSTPayable * constants.businessTypeIncomeTaxes.SERVICES / 100);    
    }
    
    return parseFloat(value.toFixed(2))
};

const saleTaxWithHeld = function (businessType, grandTotalSTPayable) {
    let value = ''
    if (businessType == constants.businessTypes.SUPPLIES) {
        value = (grandTotalSTPayable * constants.saleTaxesWithHeld.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES) {
        value = (grandTotalSTPayable * constants.saleTaxesWithHeld.SERVICES / 100);    
    }
    
    return parseFloat(value.toFixed(2))
};

const receivedSaleTax = function (businessType, grandTotalSTPayable) {
    let value = ''
    if (businessType == constants.businessTypes.SUPPLIES) {
        value = (grandTotalSTPayable * constants.receivedSaleTaxes.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES) {
        value = (grandTotalSTPayable * constants.receivedSaleTaxes.SERVICES / 100);    
    }
    
    return parseFloat(value.toFixed(2))
};
