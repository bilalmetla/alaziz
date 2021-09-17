const session       = require('express-session');

module.exports = app => {
    app.use(session({
        secret: process.env.SESSION_SECRET,
      saveUninitialized: true,
      resave:false,
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge:3600000,
          
        }
    }));
}