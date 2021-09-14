
const Invoices = require("./invoices")
const utility = require('./utility')
const fs = require('fs')


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
  
async function takeInput(question, isRequired = true, validation) {
    try {
        let value = await Ask(question)
        if (validation && value)
        {
            value = validation(value) 
            }
        
        while (isRequired === true && !value) {
            console.log('Value is Required...')
            value = await takeInput(question, isRequired, validation)
        }
        return value
        
    } catch (e) {
        console.log(e)
    }
    
}

async function createBuyer() {

    try {
        let notRequired = false
        var buyer = await takeInput("Enter Buyer Name?: ")
        var address = await takeInput("Enter Address?: ")
        var reName = await takeInput("Enter Representitve Name?: ")
        var phone = await takeInput("Enter phone Number?: ", true, utility.validateNumberOnly)
        var email = await takeInput("Enter email?: ", notRequired)
        var ntnNumber = await takeInput("Enter NTN Number?: ", true, utility.validateNTN)
        var ntnName = await takeInput("Enter NTN Name?: ")
        
        let invoice = new Invoices()
        invoice.buyerInfo = {
            buyer,
            address,
            representitveName: reName,
            phone,
            email,
            ntnNumber,
            ntnName

        }
            
        let addedResult = await invoice.addBuyer()
        console.log('------------------------------------')
        console.log('Added Buyer Success', addedResult)
    } catch (e) {
        console.log(e)
    }
    
   
}

async function items() {
    let isRequired = true
    let description = await takeInput("Enter Item Description?: ")
    let qty = await takeInput("Enter Quentity?: ", isRequired, utility.validateNumberOnly)
    let rate = await takeInput("Enter Rate?: ", isRequired, utility.validateNumberOnly)
    let rateOfST = await takeInput("Enter Rate OF ST?: ", isRequired, utility.validateNumberOnly)
   
    const result = {
        
        quantity: qty,
        description,
        price: rate,
        rateOfST: rateOfST,
    }
    
    let stopped = await Ask("Enter \"end\" For Quit?: ")
    if (stopped.toLocaleLowerCase() === 'end') {
        
        return { item: result, stopped: false }
    }
    else {
        
        return { item: result, stopped: true }
    }


}



async function app() {
    try {
        
        let userRes;
        while (userRes !== '0') {
            console.log("Add New Buyer 1")
            console.log("Add New Invoice 2")
            console.log("Edit Buyer 3")
            console.log("Edit Inovice 4")
            console.log("Print Invoice Only 5")
            console.log("Monthly Report With GST 6")
            console.log("Monthly Report Without GST 7")
            console.log("Monthly Report With PST 8")
            console.log("Monthly  Report With GST 9")
            console.log("Monthly Book Report Without GST 10")
            console.log("Monthly Book Report Without GST 11")
            console.log("Monthly Book Report With PST 12")
            console.log("Monthly Book Report Without PST 13")
            console.log(`-------------------------------------------`)
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
            else if (userRes === '6') {
                await monthlyReportWithGST()
             }
            else if (userRes === '7') {
                await monthlyReportWithOutGST()
             }
            else if (userRes === '8') {
                await monthlyReportWithPST()
             }
            else if (userRes === '9') {
                await monthlyReportWithOutPST()
             }
            else if (userRes === '10') {
                await monthlySupplyBookReportGST(true)
             }
            else if (userRes === '11') {
                await monthlySupplyBookReportGST(false)
             }
            else if (userRes === '12') {
                await monthlyServiceBookReportPST(true)
             }
            else if (userRes === '13') {
                await monthlyServiceBookReportPST(false)
             }
        }

    } catch (e) {
        console.log(e)
        fs.writeFileSync('./exceptions.log', e.stack )
        
    }
   
}

async function addNewInvoice() {

    let res = await findBuyers()
    if (res == '0') {
        return
    }
    console.log(`-------------------------------------------`)
    console.log("Enter Buyer Id To Edit ")
    console.log("Go Back With 0")
    userRes = await takeInput("Enter Buyer Id?: ");
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
    let businessType = await takeInput("Choose Nature Of Business?: ")
    var date = await takeInput("Enter Date [dd-mm-yyyy]?: ", true, utility.validateDateFormat)
    let type = await takeInput("Enter Type Of Supply/Service?: ")
    let invoiceItems = []
    let stopped = true
    while (stopped) {
        const result = await items()
        stopped = result.stopped
        invoiceItems.push(result.item) 
    }

    let inv = {
        businessType,
        type,
        date,
        items: invoiceItems
    }
     let addedResult = await invoice.addInvoiceOnly(result._id, inv)
     let updatedItems = utility.calculateValuesAndTaxes(invoiceItems)
    result.invoices = []
    inv.items = updatedItems
    inv.date = date;
    result.invoices[0] = inv
    await utility.invoiceHtml(result)
    
    console.log('---------------------------------')
    console.log('added new invoice', addedResult)

}
async function printInvoice() {
    userRes = await takeInput("Enter Invoice Number?: ");
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
    printInvoice.date = utility.formatDate(printInvoice.date)
    result.invoices = [];
    result.invoices[0] =  printInvoice;
    await utility.invoiceHtml(result)
  
}

