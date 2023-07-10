
const voucherController = require('../controllers/voucher');

module.exports = (Router, middlewares) => {
    
    // Router.get('/buyers', middlewares, voucherController.getBuyers);
    Router.post('/units/:unitId/buyers/:buyerId/invoices/:status/vouchers/create', middlewares, voucherController.create);
    Router.post('/units/:unitId/buyers/:buyerId/invoices/:status/vouchers/create/invoices', middlewares, voucherController.create);
    Router.get('/units/:unitId/vouchers', middlewares, voucherController.getByUnits);
    Router.get('/units/:unitId/vouchers/:voucherId', middlewares, voucherController.getById);
    Router.put('/units/:unitId/vouchers/:voucherId', middlewares, voucherController.update);
    Router.delete('/units/:unitId/vouchers/:voucherId', middlewares, voucherController.remove);
    Router.post('/units/:unitId/vouchers/:voucherId/invoices', middlewares, voucherController.createInvoices);
    Router.put('/units/:unitId/vouchers/:voucherId/invoices', middlewares, voucherController.updateInvoices);
    Router.post('/units/:unitId/vouchers/:voucherId/invoices/pay', middlewares, voucherController.payInvoices);

    // Router.put('/buyers/:buyerId', middlewares, buyerController.updateBuyer);

    
}