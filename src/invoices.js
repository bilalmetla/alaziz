
const Nedb = require( "./nedb")
const serialNumber = require('./serialNumbers')
const fs = require('fs')
const utility = require('./utility')
const constants = require('./constants');

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
        this.db = new Nedb('./db/invoices.db').db
        
        
    }
    
     addBuyer() {
        
        this.buyerInfo.invoices = []
         return new Promise((resolve, reject) => {
            return this.db.insert(this.buyerInfo, (err, docs) => {
                 if (err) {
                     return reject(err);
                 }
            
                 return resolve(docs);
             });
         })
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
        let regex = new RegExp(name, 'i'); // i for case insensitive
        
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
    
    async addInvoiceOnly(id, data) {
       await serialNumber.getSerialNUmber()
        data.number = process.serialNumber;
        data.bookNumber = process.bookNumber;
        data.date = new Date(data.date);

        return new Promise((resolve, reject) => {
            return this.db.update({ "_id":id }, {$push: {'invoices': data}}, {}, (err, docs) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(data);
               });
        })
        
    }

    findBuyersWithDates(startDate, endDate) {
        
        return new Promise((resolve, reject)=>{
            return this.db.find({
                "invoices.date": {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
            }, (err, docs) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(docs);
               });
        })
        
    }

    findInvoiceOfGivenDate(result, startDate, endDate) {
        for (let i = 0; i < result.length; i++){           
            result[i].invoices = result[i].invoices.filter(inv => {
                let check = new Date(inv.date).getTime()
                let from = new Date(startDate).getTime()
                let to = new Date(endDate).getTime()
                if (check <= to && check >= from) {
                    return inv
                }
            })
            
        }
       return result
    }


    supplyReports(result, isGST) {

        try {
            let fileName = isGST ? './monthlyReports/Monthly Sale Report With GST.csv': './monthlyReports/Monthly Sale Report Without GST.csv'
            let header = `Buyer NTN, Buyer NTN Name, Name Of Items, Type, Bill No.,Value Of Sale, Sale Tax, WHST, Total Value Of Sale, Buyer Name, Buyer Address, `
            fs.writeFileSync(fileName, header+'\n', )
            for (let i = 0; i < result.length; i++){
                let buyer = result[i]
                let invoices = buyer.invoices
                
                for (let j = 0; j < invoices.length; j++){
                    let invoice = invoices[j]
                    if (invoice.businessType != constants.businessTypes.SUPPLIES) {
                        continue;
                    }
                    let items = utility.calculateValuesAndTaxes(invoice.items)
                    
                    for (let k = 0; k < items.length; k++){
                        let item = items[k]
                        if (isGST === true && item.rateOfST == 0) {
                            continue;
                        }
                        if (isGST === false && item.rateOfST != 0) {
                            continue;
                        }
                        let totalSTPayable20Percent = (item.totalSTPayable * 20) / 100
                        let data = `${buyer.ntnNumber},${buyer.ntnName},${item.description},${invoice.type},${invoice.number},${item.valueExcelST},${item.totalSTPayable},${totalSTPayable20Percent},${item.valueOfIncludingST},${buyer.buyer},${buyer.address},`
                        fs.appendFileSync(fileName, data+'\n')
                        
                    }
                }
                  
                
            }
        } catch (e) {
            throw e
        }
       
    }

    supplyBookReports(result, isGST) {

        try {
            let fileName = isGST ? './monthlyReports/Monthly Sale Book With GST.csv': './monthlyReports/Monthly Sale Book Without GST.csv'
            let header = `Buyer NTN, Buyer NTN Name, Type, Bill No.,Value Of Sale, Sale Tax, WHST, Total Value Of Sale,  `
            fs.writeFileSync(fileName, header+'\n', )
            for (let i = 0; i < result.length; i++){
                let buyer = result[i]
                let invoices = buyer.invoices
                
                for (let j = 0; j < invoices.length; j++){
                    let invoice = invoices[j]
                    if (invoice.businessType != constants.businessTypes.SUPPLIES) {
                        continue;
                    }
                    let items = utility.calculateValuesAndTaxes(invoice.items)
                    
                    for (let k = 0; k < items.length; k++){
                        let item = items[k]
                        if (isGST === true && item.rateOfST == 0) {
                            continue;
                        }
                        if (isGST === false && item.rateOfST != 0) {
                            continue;
                        }
                        let totalSTPayable20Percent = (item.totalSTPayable * 20) / 100
                        let data = `${buyer.ntnNumber},${buyer.ntnName},${invoice.type},${invoice.number},${item.valueExcelST},${item.totalSTPayable},${totalSTPayable20Percent},${item.valueOfIncludingST},`
                        fs.appendFileSync(fileName, data+'\n')
                        
                    }
                }
                  
                
            }
        } catch (e) {
            throw e
        }
       
    }

    serviceReports(result, isPST) {

        let fileName = isPST ? './monthlyReports/Monthly Sale Report With PST.csv': './monthlyReports/Monthly Sale Report Without PST.csv'
        let header = `Buyer NTN, Buyer NTN Name, Name Of Items, Type, Bill No.,Value Of Sale, Sale Tax, WHST, Total Value Of Sale, Buyer Name, Buyer Address, `
        fs.writeFileSync(fileName, header+'\n', )
        for (let i = 0; i < result.length; i++){
            let buyer = result[i]
            let invoices = buyer.invoices
            
            for (let j = 0; j < invoices.length; j++){
                let invoice = invoices[j]
                if (invoice.businessType != constants.businessTypes.SERVICES) {
                    continue;
                }
                let items = utility.calculateValuesAndTaxes(invoice.items)
                
                for (let k = 0; k < items.length; k++){
                    let item = items[k]
                    if (isPST === true && item.rateOfST == 0) {
                        continue;
                    }
                    if (isPST === false && item.rateOfST != 0) {
                        continue;
                    }
                    let totalSTPayable20Percent = (item.valueExcelST * 20) / 100
                    let data = `${buyer.ntnNumber},${buyer.ntnName},${item.description},${invoice.type},${invoice.number},${item.valueExcelST},${item.totalSTPayable},${totalSTPayable20Percent},${item.valueOfIncludingST},${buyer.buyer},${buyer.address},`
                    fs.appendFileSync(fileName, data+'\n')
                    
                }
            }
            
            
            
        }
    }
    
    serviceBookReports(result, isPST) {

        let fileName = isPST ? './monthlyReports/Monthly Sale Book With PST.csv': './monthlyReports/Monthly Sale Book Without PST.csv'
        let header = `Buyer NTN, Buyer NTN Name, Type, Bill No.,Value Of Sale, Sale Tax, WHST, Total Value Of Sale,`
        fs.writeFileSync(fileName, header+'\n', )
        for (let i = 0; i < result.length; i++){
            let buyer = result[i]
            let invoices = buyer.invoices
            
            for (let j = 0; j < invoices.length; j++){
                let invoice = invoices[j]
                if (invoice.businessType != constants.businessTypes.SERVICES) {
                    continue;
                }
                let items = utility.calculateValuesAndTaxes(invoice.items)
                
                for (let k = 0; k < items.length; k++){
                    let item = items[k]
                    if (isPST === true && item.rateOfST == 0) {
                        continue;
                    }
                    if (isPST === false && item.rateOfST != 0) {
                        continue;
                    }
                    let totalSTPayable20Percent = (item.valueExcelST * 20) / 100
                    let data = `${buyer.ntnNumber},${buyer.ntnName},${invoice.type},${invoice.number},${item.valueExcelST},${item.totalSTPayable},${totalSTPayable20Percent},${item.valueOfIncludingST},`
                    fs.appendFileSync(fileName, data+'\n')
                    
                }
            }
            
            
            
        }
    }

}