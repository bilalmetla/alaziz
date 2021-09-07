const joi = require('joi');

module.exports = joi.object().keys({ 
    name: joi.string().alphanum().min(3).required(),
    address: joi.string().alphanum().min(3).required(),
    representitveName: joi.string().alphanum().min(3).required(),
    phone: joi.number().required(),
    ntnNumber: joi.string().required(),
    ntnName: joi.string().alphanum().min(3).required(),
    email: joi.string().alphanum().min(3).allow('', null).optional(),
  })