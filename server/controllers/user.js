

const response = require('./response')
const Unit = require('../usecases/unit')
const User = require('../usecases/user')
const db = require('../db')
const utility = require('../utility')

exports.login = async function (req, res, next) {
   try {

       let {userName, password} = req.body
       let records = await Unit.getForLogin({ userName, password }, db);
       if (records && records.length > 0) {
            records = records[0]
            records.isUnitLogin = true
           req.session.user = records; 

       } else {
           records = await User.getForLogin({ userName, password }, db);
           if (records && records.length > 0) {
               records = records[0]
               records.isAdminLogin = true
               req.session.user = records;
 
           }
           else {
               records = { errorMessage: "Login Failed!" };
           }
       }
      utility.mapToClientResponse(records)
      response.send(records, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};