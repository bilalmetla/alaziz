const Express = require('express');
const Router = Express.Router();

const buyerController = require('../controllers/buyer');
const invoiceController = require('../controllers/invoice');

//middle ware methods
require('./middlewares/log-request')(Router)




Router.get('/buyers', buyerController.getBuyers);
Router.get('/buyers/:id', buyerController.getBuyerById);
Router.post('/buyers', buyerController.createBuyer);
Router.put('/buyers/:id', buyerController.updateBuyer);
Router.delete('/buyers/:id', buyerController.deleteBuyer);


Router.get('/invoices', invoiceController.getInvoices);
Router.get('/buyers/:buyerId/invoices/:id', invoiceController.getInvoiceById);
Router.post('/invoices', invoiceController.createInvoice);
Router.put('/invoices/:id', invoiceController.updateInvoice);
// Router.get('/buyers/:buyerId/invoices/:invoiceId', invoiceController.printInvoice);
Router.delete('/buyers/:buyerId/invoices/:invoiceId', invoiceController.deleteInvoice);

Router.get('/buyers/:buyerId/invoices/:invoiceId/print', invoiceController.printInvoice);
Router.get('/buyers/:buyerId/invoices/:invoiceId/print/receipt', invoiceController.printInvoice);
Router.get('/buyers/:buyerId/invoices', invoiceController.getBuyerInvoicesById);

module.exports = Router;