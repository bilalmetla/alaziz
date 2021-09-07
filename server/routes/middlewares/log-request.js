
const utility = require('../../utility')

module.exports = (app) => {
    app.use(function (req, res, next) {
        const { url, body } = req
        utility.logMessage(`request received ${url}`)
        utility.logMessage(body)

        return next()
    })
}