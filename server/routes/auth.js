const router = require('express').Router();

require('./../services/passportLogin');
require('./../services/passportRegister');
const {
  localLogin,
  localRegisteration,
  ensureAuthentication
} = require('./middlewares');
const User = require('mongoose').model('users');

router.post('/register', localRegisteration, (req, res) => {
  res.send({ success: 'user created' });
});

router.post('/login', localLogin, (req, res) => {
  res.send(req.user);
});

router.get('/logout', ensureAuthentication, (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
