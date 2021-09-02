

const fs = require('fs');

let serialNumberFile = './serialNumbers/serialNumber.txt'
let bookNumberFile = './serialNumbers/booknumber.txt'

exports.get = async function () {
    process.serialNumber =  +fs.readFileSync(serialNumberFile, {encoding:'utf8', flag:'r'})
    process.bookNumber = +fs.readFileSync(bookNumberFile, {encoding:'utf8', flag:'r'}) 
}

exports.setSerialNumber = async function () {
    process.serialNumber =  +fs.readFileSync(serialNumberFile, {encoding:'utf8', flag:'r'})
    process.bookNumber = +fs.readFileSync(bookNumberFile, {encoding:'utf8', flag:'r'}) 
    process.serialNumber++
    if (process.serialNumber > 100) {
        process.serialNumber = 1
        process.bookNumber++
        fs.writeFileSync(bookNumberFile, process.bookNumber)
    }
    
    fs.writeFileSync(serialNumberFile, process.serialNumber)
}

exports.setBookNumber = async function () {
    
    fs.writeFileSync(bookNumberFile, process.bookNumber)
}