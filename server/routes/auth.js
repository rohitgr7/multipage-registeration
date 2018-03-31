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
  res.send(req.user);
});

router.post('/login', localLogin, (req, res) => {
  if (!req.user) {
    res.send(user);
  } else {
    res.status(401).send({ error: 'Invalid email or password!' });
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/user', ensureAuthentication, (req, res) => {
  res.send(req.user);
});

module.exports = router;
