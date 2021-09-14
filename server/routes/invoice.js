

const invoiceController = require('../controllers/invoice');

module.exports = (Router, middlewares) => {
    

    Router.get('/invoices', middlewares, invoiceController.getInvoices);
    Router.get('/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.getInvoiceById);
    Router.post('/buyers/:buyerId/invoices/create', middlewares, invoiceController.createInvoice);
    Router.put('/buyers/:buyerId/invoices/:id', middlewares, invoiceController.updateInvoice);
    Router.delete('/buyers/:buyerId/invoices/:invoiceId', middlewares, invoiceController.deleteInvoice);
    Router.get('/buyers/:buyerId/invoices/:invoiceId/print', middlewares, invoiceController.printInvoice);
    Router.get('/buyers/:buyerId/invoices/:invoiceId/print/receipt', middlewares, invoiceController.printInvoice);
    Router.get('/buyers/:buyerId/invoices', middlewares, invoiceController.getBuyerInvoicesById);

 };