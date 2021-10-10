const validations = require('../validations')

const VOUCHERS = 'vouchers'

exports.create = async function (voucher, db) {

    validations.voucher(voucher)
    voucher.createdDate = new Date()

    return await db.insert(VOUCHERS, voucher)
    
};


exports.getByUnits = async function ({ unitId }, db) {

    const where = {
        unitId,
    }
    return await db.find(VOUCHERS, where)
    
};

exports.getById = async function ({ unitId, voucherId }, db) {

    const where = {
        $and: [
            { unitId },
            {'_id': voucherId}
        ]
    }
    return await db.find(VOUCHERS, where)
    
};

exports.update = async function ({ unitId, voucherId }, voucher, db) {

    validations.voucher(voucher)
    voucher.updatedDate = new Date()
    let where = {
        $and: [
            { _id: voucherId },
            {unitId}
        ]
    }

    return await db.update(VOUCHERS, where, voucher)
    
};