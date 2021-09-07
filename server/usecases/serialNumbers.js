

exports.getSerialNumber = async function (db) {
    return new Promise((resolve, reject)=>{
         db.serialNumbers.find({ }, (err, docs) => {
            if (err) {
             return reject(err);
            }
        
            if (docs && docs.length > 0) {
                process.serialNumber = docs[0].serialNumber + 1
                process.bookNumber = docs[0].bookNumber

                if (process.serialNumber > 100) {
                    process.serialNumber = 1
                    process.bookNumber++
                }
                db.serialNumbers.update({_id:docs[0]._id}, {serialNumber: process.serialNumber , bookNumber: process.bookNumber}, {}, (err, docs) => {
                    if (err) {
                     return reject(err);
                    }
                 
                    return resolve(docs);
                   })

            }
            else {
                process.serialNumber = 1
                process.bookNumber = 1
                db.serialNumbers.insert({ serialNumber: process.serialNumber, bookNumber: process.bookNumber }, (err, docs) => {
                    if (err) {
                        return reject(err);
                       }
                    
                       return resolve(docs);
                })

            }
            
           });
     })
}
