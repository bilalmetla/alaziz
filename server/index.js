
global.__basedir = __dirname;
const express = require('express')
const config = require('./conf')
const utility = require('./utility')
const cors = require('cors')
const path = require('path')
const session       = require('express-session');



const app = express()

// app.use(cors({
//     exposedHeaders: ['Content-Range'],
//   }));
app.use(cors())

//app.use( express.static('public'))
app.use( express.static('../client/build'))

// app.get("/", (req, res) => {
//   res.sendFile("index.html", {root:'build'});
// })

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
const port = process.env.PORT || config.port

app.use(session({
    secret: 'lifeless-secret-01890',
  saveUninitialized: true,
  resave:false,
  cookie: {
    httpOnly: true,
    maxAge:3600000,
      
    }
}));
  


const routes = require('./routes');
app.use('/api', routes)



app.listen(port, () => {
    utility.logMessage(`Example app listening at port :${port}`)
})