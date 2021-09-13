const Express = require('express');
const Router = Express.Router();
const config = require('../conf')
const unitController = require('../controllers/unit');
const buyerController = require('../controllers/buyer');
const invoiceController = require('../controllers/invoice');
const reportsController = require('../controllers/reports');
const userController = require('../controllers/user');

//middle ware methods
require('./middlewares/log-request')(Router)
const isUserScope = require('./middlewares/user-scope')
const middlewares = [isUserScope]

Router.post('/login',  userController.login)

/**
 * check for sessions and login users
 */
if(!config.isdevInstance)
Router.use((req, res, next) => {
    console.log('req.session',  req.session)
    if (!req.session || !req.session.user) {
        res.send({errorMessage:"Login Required!"})
    }
    next()
  })



Router.get('/units', middlewares, unitController.getAll);
Router.get('/units/:id', middlewares, unitController.getById);
Router.post('/units/create', middlewares, unitController.create);
Router.put('/units/:id', middlewares, unitController.update);
Router.delete('/units/:id', middlewares, unitController.remove);
Router.get('/units/:id/buyers', middlewares, unitController.getBuyersOFUnit);
Router.post('/units/:unitId/buyers/create', middlewares, buyerController.createBuyer);
Router.get('/units/:unitId/buyers/:buyerId', middlewares, buyerController.getBuyerById);
Router.put('/units/:unitId/buyers/:buyerId', middlewares, buyerController.updateBuyer);
Router.get('/units/:unitId/buyers/:buyerId/invoices', middlewares, invoiceController.getBuyerInvoicesById);
Router.get('/units/:unitId/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.getInvoiceById);
Router.put('/units/:unitId/buyers/:buyerId/invoices/:id', middlewares, invoiceController.updateInvoice);
Router.post('/units/:unitId/buyers/:buyerId/invoices/create', middlewares, invoiceController.createInvoice);
Router.get('/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print', middlewares, invoiceController.printInvoice);
Router.get('/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print/receipt', middlewares, invoiceController.printInvoice);
Router.get('/units/:unitId/buyers/:buyerId/invoices', middlewares, invoiceController.getBuyerInvoicesById);
Router.delete('/units/:unitId/buyers/:id', middlewares, buyerController.deleteBuyer);
Router.delete('/units/:unitId/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.deleteInvoice);


Router.get('/buyers', middlewares, buyerController.getBuyers);
Router.get('/buyers/:buyerId', middlewares, buyerController.getBuyerById);
Router.post('/buyers/create', middlewares, buyerController.createBuyer);
Router.put('/buyers/:buyerId', middlewares, buyerController.updateBuyer);
Router.delete('/buyers/:id', middlewares, buyerController.deleteBuyer);


Router.get('/invoices', middlewares, invoiceController.getInvoices);
Router.get('/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.getInvoiceById);
Router.post('/buyers/:buyerId/invoices/create', middlewares, invoiceController.createInvoice);
Router.put('/buyers/:buyerId/invoices/:id', middlewares, invoiceController.updateInvoice);
// Router.get('/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.printInvoice);
Router.delete('/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.deleteInvoice);

Router.get('/buyers/:buyerId/invoices/:invoiceId/print', middlewares, invoiceController.printInvoice);
Router.get('/buyers/:buyerId/invoices/:invoiceId/print/receipt', middlewares, invoiceController.printInvoice);
Router.get('/buyers/:buyerId/invoices', middlewares, invoiceController.getBuyerInvoicesById);

//reports
Router.post('/report/with-gst', middlewares, reportsController.withGST);
Router.post('/report/without-gst', middlewares, reportsController.withOutGST);
Router.post('/report/with-pst', middlewares, reportsController.withPST);
Router.post('/report/without-pst', middlewares, reportsController.withOutPST);

module.exports = Router;