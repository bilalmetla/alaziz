
const utility = require('../../utility')

module.exports = (app) => {
    app.use(function (req, res, next) {
        const { url, body, headers } = req
        utility.logMessage(`request received | url: ${url} | method: ${req.method}`)
        utility.logMessage(headers)
        utility.logMessage(body)

        return next()
    })
}