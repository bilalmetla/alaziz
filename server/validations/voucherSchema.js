const joi = require('joi');

module.exports = joi.object().keys({ 
  unitId: joi.string().min(3).required(),
  buyerId: joi.string().min(3).required(),
  voucherPrice: joi.number().required(),
  title: joi.string().required(),
  checkNumber: joi.string().required(),
    
  //grandTotals: joi.object().keys({}).unknown(true).required(),

  }).unknown(true)