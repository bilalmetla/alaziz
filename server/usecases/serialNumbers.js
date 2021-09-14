

exports.getSerialNumber = async function (db) {
    return new Promise((resolve, reject)=>{
         db.serialNumbers.find({ }, (err, docs) => {
            if (err) {
             return reject(err);
            }
        
             if (!docs || docs.length === 0) {
               return insertSerial(reject, resolve, db) 
             }
            
             return incrementSerialNumber(docs[0], reject, resolve, db)
                        
           });
     })
}


function incrementSerialNumber(serials, reject, resolve, db) {
    incrementByOne(serials)
    let serialId = serials._id
    let data = {
        serialNumber: process.serialNumber,
        bookNumber: process.bookNumber
    }
    return updateSerial(serialId, data, reject, resolve, db)
}

function incrementByOne(serials) {
    process.serialNumber = serials.serialNumber + 1
    process.bookNumber = serials.bookNumber

    if (process.serialNumber > 100) {
        process.serialNumber = 1
        process.bookNumber++
    }
}

function updateSerial(id, data, reject, resolve, db) {
    db.serialNumbers.update({_id: id}, data, {}, (err, docs) => {
        if (err) {
         return reject(err);
        }
     
        return resolve(docs);
       })
}



function insertSerial(reject, resolve, db) {
    process.serialNumber = 1
    process.bookNumber = 1
    let data = {
        serialNumber: process.serialNumber,
        bookNumber: process.bookNumber
    }

    db.serialNumbers.insert(data, (err, docs) => {
        if (err) {
            return reject(err);
           }
        
           return resolve(docs);
    })
}