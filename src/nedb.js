const NeDB = require('nedb')


//method from where I init my database.
module.exports = class Nedb {
     db;
    constructor( file) {
        this.db = new NeDB({filename: file});
        this.db.loadDatabase();
    }

    insert(obj) {
        this.db.insert(obj);
    }
}
