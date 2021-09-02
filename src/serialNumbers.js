
const Nedb = require("./nedb")
const db = new Nedb('./db/serialNumber.db').db
//const fs = require('fs');

// let serialNumberFile = './serialNumbers/serialNumber.txt'
// let bookNumberFile = './serialNumbers/booknumber.txt'

exports.getSerialNUmber = async function () {
    return new Promise((resolve, reject)=>{
         db.find({ }, (err, docs) => {
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
                db.update({_id:docs[0]._id}, {serialNumber: process.serialNumber , bookNumber: process.bookNumber}, {}, (err, docs) => {
                    if (err) {
                     return reject(err);
                    }
                 
                    return resolve(docs);
                   })

            }
            else {
                process.serialNumber = 1
                process.bookNumber = 1
                db.insert({ serialNumber: process.serialNumber, bookNumber: process.bookNumber }, (err, docs) => {
                    if (err) {
                        return reject(err);
                       }
                    
                       return resolve(docs);
                })

            }
            
           });
     })
}

// exports.get = async function () {
//     process.serialNumber =  +fs.readFileSync(serialNumberFile, {encoding:'utf8', flag:'r'})
//     process.bookNumber = +fs.readFileSync(bookNumberFile, {encoding:'utf8', flag:'r'}) 
// }

// exports.setSerialNumber = async function () {
//     process.serialNumber =  +fs.readFileSync(serialNumberFile, {encoding:'utf8', flag:'r'})
//     process.bookNumber = +fs.readFileSync(bookNumberFile, {encoding:'utf8', flag:'r'}) 
//     process.serialNumber++
//     if (process.serialNumber > 100) {
//         process.serialNumber = 1
//         process.bookNumber++
//         fs.writeFileSync(bookNumberFile, +process.bookNumber)
//     }
    
//     fs.writeFileSync(serialNumberFile, +process.serialNumber)
// }

// exports.setBookNumber = async function () {
    
//     fs.writeFileSync(bookNumberFile, +process.bookNumber)
// }