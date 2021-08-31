
const Invoices = require("./invoices")
const utility = require('./utility')


// Function
function Ask(query) {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    return  new Promise(resolve => readline.question(query, (ans) => {
    readline.close();
    resolve(ans);
  }))
}
  

async function createBuyer() {
    
    console.log("List Of Business.")
    console.log("Supply: 1")
    console.log("Services: 2")
    let businessType = await Ask("Choose Nature Of Business?: ")
    var buyer = await Ask("Enter Buyer?: ")
    var address = await Ask("Enter Address?: ")
    var date = await Ask("Enter Date [dd-mm-yyyy]?: ")
    
    let type = await Ask("Enter Type Of Supply/Service?: ")
    
    let invoice = new Invoices()
    invoice.buyerInfo = { buyer, address }
    invoice.date = date
    invoice.businessType = businessType
    invoice.type = type
    invoice.items = []
            
    let stopped = true
    while (stopped) {
        const result = await items()
        stopped = result.stopped
        invoice.items.push(result.item) 
    }
    
    invoice.add()
    utility.invoiceHtml(invoice.buyerInfo)
   
}

async function items() {
    
    let qty = await Ask("Enter Quentity?: ")
    let description = await Ask("Enter Item Description?: ")
    let rate = await Ask("Enter Rate?: ")
    let rateOfST = await Ask("Enter Rate OF ST?: ")
   
    let valueExcelST = parseInt(qty) * parseInt(rate)
    let totalSTPayable = (valueExcelST * parseInt(rateOfST)) / 100
    let valueOfIncludingST = valueExcelST + totalSTPayable

    const result = {
        
        quantity: qty,
        description,
        price: rate,
        valueExcelST,
        rateOfST: rateOfST,
        totalSTPayable,
        valueOfIncludingST,
    }
    
    let stopped = await Ask("Enter \"yes\" For Quit?: ")
    if (stopped.toLocaleLowerCase() === 'yes') {
        
        return { item: result, stopped: false }
    }
    else {
        
        return { item: result, stopped: true }
    }


}



async function app() {
    let userRes;
    while (userRes !== '0') {
        console.log("New Buyer 1")
        console.log("Print Invoice 2")
        console.log("Option 3")
        userRes = await Ask("Pick an option?: ");
        if (userRes === '1') {
            await createBuyer()
        } else if (userRes === '2') {
           await printInvoice()
        }
    }
}

async function printInvoice() {
    userRes = await Ask("Enter Invoice Number?: ");
    let invoice = new Invoices()
    let result = await invoice.findInvoiceByNumber(userRes)
    console.log(result)
    if (result.length > 0) {
        result = result[0]
    }
    
    utility.invoiceHtml(result)
  
}



app()
