


const constants = require('../constants')



exports.calculateGrandTotals = function (invoiceData) {

    let businessType = invoiceData.businessType
   // invoiceData.articles = articles;
    invoiceData.grandTotals = { }
    invoiceData.grandTotals.grandTotalValueExcelST = grandTotalValueExcelST(invoiceData.items)
    invoiceData.grandTotals.grandTotalSTPayable = grandTotalSTPayable(invoiceData.items)
    invoiceData.grandTotals.grandTotalValueOfIncludingST = grandTotalValueOfIncludingST(invoiceData.items)
    invoiceData.grandTotals.incomeTaxWithHeld = calclateIncomeTaxWithHeld(businessType, invoiceData.grandTotals.grandTotalValueOfIncludingST)
    invoiceData.grandTotals.saleTaxWithHeld = saleTaxWithHeld(businessType, invoiceData.grandTotals.grandTotalSTPayable)
    invoiceData.grandTotals.receivedSaleTax = receivedSaleTax(businessType, invoiceData.grandTotals.grandTotalSTPayable)
    invoiceData.grandTotals.netPayment = invoiceData.grandTotals.grandTotalValueOfIncludingST - invoiceData.grandTotals.incomeTaxWithHeld - invoiceData.grandTotals.saleTaxWithHeld

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
    
};



exports.calculateValuesAndTaxes = function (items) {
    
    return items.map(item => {
        let valueExcelST = parseInt(item.quantity) * parseInt(item.price)
        let totalSTPayable = (valueExcelST * parseInt(item.rateOfST)) / 100
        let valueOfIncludingST = valueExcelST + totalSTPayable
        return {
            quantity: item.quantity,
            description: item.description,
            price: item.price,
            valueExcelST: valueExcelST,
            rateOfST: item.rateOfST,
            totalSTPayable: totalSTPayable,
            valueOfIncludingST: valueOfIncludingST,
        }
    })

};

exports.validateNumberOnly = function (value) {
    return isNaN(value)?'':value
}

exports.validateDateFormat = function (value) {
    let date = value.split('-')
    if (date[0] > 31 || date[0] < 1) {
        console.log('date day is not correct.')
        return ''
    }
    if (date[1] > 12 || date[1] < 1) {
        console.log('date month is not correct.')
        return ''
    }
    if (date[2] < 1000 || date[2].length != 4) {
        console.log('date year is not correct.')
        return ''
    }
    return value
};

exports.validateNTN = function (value) {
    return value.indexOf("-") < 1?'':value
};

exports.formatDate = function (date) {
    
    date = new Date(date)
    let month = date.getMonth() + 1
    month = month < 10 ? "0" + month : month

    let day = date.getDate()
    day = day < 10 ? "0" + day : day

    return `${day}-${month}-${date.getFullYear()}`
}

exports.logMessage = function (message) {
    if (typeof message === 'object') {
        console.log(JSON.stringify(message))
    }
    else {
        console.log(message)    
    }
    
}

exports.logException = function (exception) {
   
    console.log(exception.message, exception)  
    
};

exports.mapToClientResponse = function (result) {
    // if (!result) {
    //     return  
    // }  
     if (result && result[0]) {
        result.map(item => {
            item.id = item._id;
            delete item._id
            return item;
        });
    }
    else {
        if ( result._id) {
            result.id = result._id
            delete result._id
        }
        
     }
    
    
};

