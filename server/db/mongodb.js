const utility = require('../utility')
const config = require('../conf')
const { MongoClient } = require('mongodb');

var db = ''

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = config.mongodbConfig.url;
    const mongoClient = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
       let client = await mongoClient.connect();
        db = client.db(config.mongodbConfig.database)        
 
    } catch (e) {
        console.error(e);
    }
   
}

module.exports = {
    connect: main,
    getDB: ()=> db    
}




