const Express = require('express');
const Router = Express.Router();

const unitController = require('../controllers/unit');
const buyerController = require('../controllers/buyer');
const invoiceController = require('../controllers/invoice');
const reportsController = require('../controllers/reports');

//middle ware methods
require('./middlewares/log-request')(Router)




Router.get('/units', unitController.getAll);
Router.get('/units/:id', unitController.getById);
Router.post('/units/create', unitController.create);
Router.put('/units/:id', unitController.update);
Router.delete('/units/:id', unitController.remove);
Router.get('/units/:id/buyers', unitController.getBuyersOFUnit);
Router.post('/units/:unitId/buyers/create', buyerController.createBuyer);
Router.get('/units/:unitId/buyers/:buyerId', buyerController.getBuyerById);
Router.put('/units/:unitId/buyers/:buyerId', buyerController.updateBuyer);
Router.get('/units/:unitId/buyers/:buyerId/invoices', invoiceController.getBuyerInvoicesById);
Router.get('/units/:unitId/buyers/:buyerId/invoices/:invoiceId', invoiceController.getInvoiceById);
Router.put('/units/:unitId/buyers/:buyerId/invoices/:id', invoiceController.updateInvoice);
Router.post('/units/:unitId/buyers/:buyerId/invoices/create', invoiceController.createInvoice);
Router.get('/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print', invoiceController.printInvoice);
Router.get('/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print/receipt', invoiceController.printInvoice);
Router.get('/units/:unitId/buyers/:buyerId/invoices', invoiceController.getBuyerInvoicesById);



Router.get('/buyers', buyerController.getBuyers);
Router.get('/buyers/:buyerId', buyerController.getBuyerById);
Router.post('/buyers/create', buyerController.createBuyer);
Router.put('/buyers/:buyerId', buyerController.updateBuyer);
Router.delete('/buyers/:id', buyerController.deleteBuyer);


Router.get('/invoices', invoiceController.getInvoices);
Router.get('/buyers/:buyerId/invoices/:invoiceId', invoiceController.getInvoiceById);
Router.post('/buyers/:buyerId/invoices/create', invoiceController.createInvoice);
Router.put('/buyers/:buyerId/invoices/:id', invoiceController.updateInvoice);
// Router.get('/buyers/:buyerId/invoices/:invoiceId', invoiceController.printInvoice);
Router.delete('/buyers/:buyerId/invoices/:invoiceId', invoiceController.deleteInvoice);

Router.get('/buyers/:buyerId/invoices/:invoiceId/print', invoiceController.printInvoice);
Router.get('/buyers/:buyerId/invoices/:invoiceId/print/receipt', invoiceController.printInvoice);
Router.get('/buyers/:buyerId/invoices', invoiceController.getBuyerInvoicesById);

//reports
Router.post('/report/with-gst', reportsController.withGST);
Router.post('/report/without-gst', reportsController.withOutGST);
Router.post('/report/with-pst', reportsController.withPST);
Router.post('/report/without-pst', reportsController.withOutPST);

module.exports = Router;