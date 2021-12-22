

export const constants = {
    isLocal: false,
    localServer:'http://127.0.0.1:3000/api',
    productionServer: 'https://alaziz.herokuapp.com/api',
    
    businessTypes: Object.freeze({
        SUPPLY_WITH_GST: 'Supply With GST',
        SUPPLY_WITHOUT_GST: 'Supply Without GST',
        SERVICES_WITH_PST: 'Service With PST',
        SERVICES_WITHOUT_PST: 'Service Without PST',
        PERSONAL: 'Personal',
        
    }),
    businessTypeIncomeTaxes: Object.freeze({
        SUPPLIES: 4.5,
        SERVICES: 10,
        PERSONAL: 0
    }),
    saleTaxesWithHeld: Object.freeze({
        SUPPLIES: 20,
        SERVICES: 0,
        PERSONAL: 0
    }),
    receivedSaleTaxes: Object.freeze({
        SUPPLIES: 80,
        SERVICES: 0,
        PERSONAL: 0
    }),
}