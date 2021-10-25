


exports.units = {
    '/units/:id/buyers': ['GET'],
    '/units/:unitId/buyers/create': ['POST'],
    '/units/:unitId/buyers/:buyerId': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:status': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:status/:invoiceId': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:status/:id': ['PUT'],
    '/units/:unitId/buyers/:buyerId/invoices/:status/create': ['POST'],
    '/units/:unitId/buyers/:buyerId/invoices/:status/:invoiceId/print': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:status/:invoiceId/print/receipt': ['GET'],
    '/units/:unitId/buyers/:buyerId/invoices/:status/vouchers/create': ['POST'],
    '/units/:unitId/vouchers': ['GET'],
    '/units/:unitId/vouchers/:voucherId': ['GET', 'PUT'],
    '/units/:unitId/vouchers/:voucherId/invoices': ['POST', 'PUT'],
    '/units/:unitId/vouchers/:voucherId/invoices/pay': ['POST'],
    
}