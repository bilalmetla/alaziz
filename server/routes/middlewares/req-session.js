const config = require('../../conf')
const utility = require('../../utility')


module.exports = (Router) => {
    if(!config.isdevInstance)
    Router.use((req, res, next) => {
        utility.logMessage(req.session)
        if (!req.session || !req.session.user) {
          return  res.send({errorMessage:"Login Required!"})
        }
        return next()
    })
}