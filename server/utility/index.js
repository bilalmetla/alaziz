


exports.logMessage = function (message) {
    if (typeof message === 'object') {
        console.log(JSON.stringify(message))
    }
    else {
        console.log(message)    
    }
    
}

exports.logException = function (exception) {
   
    console.log(exception.message, exception.stack)  
    
};

exports.mapToClientResponse = function (result) {
    if (result && result[0]) {
        result.map(item => {
            item.id = item._id;
            delete item._id
            return item;
        });
    }
    else {
        if ( result._id) {
            result.id = result._id
            delete result._id
        }
        
     }
    
    
}