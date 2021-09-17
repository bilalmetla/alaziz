

const config = require('../conf');

if (config.isNedb) {
    module.exports = require('./nedb')
}
else if (config.isMongodb) {
        module.exports = require('./mongodb')
    
 }