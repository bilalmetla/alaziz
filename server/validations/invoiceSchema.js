const joi = require('joi');

module.exports = joi.object().keys({ 
    businessType: joi.number().required(),
    invoiceType: joi.string().required(),
    date: joi.string().required(),
    buyerId: joi.string().required(),

    createdDate: joi.string().allow('', null).optional(),
    updatedDate: joi.string().allow('', null).optional(),
    serialNumber: joi.number().allow('', null).optional(),
    bookNumber: joi.number().allow('', null).optional(),

    
    items: joi.array().items(
        joi.object().keys({
                quantity: joi.number().required(),
                description: joi.string().required(),
                price: joi.number().required(),
                rateOfST: joi.number().required(),
            })
    ).required(),
    
  })