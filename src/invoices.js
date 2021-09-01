
const Nedb = require( "./nedb")


module.exports = class Invoices {

    db;
    items;
    buyerInfo;
    date;
    businessType;
    type;
    constructor(
        
    )
    {
        this.db = new Nedb('./invoices.db').db
        
        
    }
    
    add() {
        
        this.buyerInfo.invoices = []

        this.db.insert(this.buyerInfo)
    }

    findInvoiceByNumber(number) {
        return new Promise((resolve, reject)=>{
            return this.db.find({ "invoices.number": parseInt(number) }, (err, docs) => {
                if (err) {
                 return reject(err);
                }
                
                return resolve(docs);
               });
        })
        
    }

    filterInovoiceWithNumber(invoices, number) {
        return invoices.filter((inv, index) => inv.number == number)[0]
    }

    findBuyerById(id) {
        return new Promise((resolve, reject)=>{
            return this.db.find({ "_id": id }, (err, docs) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(docs);
               });
        })
        
    }

    findBuyerByName(name) {
        const regex = new RegExp(name, 'i') // i for case insensitive
        return new Promise((resolve, reject)=>{
            return this.db.find({ "buyer": {$regex: regex} }, (err, docs) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(docs);
               });
        })
        
    }

    findBuyerByAddress(address) {
        const regex = new RegExp(address, 'i') // i for case insensitive
        return new Promise((resolve, reject)=>{
            return this.db.find({ "address": {$regex: regex} }, (err, docs) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(docs);
               });
        })
        
    }

    update(id, data) {
        delete data._id
        return new Promise((resolve, reject)=>{
            return this.db.update({ "_id":id }, data, {}, (err, docs) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(docs);
               });
        })
        
    }
    
    addInvoiceOnly(id, data) {
        delete data._id
        return new Promise((resolve, reject)=>{
            return this.db.update({ "_id":id }, {$push: {'invoices': data}}, {}, (err, docs) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(docs);
               });
        })
        
    }
}