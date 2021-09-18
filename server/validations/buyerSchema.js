const joi = require('joi');

module.exports = joi.object().keys({ 
    name: joi.string().min(3).required(),
    address: joi.string().min(3).required(),
    representitveName: joi.string().min(3).required(),
    phone: joi.number().required(),
    ntnNumber: joi.string().required(),
  ntnName: joi.string().min(3).required(),
    
    email: joi.string().min(3).allow('', null).optional(),
    unitId: joi.string().allow('', null).optional(),
    createdDate: joi.string().allow('', null).optional(),
    updatedDate: joi.string().allow('', null).optional(),
    cnic: joi.string().allow('', null).optional(),
  })