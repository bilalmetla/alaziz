module.exports = {
    companyDetails: Object.freeze({
        NTNNumber:'7397385-6',
        SRNNumber:'32-77-8761-341-78',
    }),
    businessTypes: Object.freeze({
        SUPPLIES: 'Supply',
        SERVICES: 'Service',
    }),
    businessTypeIncomeTaxes: Object.freeze({
        SUPPLIES: 4.5,
        SERVICES: 10
    }),
    saleTaxesWithHeld: Object.freeze({
        SUPPLIES: 20,
        SERVICES: 100
    }),
    receivedSaleTaxes: Object.freeze({
        SUPPLIES: 80,
        SERVICES: 0
    }),

    invoiceStatues: Object.freeze({
        UNPAID:'Unpaid',
        PAID:'Paid',
        CANCELLED:'Cancelled',
    })
}