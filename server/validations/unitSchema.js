const joi = require('joi');

module.exports = joi.object().keys({ 
    name: joi.string().min(3).required(),
    address: joi.string().min(3).required(),
    organizerName: joi.string().min(3).required(),
    phone: joi.number().required(),
    userName: joi.string().min(3).required(),
    password: joi.string().min(3).required(),
    email: joi.string().min(3).allow('', null).optional(),
  })