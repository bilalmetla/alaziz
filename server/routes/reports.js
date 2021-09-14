
const reportsController = require('../controllers/reports');

module.exports = (Router, middlewares) => {
    
    //reports
    Router.post('/report/with-gst', middlewares, reportsController.withGST);
    Router.post('/report/without-gst', middlewares, reportsController.withOutGST);
    Router.post('/report/with-pst', middlewares, reportsController.withPST);
    Router.post('/report/without-pst', middlewares, reportsController.withOutPST);

}