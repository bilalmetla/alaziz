

//Import the library into your project
var easyinvoice = require('easyinvoice');
var fs = require('fs');



exports.pdf = async function (data) {
    const result = await easyinvoice.createInvoice(data);                       
    await fs.writeFileSync(`${data.invoiceNumber}.pdf`, result.pdf, 'base64');
}