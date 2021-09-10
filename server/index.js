
global.__basedir = __dirname;
const express = require('express')
const config = require('./conf')
const utility = require('./utility')
const cors = require('cors')
const path = require('path')




const app = express()

// app.use(cors({
//     exposedHeaders: ['Content-Range'],
//   }));
app.use(cors())

app.use( express.static( 'public'))

// app.get("/", (req, res) => {
//   res.sendFile("index.html", {root:'build'});
// })

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
const port = process.env.PORT || config.port

const routes = require('./routes');
app.use('/api', routes)

app.listen(port, () => {
    utility.logMessage(`Example app listening at port :${port}`)
})