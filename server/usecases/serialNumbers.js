
const SERIAL_NUMBERS = 'serialNumbers'

exports.getSerialNumber = async function (db) {
    let docs = await db.find(SERIAL_NUMBERS, {})
    if (!docs || docs.length === 0) {
        return await insertSerial(db) 
    }
        
    return await incrementSerialNumber(docs[0], db)
}


async function incrementSerialNumber(serials, db) {
    incrementByOne(serials)
    let serialId = serials._id
    let data = {
        serialNumber: process.serialNumber,
        bookNumber: process.bookNumber
    }
    return await updateSerial(serialId, data, db)
}

function incrementByOne(serials) {
    process.serialNumber = serials.serialNumber + 1
    process.bookNumber = serials.bookNumber

    if (process.serialNumber > 100) {
        process.serialNumber = 1
        process.bookNumber++
    }
}

async function updateSerial(id, data, db) {
    let where = { _id: id }
    return await db.update(SERIAL_NUMBERS, where, data)
}



async function insertSerial(db) {
    process.serialNumber = 1
    process.bookNumber = 1
    let data = {
        serialNumber: process.serialNumber,
        bookNumber: process.bookNumber
    }

    await db.insert(SERIAL_NUMBERS, data)
}