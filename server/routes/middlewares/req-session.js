const config = require('../../conf')
const utility = require('../../utility')


module.exports = (Router) => {
   
    Router.use((req, res, next) => {
      utility.logMessage(req.session)

      if (!config.isdevInstance) {
        if (!req.session || !req.session.user) {
          return  res.send({errorMessage:"Login Required!", code:'ER0401'})
        }
      }
        
        return next()
    })
}