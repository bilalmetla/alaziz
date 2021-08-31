const invoiceGenerator = require('pdf-invoice-generator');
 



exports.invoice = async function ({ recipient, articles, grandTotals }) {
    invoiceGenerator.configure({
        global: {
          logo:"https://vehiclesolutions.com.au/wp-content/uploads/2017/03/Vehicle-Solutions-logo.png",
          invoice_template: `./static/invoice.pug`,
          date: new Date(),
          date_format: "YY/MM/DD",
          lang: "en"
        }
    });
    
    let fileName = `invoice-${recipient.name}-${recipient.invoiceNumber}`
    const invoice = invoiceGenerator.create();

    invoice.recipient = recipient;
    invoice.recipient.grandTotals = grandTotals
    invoice.statement_conclusion = {
    "NTN/PTN#": "7397385-6",
    "STRN#": "32-77-8761-341-78",
    };
    
    invoice.statement_heading = {
   // subject: "Activity Statement",
   // subtitle: "Salary Packaging Statement for the period FBT year to date"
    };
    invoice.article_headers = [
    "Qty",
    "Description",
    "Rate",
    "Value Excel.ST",
    "Rate of ST",
    "Total ST Payable",
    "Value Of Including ST"
    ];
   
    invoice.articles = articles
    
    const options = {
    timeout: "90000",
    border: {
      top: "10px",
      right: "10px",
      bottom: "10px",
      left: "10px"
    },
    header: {
      height: "10mm",
      contents:
        '<div style="padding:5px 10px 5px 10px;"><div style="float:left;">Activity Statement</div><div style="float:right;"><span style="color:#444;font-size: 50%;">Print No.: ' +
        require("uuid/v4")() +
        "</span></div></div>"
    },
    footer: {
      height: "10mm",
      contents: {
        default:
          '<div style="padding:5px 10px 5px 10px;"><div style="float:left;"><span>Page {{page}}</span> of <span>{{pages}}</span>  <span style="color:#444;font-size: 50%;">Generated ' +
          new Date() +
          "</span></div></div>"
      }
    }
    };
    
    invoice.template_configuration = {
      rows_in_first_page: invoice.articles.length,
      rows_per_pages: invoice.articles.length,
      rows_in_last_page: invoice.articles.length
    };
    
    let nbArticles = invoice.articles.length;
    let loop = 1;
    while (true) {
      if (loop === 1) {
        nbArticles -= invoice.template_configuration.rows_in_first_page;
        if (nbArticles <= 0) {
          invoice.template_configuration.loop_table = (invoice.template_configuration.rows_in_first_page !== invoice.template_rows_per_page ? 1 : 2);
          break;
        }
      }
      if (loop >= 2) {
        if (nbArticles <= invoice.template_configuration.rows_in_last_page) {
          invoice.template_configuration.loop_table = loop;
          break;
        }
        nbArticles -= invoice.template_configuration.rows_per_pages;
        if (nbArticles <= 0) {
          invoice.template_configuration.loop_table = loop;
          break;
        }
      }
      loop += 1;
    }
    
    // invoice
    // .getInvoice()
    // .toPDF(options)
    // .toFile("./invoice.pdf")
    // .then(() => {
    //   console.log("file created.");
    // });
    
    await invoice
    .getInvoice()
    .toHTML()
    .toFile(`./generated-invoices/${fileName}.html`)
    // .then(() => {
    //   console.log("file created.");
    // });
    
}

exports.receipt = async function ({ recipient, articles, grandTotals }) {
    invoiceGenerator.configure({
        global: {
          logo:"https://vehiclesolutions.com.au/wp-content/uploads/2017/03/Vehicle-Solutions-logo.png",
          invoice_template: `./static/receipt.pug`,
          date: new Date(),
          date_format: "YY/MM/DD",
          lang: "en"
        }
      });
    let fileName = `receipt-${recipient.name}-${recipient.invoiceNumber}`
    const invoice = invoiceGenerator.create();

    invoice.recipient = recipient;
    invoice.recipient.grandTotals = grandTotals
  
    invoice.article_headers = [
    "Qty",
    "Description",
    "Rate",
    "Value Excel.ST",
    "Rate of ST",
    "Total ST Payable",
    "Value Of Including ST"
    ];
   
   // invoice.articles = articles
    
    
    invoice.template_configuration = {
      rows_in_first_page: invoice.articles.length,
      rows_per_pages: invoice.articles.length,
      rows_in_last_page: invoice.articles.length
    };
    
    let nbArticles = invoice.articles.length;
    let loop = 1;
    while (true) {
      if (loop === 1) {
        nbArticles -= invoice.template_configuration.rows_in_first_page;
        if (nbArticles <= 0) {
          invoice.template_configuration.loop_table = (invoice.template_configuration.rows_in_first_page !== invoice.template_rows_per_page ? 1 : 2);
          break;
        }
      }
      if (loop >= 2) {
        if (nbArticles <= invoice.template_configuration.rows_in_last_page) {
          invoice.template_configuration.loop_table = loop;
          break;
        }
        nbArticles -= invoice.template_configuration.rows_per_pages;
        if (nbArticles <= 0) {
          invoice.template_configuration.loop_table = loop;
          break;
        }
      }
      loop += 1;
    }
    
    // invoice
    // .getInvoice()
    // .toPDF(options)
    // .toFile("./invoice.pdf")
    // .then(() => {
    //   console.log("file created.");
    // });
    
    await invoice
    .getInvoice()
    .toHTML()
    .toFile(`./generated-invoices/${fileName}.html`)
    
    
}