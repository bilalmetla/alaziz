const session       = require('express-session');

module.exports = app => {
    app.use(session({
        secret: 'lifeless-secret-01890',
      saveUninitialized: true,
      resave:true,
      cookie: {
        httpOnly: true,
        maxAge:3600000,
          
        }
    }));
}