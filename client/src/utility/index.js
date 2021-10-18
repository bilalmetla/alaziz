


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
    
    Object.keys(invoices).forEach(key => {
        let grandTotals = { }
        let invoiceData = invoices[key]
        
        grandTotals.grandTotalValueExcelST = grandTotalValueExcelST(invoiceData.items)
        grandTotals.grandTotalSTPayable = grandTotalSTPayable(invoiceData.items)
        grandTotals.grandTotalValueOfIncludingST = grandTotalValueOfIncludingST(invoiceData.items)
        
        invoices[key].grandTotals = grandTotals
    })

};


export const calculateGrandTotalsOFValueExcelST = function (invoices) {
    const superGrandTotals = {
        grandTotalValueExcelST: 0,
        grandTotalSTPayable: 0,
        grandTotalValueOfIncludingST: 0
    }
    Object.keys(invoices).forEach(key => { 
        let grandTotals = invoices[key].grandTotals
        
        superGrandTotals.grandTotalValueExcelST = superGrandTotals.grandTotalValueExcelST + grandTotals.grandTotalValueExcelST;
        superGrandTotals.grandTotalSTPayable = superGrandTotals.grandTotalSTPayable + grandTotals.grandTotalSTPayable;
        superGrandTotals.grandTotalValueOfIncludingST = superGrandTotals.grandTotalValueOfIncludingST + grandTotals.grandTotalValueOfIncludingST;
        
    })
    
    return superGrandTotals

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

export const calclateIncomeTaxWithHeld = function (businessType, grandTotalSTPayable) {
    
    let value = ''

    if (businessType == constants.businessTypes.SUPPLY_WITH_GST
        ||businessType == constants.businessTypes.SUPPLY_WITHOUT_GST) {
        value = (grandTotalSTPayable * constants.businessTypeIncomeTaxes.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES_WITH_PST
    || businessType == constants.businessTypes.SERVICES_WITHOUT_PST) {
        value = (grandTotalSTPayable * constants.businessTypeIncomeTaxes.SERVICES / 100);    
    }
    if (businessType == constants.businessTypes.PERSONAL) {
        value = (grandTotalSTPayable * constants.businessTypeIncomeTaxes.PERSONAL / 100);    
    }
    
    return parseFloat(value.toFixed(2))
};



export const saleTaxWithHeld = function (businessType, grandTotalSTPayable) {
    let value = ''
    if (businessType == constants.businessTypes.SUPPLY_WITH_GST
        ||businessType == constants.businessTypes.SUPPLY_WITHOUT_GST) {
        value = (grandTotalSTPayable * constants.saleTaxesWithHeld.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES_WITH_PST
        || businessType == constants.businessTypes.SERVICES_WITHOUT_PST) {
        value = (grandTotalSTPayable * constants.saleTaxesWithHeld.SERVICES / 100);    
    }
    if (businessType == constants.businessTypes.PERSONAL) {
        value = (grandTotalSTPayable * constants.saleTaxesWithHeld.PERSONAL / 100);    
    }
    
    return parseFloat(value.toFixed(2))
};

export const receivedSaleTax = function (businessType, grandTotalSTPayable) {
    let value = ''
    if (businessType == constants.businessTypes.SUPPLY_WITH_GST
        ||businessType == constants.businessTypes.SUPPLY_WITHOUT_GST) {
        value = (grandTotalSTPayable * constants.receivedSaleTaxes.SUPPLIES / 100);    
    }
    if (businessType == constants.businessTypes.SERVICES_WITH_PST
        || businessType == constants.businessTypes.SERVICES_WITHOUT_PST) {
        value = (grandTotalSTPayable * constants.receivedSaleTaxes.SERVICES / 100);    
    }
    if (businessType == constants.businessTypes.PERSONAL) {
        value = (grandTotalSTPayable * constants.receivedSaleTaxes.PERSONAL / 100);    
    }
    
    return parseFloat(value.toFixed(2))
};


export const grandTotalsWithGroups = function (voucherDetails) {
    let subTotals = {
        grandTotalValueExcelST: 0,
        grandTotalSTPayable: 0,
        grandTotalValueOfIncludingST: 0,
        incomeTax: 0,
        withHoldingTax: 0,
        salesTax: 0,
    }
    let grandTotals = {}
    Object.keys(voucherDetails).forEach((key, index) => { 
        let item = voucherDetails[key]; 
        let businessType = voucherDetails[key].businessType;
        let incomeTax = parseFloat((calclateIncomeTaxWithHeld(businessType, item.grandTotals.grandTotalValueOfIncludingST)).toFixed(2))
        let withHoldingTax = parseFloat((saleTaxWithHeld(businessType, item.grandTotals.grandTotalSTPayable)).toFixed(2))
        let salesTax = parseFloat((item.grandTotals.grandTotalSTPayable - withHoldingTax).toFixed(2))

        if (!grandTotals[businessType]) {
            grandTotals[businessType] = {}
            grandTotals[businessType]['grandTotalValueExcelST'] = item.grandTotals.grandTotalValueExcelST;
            grandTotals[businessType]['grandTotalSTPayable'] = item.grandTotals.grandTotalSTPayable;
            grandTotals[businessType]['grandTotalValueOfIncludingST'] = item.grandTotals.grandTotalValueOfIncludingST;
            grandTotals[businessType]['incomeTax'] = incomeTax;
            grandTotals[businessType]['withHoldingTax'] = withHoldingTax;
            grandTotals[businessType]['salesTax'] = salesTax;

            subTotals['grandTotalValueExcelST'] += item.grandTotals.grandTotalValueExcelST;
            subTotals['grandTotalSTPayable'] += item.grandTotals.grandTotalSTPayable;
            subTotals['grandTotalValueOfIncludingST'] += item.grandTotals.grandTotalValueOfIncludingST ;
            subTotals['incomeTax'] += incomeTax;
            subTotals['withHoldingTax'] += withHoldingTax;
            subTotals['salesTax'] += salesTax;
          
        } else { 
            grandTotals[businessType]['grandTotalValueExcelST'] += item.grandTotals.grandTotalValueExcelST;
            grandTotals[businessType]['grandTotalSTPayable'] += item.grandTotals.grandTotalSTPayable;
            grandTotals[businessType]['grandTotalValueOfIncludingST'] += item.grandTotals.grandTotalValueOfIncludingST ;
            grandTotals[businessType]['incomeTax'] += incomeTax;
            grandTotals[businessType]['withHoldingTax'] += withHoldingTax;
            grandTotals[businessType]['salesTax'] += salesTax;

            subTotals['grandTotalValueExcelST'] += item.grandTotals.grandTotalValueExcelST;
            subTotals['grandTotalSTPayable'] += item.grandTotals.grandTotalSTPayable;
            subTotals['grandTotalValueOfIncludingST'] += item.grandTotals.grandTotalValueOfIncludingST;
            subTotals['incomeTax'] += incomeTax;
            subTotals['withHoldingTax'] += withHoldingTax;
            subTotals['salesTax'] += salesTax;

        }
    })

    grandTotals['Totals'] = subTotals;
    return grandTotals;
}