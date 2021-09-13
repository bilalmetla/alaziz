


exports.units = {
    '/units/:id/buyers': ['GET'],
    '/units/:unitId/buyers/create': ['POST'],
    '/units/:unitId/buyers/:buyerId': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:invoiceId': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:id': ['PUT'],
    '/units/:unitId/buyers/:buyerId/invoices/create': ['POST'],
    '/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print/receipt': ['GET'],
    
}