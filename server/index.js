
global.__basedir = __dirname;
const express = require('express')
const config = require('./conf')
const utility = require('./utility')


const app = express()
app.use( express.static('../client/build'))  
//app.use( express.static('public'))  
const appuse = require('./app')
appuse.map(lib=> require(`./app/${lib}`)(app) )

const routes = require('./routes');
app.use('/api', routes)

const port = process.env.PORT || config.port
app.listen(port, () => {
    utility.logMessage(`Example app listening at port :${port}`)
})