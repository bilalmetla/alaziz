const joi = require('joi');

module.exports = joi.object().keys({ 
    businessType: joi.number().required(),
    invoiceType: joi.number().required(),
    date: joi.string().required(),
   
    buyerId: joi.string().alphanum().optional(),

    items: joi.array().items(
        joi.object().keys({
                quantity: joi.number().required(),
                description: joi.string().required(),
                price: joi.number().required(),
                rateOfST: joi.number().required(),
            })
    ).required(),
    
  })