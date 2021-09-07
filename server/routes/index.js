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


Router.get('/invoices', invoiceController.getInvoices);
Router.get('/invoices/:id', invoiceController.getInvoiceById);
Router.post('/invoices', invoiceController.createInvoice);
Router.put('/invoices/:id', invoiceController.updateInvoice);

Router.get('/invoices/serial-number/:serialNumber/print', invoiceController.printInvoice);
Router.get('/buyerInvoices/:buyerId', invoiceController.getBuyerInvoicesById);

module.exports = Router;