async function findBuyers() {
    let invoice = new Invoices()
    let userRes;
    let result = []
    while (userRes !== '0' &&  result.length === 0  ) {
        console.log("Find Buyer By Id 1")
        console.log("Find Buyer By Name 2")
        console.log("Find Buyer By Address 3")
        console.log("Find Buyer By Invoice NUmber 4")
        console.log("Go Back With 0 ")

        userRes = await Ask("Find Buyer By Option?: ");
        
        if (userRes === '1') {
           
            userRes = await takeInput("Enter Buyer Id?: ");
            result = await invoice.findBuyerById(userRes)
            await showFindedBuyers(result)
           
           
        } else if (userRes === '2') {
            userRes = await takeInput("Enter Buyer Name?: ");
            result = await invoice.findBuyerByName(userRes)
            await showFindedBuyers(result)
        }
        else if (userRes === '3') {
            userRes = await takeInput("Enter Buyer Address?: ");
            result = await invoice.findBuyerByAddress(userRes)
            await showFindedBuyers(result)
        }
        else if (userRes === '4') {
            userRes = await takeInput("Enter Buyer Invoice Number?: ");
            result = await invoice.findInvoiceByNumber(userRes)
            await showFindedBuyers(result)
        }
        else if (userRes == '0') {
            return
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
    let res = await findBuyers()
    if (res == '0') {
        return
    }
    let invoice = new Invoices()
    console.log("Enter Buyer Id To Edit ")
    console.log("Go Back With 0")
    userRes = await takeInput("Enter Buyer Id?: ");
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
    console.log(" With 0")
    userRes = await takeInput("Enter Invoice Number?: ");
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

async function monthlyReportWithGST() {
    let dates =  await takeDateBetweenInputs()
    let invoice = new Invoices();
    let result = await invoice.findBuyersWithDates(dates.startDate, dates.endDate);
    result = invoice.findInvoiceOfGivenDate(result, dates.startDate, dates.endDate)
   
    invoice.supplyReports(result, true)
    
}

async function monthlyReportWithOutGST() {
    let dates =  await takeDateBetweenInputs()
    let invoice = new Invoices();
    let result = await invoice.findBuyersWithDates(dates.startDate, dates.endDate);
    result = invoice.findInvoiceOfGivenDate(result, dates.startDate, dates.endDate)
   
    invoice.supplyReports(result, false)
    
}
async function monthlyReportWithPST() {
    let dates =  await takeDateBetweenInputs()
    let invoice = new Invoices();
    let result = await invoice.findBuyersWithDates(dates.startDate, dates.endDate);
    result = invoice.findInvoiceOfGivenDate(result, dates.startDate, dates.endDate)
   
    invoice.serviceReports(result, false)
    
}

async function monthlyReportWithOutPST() {
    let dates =  await takeDateBetweenInputs()
    let invoice = new Invoices();
    let result = await invoice.findBuyersWithDates(dates.startDate, dates.endDate);
    result = invoice.findInvoiceOfGivenDate(result, dates.startDate, dates.endDate)
   
    invoice.serviceReports(result, false)
    
}

async function monthlySupplyBookReportGST(isGst) {
    let dates =  await takeDateBetweenInputs()
    let invoice = new Invoices();
    let result = await invoice.findBuyersWithDates(dates.startDate, dates.endDate);
    result = invoice.findInvoiceOfGivenDate(result, dates.startDate, dates.endDate)
   
    invoice.supplyBookReports(result, isGst)
    
}

async function monthlyServiceBookReportPST(isGst) {
    let dates =  await takeDateBetweenInputs()
    let invoice = new Invoices();
    let result = await invoice.findBuyersWithDates(dates.startDate, dates.endDate);
    result = invoice.findInvoiceOfGivenDate(result, dates.startDate, dates.endDate)
   
    invoice.serviceBookReports(result, isGst)
    
}

async function takeDateBetweenInputs() {
    console.log("Back With 0")
    let startDate = await takeInput("Enter Start Date [dd-mm-yyyy]?: ", true, utility.validateDateFormat);
    let endDate = await takeInput("Enter End Date [dd-mm-yyyy]?: ", true, utility.validateDateFormat);
    return {startDate, endDate}
}

app().catch(ex => console.log(ex))
