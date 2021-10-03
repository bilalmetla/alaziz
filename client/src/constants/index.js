

exports.constants = {
    isLocal: true,
    localServer:'http://127.0.0.1:3000/api',
    productionServer: 'https://alaziz.herokuapp.com/api',
    
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
}