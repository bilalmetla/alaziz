const Datastore = require('nedb');
const users = new Datastore({ filename: __basedir+'/data/users.db', autoload: true });
const units = new Datastore({ filename: __basedir+'/data/units.db', autoload: true });
const buyers = new Datastore({ filename: __basedir+'/data/buyers.db', autoload: true });
const invoices = new Datastore({ filename: __basedir+'/data/invoices.db', autoload: true });
const serialNumbers = new Datastore({ filename: __basedir+'/data/serialNumbers.db', autoload: true });

module.exports = {
    users,
    units,
    buyers,
    invoices,
    serialNumbers
}
