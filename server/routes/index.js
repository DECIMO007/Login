var express = require('express');
var router = express.Router();
var auth = require('./login')
var session = require('express-session');

router.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true,
    })
  );

router.post('/login', auth.login)
router.post('/signup', auth.signup)
router.post('/logout', auth.logout)

module.exports = router;
