
(async () => {
    

global.__basedir = __dirname;
const express = require('express')
const config = require('./conf')
const utility = require('./utility')
const cookieParser = require('cookie-parser')
if (!config.isNedb) {
    const mng = require('./db/mongodb')
    await mng.connect().catch(ex => {
        console.error(ex)
        process.exit(1)
    })    
}


    const app = express()
    
    app.enable('trust proxy')
    app.use((req, res, next) => {
        req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
    })
app.use( express.static('../client/build'))  
//app.use( express.static('public'))  
    
    const appuse = require('./app')
    app.use(cookieParser());
appuse.map(lib=> require(`./app/${lib}`)(app) )

const routes = require('./routes');
app.use('/api', routes)

const port = process.env.PORT || config.port
app.listen(port, () => {
    utility.logMessage(`Example app listening at port :${port}`)
});

})()