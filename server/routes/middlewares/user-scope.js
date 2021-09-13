const scopes = require('../../usecases/user-scope')
const config = require('../../conf')


module.exports = (req, res, next) => {
    if (config.isdevInstance) {
        return next()
    }
    if (req.session.user.isAdminLogin) {
        return next()
    }

    let routePath = req.route.path
    let method = req.method

    if (!scopes.units[routePath] || scopes.units[routePath].indexOf(method) === -1) {
        return res.send({ errorMessage: "Operation Not Allowed!" });
    }
    
    return next()

}