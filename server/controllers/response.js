const utility = require('../utility')

exports.send = async function (responseData, res) {
    utility.logMessage(`sending success response..`)
    utility.logMessage(responseData)
    //res.header.add('Content-Range','bytes : 0-9/*')
    //res.set('Access-Control-Expose-Headers', 'Content-Range')
   // res.setHeader('Content-Range', `bytes ${0}-${9}/${responseData.length}`);

    res.send(responseData )
}

exports.exception = async function (exception, res) {
    utility.logException(exception)
    res.send({
        errorMessage: exception.message
    }
    )
}