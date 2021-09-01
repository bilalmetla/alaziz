
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
    
    let addedResult = await invoice.add()
    let updatedItems = utility.calculateValuesAndTaxes(invoice.items)
    invoice.buyerInfo.invoices[0].items = updatedItems
    await utility.invoiceHtml(invoice.buyerInfo)
   
}

async function items() {
    
    let qty = await Ask("Enter Quentity?: ")
    let description = await Ask("Enter Item Description?: ")
    let rate = await Ask("Enter Rate?: ")
    let rateOfST = await Ask("Enter Rate OF ST?: ")
   

    const result = {
        
        quantity: qty,
        description,
        price: rate,
        rateOfST: rateOfST,
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
    while (userRes !== '0') {6
        console.log("Add New Buyer 1")
        console.log("Add New Invoice 2")
        console.log("Edit Buyer 3")
        console.log("Edit Inovice 4")
        console.log("Print Invoice Only 5")
       // console.log("Option 3")
        userRes = await Ask("Pick an option?: ");
        
        if (userRes === '1') {
            await createBuyer()
        }
        else if (userRes === '2') {
           await addNewInvoice()
        }
        else if (userRes === '3') {
           await editBuyer()
        }
        else if (userRes === '4') {
            await editInVoice()
         }
        else if (userRes === '5') {
            await printInvoice()
         }
    }
}

async function addNewInvoice() {
    console.log(`-------------------------------------------\n`)
    await findBuyers()
    console.log("Enter Buyer Id To Edit ")
    console.log("Go Back 0")
    userRes = await Ask("Enter Buyer Id?: ");
    if (!userRes || userRes === '0') {
        return
    }

    let invoice = new Invoices()
    let result = await invoice.findBuyerById(userRes)
    if (result && result.length > 0) {
        result = result[0]
    }
    
    console.log("List Of Business.")
    console.log("Supply: 1")
    console.log("Services: 2")
    let businessType = await Ask("Choose Nature Of Business?: ")
    var date = await Ask("Enter Date [dd-mm-yyyy]?: ")
    let type = await Ask("Enter Type Of Supply/Service?: ")
    let invoiceItems = []
    let stopped = true
    while (stopped) {
        const result = await items()
        stopped = result.stopped
        invoiceItems.push(result.item) 
    }
    let inv = {
        number: new Date().getTime(),
        businessType,
        type,
        date,
        items: invoiceItems
    }
     let addedResult = await invoice.addInvoiceOnly(result._id, inv)
     let updatedItems = utility.calculateValuesAndTaxes(invoiceItems)
    result.invoices = []
    inv.items = updatedItems
     result.invoices[0] = inv
     await utility.invoiceHtml(result)

}
async function printInvoice() {
    userRes = await Ask("Enter Invoice Number?: ");
    let invoice = new Invoices();
    let result = await invoice.findInvoiceByNumber(userRes);
    console.log(result);
    if (!result || result.length === 0) {
        return
    }
    result = result[0]
    let printInvoice = invoice.filterInovoiceWithNumber(result.invoices, userRes)
    
    let updatedItems = utility.calculateValuesAndTaxes(printInvoice.items)
    printInvoice.items = updatedItems
    result.invoices = [];
    result.invoices[0] =  printInvoice;
    await utility.invoiceHtml(result)
  
}

async function findBuyers() {
    let invoice = new Invoices()
    let userRes;
    let result = []
    while (userRes !== '0' && result.length === 0) {
        console.log("Find Buyer By Id 1")
        console.log("Find Buyer By Name 2")
        console.log("Find Buyer By Address 3")
        console.log("Find Buyer By Invoice NUmber 4")
        console.log("Press ESC To Go Back / Press ")

        userRes = await Ask("Find Buyer By Option?: ");
        
        if (userRes === '1') {
            userRes = await Ask("Enter Buyer Id?: ");
            result = await invoice.findBuyerById(userRes)
            await showFindedBuyers(result)
        } else if (userRes === '2') {
            userRes = await Ask("Enter Buyer Name?: ");
            result = await invoice.findBuyerByName(userRes)
            await showFindedBuyers(result)
        }
        else if (userRes === '3') {
            userRes = await Ask("Enter Buyer Address?: ");
            result = await invoice.findBuyerByAddress(userRes)
            await showFindedBuyers(result)
        }
        else if (userRes === '4') {
            userRes = await Ask("Enter Buyer Invoice Number?: ");
            result = await invoice.findInvoiceByNumber(userRes)
            await showFindedBuyers(result)
        }
        
    }
}

async function showFindedBuyers(infoList) {
    console.log(`Buyers Details...'n`)
    for (let b of infoList) {
        console.log(`-----------------------------------------------`)
        console.log(`Buyer Id: ${b._id}`)
        console.log(`Buyer Name: ${b.buyer}`)
        console.log(`Buyer Address: ${b.address}`)
        console.log(`-----------------------------------------------`)
    }
    console.log(`Buyers Details End...\n`)    
    
}
async function editBuyer() {
    console.log(`-------------------------------------------\n`)
    await findBuyers()
    let invoice = new Invoices()
    console.log("Enter Buyer Id To Edit ")
    console.log("Go Back 0")
    userRes = await Ask("Enter Buyer Id?: ");
    if (!userRes || userRes === '0') {
        return
    }
    let result = await invoice.findBuyerById(userRes)
    if (result && result.length > 0) {
        result = result[0]
    }
    for (let key of Object.keys(result)) {
        if (key !== 'invoices' && key !== '_id') {
            userRes = await Ask(`${key} (${result[key]})?: `);
            if (userRes) {
                result[key] = userRes
            }
        }  
    }
    await invoice.update(result._id, result)
    console.log(`-------------------------------------------\n`)
    console.log(`Buyer Updated Success..`)
}

async function editInVoice() {
    console.log(`-------------------------------------------\n`)
    console.log("Go Back 0")
    userRes = await Ask("Enter Invoice Number?: ");
    if (userRes === '0') {
        return
    }
    let invoice = new Invoices();
    let result = await invoice.findInvoiceByNumber(userRes);
    console.log(result);
    if (!result || result.length === 0) {
        return
    }
    result = result[0]
    if (userRes === '0') {
        return
    }
    
    for (let key of Object.keys(result)) {
       
        if (key === 'invoices') {
            let invoices = result.invoices
            for (let index = 0; index < invoices.length; index++) {
                if(parseInt(userRes) == invoices[index].number)
                for (let key of Object.keys(invoices[index])) {
                    
                    if (key !== 'number' && key !== 'items') {
                        userRes = await Ask(`${key} (${invoices[index][key]})?: `);
                        if (userRes) {
                            invoices[index][key] = userRes
                        }
                    }
                    if (key === 'items') {
                        let items = invoices[index].items
                        for (let j = 0; j < items.length; j++){
                            for (let it of Object.keys(items[j])) {
                                userRes = await Ask(`${it} (${items[j][it]})?: `);
                                if (userRes) {
                                    items[j][it] = userRes
                                }
                            }
                        }

                        invoices[index].items = items
                    }
                 }
            }

            result.invoices = invoices
            await invoice.update(result._id, result)
            
            console.log(`Inovice Updated Success..`)
            console.log(`-------------------------------------------\n`)
         }
        
         
        
    }
}
app()
