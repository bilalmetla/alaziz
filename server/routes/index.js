const Express = require('express');
const Router = Express.Router();

const isUserScope = require('./middlewares/user-scope')
const middlewares = [isUserScope]


require('./middlewares/log-request')(Router)

/**routes with out session  */
require('./user')(Router)

/**
 * check for sessions and login users
 */
require('./middlewares/req-session')(Router)

/**
 * import route apis for different controllers
 */
require('./unit')(Router, middlewares)
require('./buyer')(Router, middlewares)
require('./invoice')(Router, middlewares)
require('./reports')(Router, middlewares)



module.exports = Router;