
const userController = require('../controllers/user');


module.exports = (Router) => {
    Router.post('/login',  userController.login)
}