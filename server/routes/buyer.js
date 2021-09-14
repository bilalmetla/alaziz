
const buyerController = require('../controllers/buyer');

module.exports = (Router, middlewares) => {
    
    Router.get('/buyers', middlewares, buyerController.getBuyers);
    Router.get('/buyers/:buyerId', middlewares, buyerController.getBuyerById);
    Router.post('/buyers/create', middlewares, buyerController.createBuyer);
    Router.put('/buyers/:buyerId', middlewares, buyerController.updateBuyer);
    Router.delete('/buyers/:id', middlewares, buyerController.deleteBuyer);

    
}