const unitController = require('../controllers/unit');
const buyerController = require('../controllers/buyer');
const invoiceController = require('../controllers/invoice');


module.exports = (Router, middlewares) => {
    
    Router.get('/units', middlewares, unitController.getAll);
    Router.get('/units/:id', middlewares, unitController.getById);
    Router.post('/units/create', middlewares, unitController.create);
    Router.put('/units/:id', middlewares, unitController.update);
    Router.delete('/units/:id', middlewares, unitController.remove);
    Router.get('/units/:id/buyers', middlewares, unitController.getBuyersOFUnit);
    Router.post('/units/:unitId/buyers/create', middlewares, buyerController.createBuyer);
    Router.get('/units/:unitId/buyers/:buyerId', middlewares, buyerController.getBuyerById);
    Router.put('/units/:unitId/buyers/:buyerId', middlewares, buyerController.updateBuyer);
    Router.get('/units/:unitId/buyers/:buyerId/invoices/:status', middlewares, invoiceController.getBuyerInvoicesById);
    Router.get('/units/:unitId/buyers/:buyerId/invoices/:status/:invoiceId', middlewares, invoiceController.getInvoiceById);
    Router.put('/units/:unitId/buyers/:buyerId/invoices/:status/:id', middlewares, invoiceController.updateInvoice);
    Router.post('/units/:unitId/buyers/:buyerId/invoices/:status/create', middlewares, invoiceController.createInvoice);
    Router.get('/units/:unitId/buyers/:buyerId/invoices/:status/:invoiceId/print', middlewares, invoiceController.printInvoice);
    Router.get('/units/:unitId/buyers/:buyerId/invoices/:status/:invoiceId/print/receipt', middlewares, invoiceController.printInvoice);
    Router.get('/units/:unitId/buyers/:buyerId/invoices', middlewares, invoiceController.getBuyerInvoicesById);
    Router.delete('/units/:unitId/buyers/:id', middlewares, buyerController.deleteBuyer);
    Router.delete('/units/:unitId/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.deleteInvoice);

}