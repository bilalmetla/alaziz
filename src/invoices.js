
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
        // this.buyerInfo.completeData = {invoices: []}
        this.buyerInfo.invoices = []
        this.buyerInfo.invoices.push({
            number: new Date().getTime(),
            businessType: this.businessType,
            type: this.type,
            date : this.date,
            items: this.items
        })

        this.db.insert(this.buyerInfo)
    }

    findInvoiceByNumber(id) {
        return new Promise((resolve, reject)=>{
            return this.db.find({ "invoices.number": parseInt(id) }, (err, user) => {
                if (err) {
                 return reject(err);
                }
             
                return resolve(user);
               });
        })
        
    }
}